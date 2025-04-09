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
    this.transitionStart = null;
    this.transitionEnd = null;
    this.transitions = [];
    this.transitionStartTime = 0;
    this.transitionDuration = 1000;
    this.zoomSensitivity = 0.0020;
    this.i=0;
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
  }

 
  handleMouseDown(e) {
    if (this.transitionActive) return;
    this.isDragging = true;
    this.lastMouseX = e.clientX;
    this.lastMouseY = e.clientY;
  }

  //Might need work
  handleTouchStart(e) {
    if (this.transitionActive || e.touches.length !== 1) return;
    e.preventDefault();
    this.isDragging = true;
    this.lastMouseX = e.touches[0].clientX;
    this.lastMouseY = e.touches[0].clientY;
  }

  handleMouseMove(e) {
    if (!this.isDragging || this.transitionActive) return;
    this.wasDragging = true;
    this.updateCameraPosition(e.clientX, e.clientY);
  }

  //Might need work
  handleTouchMove(e) {
    if (!this.isDragging || this.transitionActive || e.touches.length !== 1) return;
    e.preventDefault();
    this.updateCameraPosition(e.touches[0].clientX, e.touches[0].clientY);
  }

  handleZoom(e) {
    if (this.transitionActive) return;
    e.preventDefault();
    
    const worldPos = this.screenToWorld(e.clientX, e.clientY);
    
    const zoomFactor = Math.exp(e.deltaY * this.zoomSensitivity);
    //const oldZoom = this.zoomLevel;
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
    
    //console.log(canvasWidth, canvasHeight);
    //console.log(canvas.width, canvas.height);
    // Convert screen coordinates to canvas-relative coordinates (0 to 1)
    const canvasX = (screenX - rect.left) / canvasWidth;
    const canvasY = (screenY - rect.top) / canvasHeight;
    
    // Convert to clip space (-1 to 1)
    const clipX = canvasX * 2 - 1;
    const clipY = -(canvasY * 2 - 1); 
    
    // Calculate the aspectRatio used in the projection matrix
    const aspectRatio = canvasWidth / canvasHeight;
    
    // Convert from clip space to world space
    // This must match the logic in WebGLContext.createProjectionMatrix
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


  //BOTH WIP
  smoothTransition(targetX, targetY, targetZoom) {
    this.transitionActive = true;
    
    this.transitions[0] = {
      x: this.cameraX,
      y: this.cameraY,
      zoom: this.zoomLevel
    }


    this.transitions[1] = {
      x: targetX,
      y: targetY,
      zoom: targetZoom
    }

    this.transitionDuration = Math.abs(50 * (targetX-this.cameraX + targetY-this.cameraY + targetZoom-this.zoomLevel));
    this.transitionDuration = Math.min(2000, this.transitionDuration)
    this.transitionStartTime = performance.now();
  }

  //Broken right now
  updateTransition(timestamp) {
    
    let elapsed = timestamp - this.transitionStartTime;
    let progress = Math.min(elapsed / this.transitionDuration, 1);
    
    const easedProgress = progress < 0.5 //switch out this for something else
      ? 2 * progress * progress 
      : 1 - Math.pow(-2 * progress + 2, 2) / 2;
    
    this.cameraX = this.transitions[this.i].x + (this.transitions[this.i+1].x - this.transitions[this.i].x) * easedProgress;
    this.cameraY = this.transitions[this.i].y + (this.transitions[this.i+1].y - this.transitions[this.i].y) * easedProgress;

    this.zoomLevel = this.transitions[this.i].zoom + (this.transitions[this.i+1].zoom - this.transitions[this.i].zoom) * easedProgress;
    

    if (progress >= 1 && this.i == this.transitions.length - 2) {
      this.transitionActive = false;
      this.i=0;
      return false;
    }
    else if(progress >= 1 && this.i < this.transitions.length - 2) {
      this.i++;
      this.transitionStartTime = performance.now();
    }
    
    return true;
  }

  reset() {
    this.cameraX = 0;
    this.cameraY = 0;
    this.zoomLevel = 1;
    this.smoothTransition(0, 0, 60);
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
    const targetZoom = circleRenderer.sizes[randomIndex] * 10;
    
    this.smoothTransition(targetX, targetY, targetZoom);
  }
} 