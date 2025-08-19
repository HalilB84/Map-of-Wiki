export default class Controls {
  constructor(canvas, visualization) {
    this.zoomLevel = 1;
    this.cameraX = 0;
    this.cameraY = 0;

    this.isDragging = false;
    this.wasDragging = false;
    this.lastMouseX = 0;
    this.lastMouseY = 0;

    this.transitionActive = false;
    this.startState = null;
    this.endState = null;
    this.midState = null;
    this.stageCount = 0;
    this.stage = 0;
    this.stage1Duration = 2000;
    this.stage2Duration = 2000;
    this.transitionStartTime = 0;
    
    this.wheelSensitivity = 0.0020;
    this.touchSensitivity = 0.0040;
    this.lastTouchDistance = null;

    this.canvas = canvas;
    this.visualization = visualization;

    this.canvas.addEventListener('mousedown', e => this.handleMouseDown(e));
    this.canvas.addEventListener('touchstart', e => this.handleTouchStart(e), { passive: false });

    this.canvas.addEventListener('mouseup', () => this.isDragging = false);
    this.canvas.addEventListener('touchend', () => this.isDragging = false);

    this.canvas.addEventListener('mousemove', e => this.handleMouseMove(e));
    this.canvas.addEventListener('touchmove', e => this.handleTouchMove(e), { passive: false });

    this.canvas.addEventListener('wheel', e => this.handleZoom(e), { passive: true });
    this.canvas.addEventListener('click', e => { //This is probably not the best way to do this
      if (!this.wasDragging) {
        this.clickArticle(e);
      }
      this.wasDragging = false;
    });

    document.getElementById('random-button').addEventListener('click', () => this.goToRandomArticle());
  }

  handleMouseDown(e) {
    if (this.transitionActive) return;
    this.isDragging = true;
    this.lastMouseX = e.clientX;
    this.lastMouseY = e.clientY;
  }

  //only when mouse down
  handleMouseMove(e) {
    if (!this.isDragging || this.transitionActive) return;
    this.wasDragging = true;
    this.updateCameraPosition(e.clientX, e.clientY);
  }

  handleTouchStart(e) {
    if (this.transitionActive) return;
    //pinch-zoom
    if (e.touches.length === 2) {
      e.preventDefault();
      this.lastTouchDistance = this.getTouchDistance(e.touches);
      return;
    }
    // single-touch pan
    if (e.touches.length !== 1) return;
    e.preventDefault();
    this.isDragging = true;
    this.lastMouseX = e.touches[0].clientX;
    this.lastMouseY = e.touches[0].clientY;
  }

  handleTouchMove(e) {
    if (this.transitionActive) return;
    //pinch zoom
    //same logic as handle zoom
    if (e.touches.length === 2) {
      e.preventDefault();
      const dist = this.getTouchDistance(e.touches);
      const centerX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
      const centerY = (e.touches[0].clientY + e.touches[1].clientY) / 2;

      
      const zoomFactor = dist / this.lastTouchDistance;

      const worldPos = this.screenToWorld(centerX, centerY);
      this.zoomLevel *= 1 / zoomFactor;
      const newWorldPos = this.screenToWorld(centerX, centerY);

      this.cameraX += (worldPos.x - newWorldPos.x);
      this.cameraY += (worldPos.y - newWorldPos.y);
      
      this.lastTouchDistance = dist;
      return;
    }
    // single-touch pan
    if (!this.isDragging || e.touches.length !== 1) return;
    e.preventDefault();
    this.wasDragging = true;
    this.updateCameraPosition(e.touches[0].clientX, e.touches[0].clientY);
  }

  getTouchDistance(touches) {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.hypot(dx, dy);
  }

  //This function bellow, I have no idea how it works. 
  //Thanks to claude. I need to figure out whats going on

  handleZoom(e) {
    if (this.transitionActive) return;

    // https://stackoverflow.com/questions/77863197/distinguish-trackpad-and-mouse-on-wheel-event
    const isMouseWheel = Number.isInteger(e.deltaY) && e.deltaX === 0;
    const sens = isMouseWheel ? this.wheelSensitivity : this.touchSensitivity;
    const zoomFactor = Math.exp(e.deltaY * sens);

    // Adjust camera position to maintain cursor's world position
    const worldPos = this.screenToWorld(e.clientX, e.clientY);
    this.zoomLevel *= zoomFactor;
    const newWorldPos = this.screenToWorld(e.clientX, e.clientY);

    this.cameraX += (worldPos.x - newWorldPos.x);
    this.cameraY += (worldPos.y - newWorldPos.y);
  }

  screenToWorld(screenX, screenY) {

    const rect = this.canvas.getBoundingClientRect(); //For some magical reason this gives the actual canvas size. I have no idea why.
    const canvasWidth = rect.width;
    const canvasHeight = rect.height;

    // Convert screen coordinates to canvas-relative coordinates (0 to 1)
    const canvasX = (screenX - rect.left) / canvasWidth;
    const canvasY = (screenY - rect.top) / canvasHeight;

    // Convert to clip space (-1 to 1)
    const clipX = canvasX * 2 - 1;
    const clipY = -(canvasY * 2 - 1);

    // Account for the aspect ratio
    const aspectRatio = canvasWidth / canvasHeight;

    // Convert from clip space to world space
    const worldX = this.cameraX + clipX * this.zoomLevel * aspectRatio;
    const worldY = this.cameraY + clipY * this.zoomLevel;

    return { x: worldX, y: worldY };
  }

  updateCameraPosition(currX, currY) {
    const prevWorld = this.screenToWorld(this.lastMouseX, this.lastMouseY);
    const currWorld = this.screenToWorld(currX, currY);

    this.cameraX += (prevWorld.x - currWorld.x);
    this.cameraY += (prevWorld.y - currWorld.y);

    this.lastMouseX = currX;
    this.lastMouseY = currY;
  }

  smoothTransition(targetX, targetY, targetZoom, multi) {
    this.transitionActive = true;

    this.startState = { x: this.cameraX, y: this.cameraY, zoom: this.zoomLevel };
    this.endState = { x: targetX, y: targetY, zoom: targetZoom };

    this.stage1Duration = 2000; // to be changed
    this.stage2Duration = 2000; 

    if (multi === false) {
        this.stageCount = 1;
    } 
    
    else { //fix timing late, right now its just 2000ms
      const dx = this.endState.x - this.startState.x;
      const dy = this.endState.y - this.startState.y;

      const dist = Math.hypot(dx, dy);
      const midZoom = Math.max(this.startState.zoom, dist * 0.8);

      this.midState = { x: this.cameraX, y: this.cameraY, zoom: midZoom };
      this.stageCount = 2;
      this.stage = 0;

      if(this.zoomLevel === midZoom) {
        this.stage1Duration = 0; //to be removed with proper timings
      }
    }
    this.transitionStartTime = performance.now();
  }

  updateTransition(timestamp) {
    const elapsed = timestamp - this.transitionStartTime;
    
    let duration;

    if (this.stageCount === 1) {
      duration = this.stage1Duration;
    } else if (this.stage === 0) {
      duration = this.stage1Duration;
    } else {
      duration = this.stage2Duration;
    }
    
    const progress = Math.min(elapsed / duration, 1);
    const eased = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;

    if (this.stageCount === 1) {
      // only zoom out
      this.zoomLevel = this.startState.zoom + (this.endState.zoom - this.startState.zoom) * eased;

      if (progress >= 1) {
          this.cameraX = this.endState.x;
          this.cameraY = this.endState.y;
          this.transitionActive = false;
      }
    }

    else if (this.stageCount ===  2 && this.stage === 0) {
      // first zoom out
      this.zoomLevel = this.startState.zoom + (this.midState.zoom - this.startState.zoom) * eased;

      if (progress >= 1) {
          this.stage = 1;
          this.transitionStartTime = timestamp;
      }
    }

    else if (this.stageCount ===  2 && this.stage === 1) {
      // pan and zoom in
      const s1 = this.midState;
      const e1 = this.endState;
      this.cameraX = s1.x + (e1.x - s1.x) * eased;
      this.cameraY = s1.y + (e1.y - s1.y) * eased;
      this.zoomLevel = s1.zoom + (e1.zoom - s1.zoom) * eased;

      if (progress >= 1) {
          this.transitionActive = false;
      }
    }
  }

  reset() {
    this.cameraX = 0;
    this.cameraY = 0;
    this.zoomLevel = 1;
    this.smoothTransition(0, 0, 60, false);
  }

  clickArticle(e) {
    
    const worldPos = this.screenToWorld(e.clientX, e.clientY);
    console.log('cursor', worldPos);

    const { offsets, sizes, ids, titles, numItems } = this.visualization.processedData;

    for (let i = 0; i < numItems; i++) {
      const cx = offsets[i * 2];
      const cy = offsets[i * 2 + 1];
      const radius = sizes[i];

      const dx = worldPos.x - cx;
      const dy = worldPos.y - cy;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance <= radius) {
        const articleId = ids[i];
        const articleTitle = titles[i];
        console.log(cx, cy, radius);
        console.log(`Clicked on article: ${articleTitle} (ID: ${articleId})`);

        this.showEmbeddedWikiArticle(articleId);
        return;
      }
    }
  }

  showEmbeddedWikiArticle(id) {
    const container = document.getElementById('wiki-embed-container');
    const iframe = document.getElementById('wiki-iframe');
    const closeBtn = document.getElementById('close-wiki-btn');

    const wikiUrl = `https://en.wikipedia.org/?curid=${id}`;

    iframe.src = wikiUrl;
    container.classList.add('active');

    if (!this._outsideClickHandler) {
      this._outsideClickHandler = (e) => {
        if (!container.contains(e.target) &&
            container.classList.contains('active') &&
            !e.target.closest('#webgl-canvas')) {
          closeBtn.click();
        }
      };
    }

    closeBtn.onclick = () => {
      container.classList.remove('active');
      document.removeEventListener('click', this._outsideClickHandler);
      setTimeout(() => {
        iframe.src = 'about:blank';
      }, 300);
    };

    document.addEventListener('click', this._outsideClickHandler);
  }

  goToRandomArticle() {
    const randomIndex = Math.floor(Math.random() * this.visualization.processedData.numItems);

    const targetX = this.visualization.processedData.offsets[randomIndex * 2];
    const targetY = this.visualization.processedData.offsets[randomIndex * 2 + 1];
    const targetZoom = this.visualization.processedData.sizes[randomIndex] * 5;

    this.smoothTransition(targetX, targetY, targetZoom, true);
  }
}