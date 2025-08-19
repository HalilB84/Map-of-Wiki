export default class WebGLContext { //fix
  constructor(canvas) {
    this.canvas = canvas;
    this.initWebGL();
  }

  initWebGL() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.gl = this.canvas.getContext('webgl2');
    
    if (!this.gl) {
      throw new Error('WebGL 2.0 is not supported in your browser.');
    }
    
    this.gl.clearColor(0, 0, 0, 1);
    this.clear();
    this.gl.enable(this.gl.BLEND);
    this.gl.enable(this.gl.DEPTH_TEST);
    this.gl.depthFunc(this.gl.LEQUAL); 
    this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
  }

  resizeCanvas() { //needs fixes see webgl2 fundamentals resizing section
    const dpr = window.devicePixelRatio || 1;
    const displayWidth = this.canvas.clientWidth;
    const displayHeight = this.canvas.clientHeight;
    
    if (this.canvas.width !== displayWidth * dpr || this.canvas.height !== displayHeight * dpr) {
      this.canvas.width = displayWidth * dpr;
      this.canvas.height = displayHeight * dpr;

      this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    }
  }

  createProjectionMatrix(cameraX, cameraY, zoomLevel) {
    const aspectRatio = (this.canvas.width / this.canvas.height); //wait is this also not the same as the canvas size? wtf
    const scale = 1 / zoomLevel;
    return new Float32Array([
      scale / aspectRatio, 0, 0, 0,
      0, scale, 0, 0,
      0, 0, 1, 0,
      -cameraX * scale / aspectRatio, -cameraY * scale, 0, 1,
    ]);
  }

  clear() {
    this.gl.clear(this.gl.COLOR_BUFFER_BIT);
  }
} 