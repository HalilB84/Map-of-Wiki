import WebGLContext from './core/WebGLContext.js';
import CircleRenderer from './renderers/CircleRenderer.js';
import TextRenderer from './renderers/TextRenderer.js';
import DataLoader from './utils/DataLoader.js';
import SearchManager from './ui/SearchManager.js';
import Controls from './ui/Controls.js';

document.addEventListener('DOMContentLoaded', () => {
  try {
    new Visualization();
  } catch (error) {
    console.error('Failed to initialize application:', error);
    alert('Failed to initialize the application. See console for details.');
  }
});


class Visualization {
  constructor() {
    
    this.canvas = document.getElementById('webgl-canvas');
    this.canvas.visualization = this; 
    //as much as I hate this, it is the easiest way to get the canvas in the controls
    //I think, uhhhhhhhhh this code is a mess
    
    this.webgl = new WebGLContext(this.canvas);
    this.controls = new Controls(this.canvas);
    this.DataLoader = new DataLoader();
    this.circleRenderer = new CircleRenderer(this.webgl.gl);
    this.textRenderer = new TextRenderer(this.webgl.gl);
    this.searchManager = new SearchManager(this.circleRenderer, this.controls);    
    
    this.animationFrameId = null;
    
    this.lastTextUpdateTime = 0;
    this.textUpdateInterval = 1000;
    
    this.fpsCounter = document.getElementById('fps-counter');
    this.pctEl = document.getElementById('loading-percent');
    this.lastFrameTime = 0;
    this.frameCount = 0;
    this.lastFpsUpdate = 0;
    this.fps = 0;

    this.setupIntroOverlay();

  }
  
  //Assuming this is gonna be a simple website I can go the vanilla way. Or use vue like anvaka
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

  showLoadingIndicator(show) {
    const loadingElement = document.getElementById('loading');
    loadingElement.style.display = show ? 'flex' : 'none';
    this.pctEl.textContent = show ? '0%' : '';
  }
  
  updateFpsCounter(timestamp) {
    this.frameCount++;
    
    // Update FPS display every 500ms
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
  
  async initialize() {
    // get selected CSV and handle missing selection
    const selector = document.getElementById("csv-select");
    const selectedValue = selector.value;
    
    this.showLoadingIndicator(true);

    const rawData = await this.DataLoader.loadCSV(selectedValue, percent => {
      this.pctEl.textContent = `${Math.floor(percent)}%`;
    });
    console.log(`Loaded ${rawData.length} data points from CSV`);

    // process data
    const processedData = this.DataLoader.processData(rawData);
    console.log(`Processed data: ${processedData.numItems} items`);

    // initialize renderers
    this.circleRenderer.setData(processedData);
    this.textRenderer.characterCount = 0;
    await this.textRenderer.loadFont();

    this.allTextData = processedData.titles.map((title, i) => ({
      text: title,
      x: processedData.offsets[i * 2],
      y: processedData.offsets[i * 2 + 1],
      limit: 2 * processedData.sizes[i],
      cx: 0.51, // Still not sure how these work
      cy: 0.5,
      radius: processedData.sizes[i]
    }));
    this.updateVisibleText();

    this.controls.reset();
    if (!this.animationFrameId) {
      this.startRenderLoop();
    }
    this.showLoadingIndicator(false);
  }
  
  startRenderLoop() {
    this.lastFrameTime = performance.now();
    this.lastFpsUpdate = this.lastFrameTime;
    this.frameCount = 0;
    
    this.animationFrameId = requestAnimationFrame(timestamp => this.draw(timestamp));
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
  
  
  updateVisibleText() {    
    
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
    
    const visibleTextData = this.allTextData.filter(text => {
      return (
        text.x >= viewBounds.minX &&
        text.x <= viewBounds.maxX &&
        text.y >= viewBounds.minY &&
        text.y <= viewBounds.maxY
      );
    });
    
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
}


