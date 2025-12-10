export default class ShaderProgram {
	constructor(gl) {
		this.gl = gl;
		this.program = null;
		this.locations = {};
	}

	createShader(type, source) {
		const shader = this.gl.createShader(type);
		this.gl.shaderSource(shader, source);
		this.gl.compileShader(shader);

		return shader;
	}

	createProgram(vertexSource, fragmentSource) {
		const vertexShader = this.createShader(this.gl.VERTEX_SHADER, vertexSource);
		const fragmentShader = this.createShader(this.gl.FRAGMENT_SHADER, fragmentSource);

		const program = this.gl.createProgram();
		this.gl.attachShader(program, vertexShader);
		this.gl.attachShader(program, fragmentShader);
		this.gl.linkProgram(program);

		this.gl.deleteShader(vertexShader);
		this.gl.deleteShader(fragmentShader);

		return program;
	}
}
