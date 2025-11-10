export default class WebGLContext {
	constructor() {
		this.canvas = document.getElementById("webgl-canvas");
		this.gl = this.canvas.getContext("webgl2");
		this.initWebGL();
	}

	initWebGL() {
		if (!this.gl) {
			console.error("Could not find WebGL, try turning on hardware acceleration, use another browser, or use another device");
			return;
		}

		this.gl.clearColor(0, 0, 0, 1);
		this.gl.enable(this.gl.BLEND);
		this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
		
		this.resizeCanvas();
	}

	resizeCanvas() {
		const dpr = window.devicePixelRatio || 1;
		const { width, height } = this.canvas.getBoundingClientRect();
		const displayWidth = Math.round(width * dpr);
		const displayHeight = Math.round(height * dpr);
	  
		if (this.canvas.width !== displayWidth || this.canvas.height !== displayHeight) {
		  	this.canvas.width = displayWidth;
		  	this.canvas.height = displayHeight;

			this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
		}
	}

	createProjectionMatrix(cameraX, cameraY, zoomLevel) {
		const aspectRatio = this.canvas.width / this.canvas.height; 
		const correctedZoom = aspectRatio > 1 ? zoomLevel / aspectRatio : zoomLevel;	
		const scale = 1 / correctedZoom;
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
