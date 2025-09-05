import WebGLContext from './core/WebGLContext.js';
import CircleRenderer from './renderers/CircleRenderer.js';
import TextRenderer from './renderers/TextRenderer.js';
import DataLoader from './utils/DataLoader.js';
import SearchManager from './ui/SearchManager.js';
import Controls from './ui/Controls.js';


class Visualization {
  constructor() {
    this.canvas = document.getElementById('webgl-canvas');
    
    this.webgl = new WebGLContext(this.canvas);
    this.textRenderer = new TextRenderer(this.webgl.gl);
    this.circleRenderer = new CircleRenderer(this.webgl.gl);
    this.controls = new Controls(this.canvas, this);
    this.DataLoader = new DataLoader();
    this.searchManager = new SearchManager(this, this.controls);

    this.processedData = null;
    
    this.animationFrameId = null;
    this.initializing = false;
    
    this.lastTextUpdateTime = 0;
    this.textUpdateInterval = 1000;
    
    this.fpsCounter = document.getElementById('fps-counter');
    this.pctEl = document.getElementById('loading-percent');
    this.lastFrameTime = 0;
    this.frameCount = 0;
    this.lastFpsUpdate = 0;
    this.fps = 0;

    document.getElementById('load-button').addEventListener('click', () => this.initialize()); 

    this.setupIntroOverlay();
  }
  
  setupIntroOverlay() {
    const introOverlay = document.getElementById('intro-overlay');
    const startExplorationButton = document.getElementById('start-exploration');
    const csvSelect = document.getElementById('csv-select');
    
    startExplorationButton.addEventListener('click', () => {
      const selectedDataset = document.querySelector('input[name="dataset"]:checked').value;
      
      csvSelect.value = selectedDataset;
      
      introOverlay.style.display = 'none';
      
      this.initialize();
    }); 
  }

  //Needs cleaning
  async initialize() { 
    if (this.initializing) return;
    this.initializing = true;

    const selector = document.getElementById("csv-select");
    const selectedValue = selector.value;
    
    this.showLoadingIndicator(true);

    const rawData = await this.DataLoader.loadCSV(selectedValue, percent => {
      this.pctEl.textContent = `${Math.floor(percent)}%`;
    });
    console.log(`Loaded ${rawData.length} data points from CSV`);

    this.processedData = this.DataLoader.processData(rawData);
    console.log(`Processed data: ${this.processedData.numItems} items`);

    this.circleRenderer.batchAddCircles(this.processedData);

    await this.textRenderer.loadFont();

    this.updateVisibleText();

    this.controls.reset();
    if (!this.animationFrameId) {
      this.startRenderLoop();
    }
    this.showLoadingIndicator(false);
    this.initializing = false;
  }
  
  startRenderLoop() {
    this.lastFrameTime = performance.now();
    this.lastFpsUpdate = this.lastFrameTime;
    this.frameCount = 0;
    
    this.animationFrameId = requestAnimationFrame(timestamp => this.draw(timestamp));
  }

  showLoadingIndicator(show) {
    const loadingElement = document.getElementById('loading');
    loadingElement.style.display = show ? 'flex' : 'none';
  }
  
  updateFpsCounter(timestamp) {
    this.frameCount++;
    
    if (timestamp - this.lastFpsUpdate >= 500) {
      // FPS: frames / elapsed time in seconds
      this.fps = Math.round((this.frameCount * 1000) / (timestamp - this.lastFpsUpdate));
      if (this.fpsCounter) {
        this.fpsCounter.textContent = `${this.fps} FPS`;
      }
      
      this.lastFpsUpdate = timestamp;
      this.frameCount = 0;
    }
  }

  updateVisibleText() { //Also possible for this to be in workers? would decrease lag I think
    const topLeft = this.controls.screenToWorld(0, 0);
    const bottomRight = this.controls.screenToWorld(this.canvas.width, this.canvas.height);
    
    const viewBounds = {
      minX: Math.min(topLeft.x, bottomRight.x),
      maxX: Math.max(topLeft.x, bottomRight.x),
      minY: Math.min(topLeft.y, bottomRight.y),
      maxY: Math.max(topLeft.y, bottomRight.y)
    };

    let threshold = 3000;

    if((viewBounds.maxX - viewBounds.minX) * (viewBounds.maxY - viewBounds.minY) > threshold){
      return;
    }
    
    const visibleTextData = [];
    const { offsets, sizes, titles, numItems } = this.processedData;

    for (let i = 0; i < numItems; i++) {
      const x = offsets[i * 2];
      const y = offsets[i * 2 + 1];
      
      if (x >= viewBounds.minX && x <= viewBounds.maxX &&
          y >= viewBounds.minY && y <= viewBounds.maxY) {
          visibleTextData.push({
            text: titles[i],
            x: x,
            y: y,
            limit: 2 * sizes[i],
            cx: 0.51, 
            cy: 0.5,
            radius: sizes[i]
          });
      }
    }
    
    const maxLabels = 1000;
    let labelsToShow = visibleTextData;
    
    if (visibleTextData.length > maxLabels) {
      // Sort by size (larger circles get priority) and take the top maxLabels
      labelsToShow = visibleTextData
        .sort((a, b) => b.radius - a.radius)
        .slice(0, maxLabels);
    }

    console.log(`Showing ${labelsToShow.length} labels out of ${visibleTextData.length} visible circles`);
    
    this.textRenderer.batchAddText(labelsToShow);
  }

  draw(timestamp) {
    this.webgl.clear();
    this.webgl.resizeCanvas();

    this.updateFpsCounter(timestamp);
    
    if (this.controls.transitionActive) {
      this.controls.updateTransition(timestamp);
    }
    
    if (timestamp - this.lastTextUpdateTime > this.textUpdateInterval) {
      this.updateVisibleText();
      this.lastTextUpdateTime = timestamp;
    }
    
    const projectionMatrix = this.webgl.createProjectionMatrix(
      this.controls.cameraX,
      this.controls.cameraY,
      this.controls.zoomLevel
    );
    
    this.circleRenderer.draw(projectionMatrix, this.controls.zoomLevel);
    this.textRenderer.draw(projectionMatrix);
    
    this.animationFrameId = requestAnimationFrame(timestamp => this.draw(timestamp));
  }
}

try {
  new Visualization();
} catch (error) {
  console.error('Failed to initialize application:', error);
  alert('Failed to initialize the application. See console for details.');
}
