export default class WebGL {
	constructor() {
		this.canvas = document.getElementById("webgl");
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
	
	//https://www.scratchapixel.com/lessons/3d-basic-rendering/perspective-and-orthographic-projection-matrix/orthographic-projection-matrix.html
	createProjectionMatrix(cameraX, cameraY, zoomLevel) {
		const aspectRatio = this.canvas.width / this.canvas.height;

		const viewHeight = zoomLevel;
		const viewWidth = zoomLevel * aspectRatio;

		const left = cameraX - viewWidth / 2;
		const right = cameraX + viewWidth / 2;
		const bottom = cameraY - viewHeight / 2;
		const top = cameraY + viewHeight / 2;

		return new Float32Array([
			2 / (right - left), 0, 0, 0,
			0, 2 / (top - bottom), 0, 0,
			0, 0, -1, 0,
			-(right + left) / (right - left), -(top + bottom) / (top - bottom), 0, 1
		]);	
	}

	clear() {
		this.gl.clear(this.gl.COLOR_BUFFER_BIT);
	}
}
