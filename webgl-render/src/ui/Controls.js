export default class Controls {
  constructor(canvas) {
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
    this.stage1Duration = 0;
    this.stage2Duration = 0;
    this.transitionStartTime = 0;
    this.transitionDuration = 1000;
    this.zoomSensitivity = 0.0040;
    this.lastTouchDistance = null;
    this.wikiEmbedInitialized = false;

    this.canvas = canvas;

    this.canvas.addEventListener('mousedown', e => this.handleMouseDown(e));
    this.canvas.addEventListener('touchstart', e => this.handleTouchStart(e), { passive: false });

    this.canvas.addEventListener('mouseup', () => this.isDragging = false);
    this.canvas.addEventListener('touchend', () => this.isDragging = false);

    this.canvas.addEventListener('mousemove', e => this.handleMouseMove(e));
    this.canvas.addEventListener('touchmove', e => this.handleTouchMove(e), { passive: false });

    this.canvas.addEventListener('wheel', e => this.handleZoom(e));
    this.canvas.addEventListener('click', e => { //This is probably not the best way to do this
      if (!this.wasDragging) {
        this.clickArticle(e);
      }
      this.wasDragging = false;
    });

    document.getElementById('random-button').addEventListener('click', () => this.goToRandomArticle());
    document.getElementById('load-button').addEventListener('click', () => this.canvas.visualization.initialize());
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

    const worldPos = this.screenToWorld(e.clientX, e.clientY);

    const zoomFactor = Math.exp(e.deltaY * this.zoomSensitivity);
    this.zoomLevel *= zoomFactor;
    //??? no idea why this works
    // Adjust camera position to maintain cursor's world position
    const newWorldPos = this.screenToWorld(e.clientX, e.clientY);
    //console.log(worldPos, newWorldPos);
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

  //The durations need work, right now its all over the place
  smoothTransition(targetX, targetY, targetZoom, multi) {
    this.transitionActive = true;

    this.startState = { x: this.cameraX, y: this.cameraY, zoom: this.zoomLevel };
    this.endState = { x: targetX, y: targetY, zoom: targetZoom };

    if (multi === 0) {
        this.stageCount = 1;
        this.stage1Duration = 2000;
    } 
    
    else {
        const dx = this.endState.x - this.startState.x;
        const dy = this.endState.y - this.startState.y;

        //this also a lil random

        const dist = Math.hypot(dx, dy);
        
        const midZoom = Math.max(this.startState.zoom, dist * 0.8);
        this.midState = { x: this.cameraX, y: this.cameraY, zoom: midZoom };
        this.stageCount = 2;
        this.stage = 0;

        //I need some sort of normalization here

        this.stage1Duration = Math.min(Math.max(Math.abs(50 * (midZoom - this.startState.zoom)), 700), 2000);

        if(midZoom == this.startState.zoom){
            this.stage1Duration = 0;
        }

        //these values make no sense
        
        this.stage2Duration = Math.min(Math.max(Math.abs(50 * (dx + dy)), 1500), 2000);
    }
    this.transitionStartTime = performance.now();
  }

  updateTransition(timestamp) {
    const elapsed = timestamp - this.transitionStartTime;
    let progress, eased;
    if (this.stageCount === 1) {
        // only zoom out
        progress = Math.min(elapsed / this.stage1Duration, 1);

        eased = progress < 0.5 ? 2 * progress * progress : 
                1 - Math.pow(-2 * progress + 2, 2) / 2;

        this.zoomLevel = this.startState.zoom + (this.endState.zoom - this.startState.zoom) * eased;

        if (progress >= 1) {
            this.cameraX = this.endState.x;
            this.cameraY = this.endState.y;
            this.transitionActive = false;
        }

        return;
    }
    if (this.stage === 0) {
        // first zoom out
        progress = Math.min(elapsed / this.stage1Duration, 1);
        eased = progress < 0.5 ? 2 * progress * progress :
                1 - Math.pow(-2 * progress + 2, 2) / 2;

        this.zoomLevel = this.startState.zoom + (this.midState.zoom - this.startState.zoom) * eased;

        if (progress >= 1) {
            this.stage = 1;
            this.transitionStartTime = timestamp;
        }
        return;
    }
    // pan and zoom in
    progress = Math.min(elapsed / this.stage2Duration, 1);
    eased = progress < 0.5 ? 2 * progress * progress :
            1 - Math.pow(-2 * progress + 2, 2) / 2;

    const s1 = this.midState;
    const e1 = this.endState;
    this.cameraX = s1.x + (e1.x - s1.x) * eased;
    this.cameraY = s1.y + (e1.y - s1.y) * eased;
    this.zoomLevel = s1.zoom + (e1.zoom - s1.zoom) * eased;

    if (progress >= 1) {
        this.transitionActive = false;
    }

  }

  reset() {
    this.cameraX = 0;
    this.cameraY = 0;
    this.zoomLevel = 1;
    this.smoothTransition(0, 0, 60, 0);
  }

  //THESE BELOW NEED TO BE MOVED TO SOMEWHERE ELSE
  clickArticle(e) {
    const worldPos = this.screenToWorld(e.clientX, e.clientY);
    console.log('cursor', worldPos);


    const circleRenderer = this.canvas.visualization.circleRenderer;
    const { offsets, sizes, ids, titles } = circleRenderer;

    for (let i = 0; i < circleRenderer.numCircles; i++) {
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

    closeBtn.onclick = () => {
      container.classList.remove('active');
      setTimeout(() => {
        iframe.src = 'about:blank';
      }, 300);
    };

    if (!this.wikiEmbedInitialized) {
      this.wikiEmbedInitialized = true;

      document.addEventListener('click', (e) => {
        if (!container.contains(e.target) &&
          container.classList.contains('active') &&
          !e.target.closest('#webgl-canvas')) {
          closeBtn.click();
        }
      });
    }
  }

  goToRandomArticle() {
    const circleRenderer = this.canvas.visualization.circleRenderer;

    const randomIndex = Math.floor(Math.random() * circleRenderer.numCircles);

    const targetX = circleRenderer.offsets[randomIndex * 2];
    const targetY = circleRenderer.offsets[randomIndex * 2 + 1];
    const targetZoom = circleRenderer.sizes[randomIndex] * 5;

    this.smoothTransition(targetX, targetY, targetZoom);
  }
}