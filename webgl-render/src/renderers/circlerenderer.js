// Adapted from https://github.com/anvaka/map-of-reddit/blob/main/src/lib/PointCollection.js

import ShaderProgram from "../core/shaderprogram.js";

export default class CircleRenderer extends ShaderProgram {
	constructor(bus) {
		super(bus.webgl.gl);
		this.numCircles = 0;
		this.offsets = null;
		this.sizes = null;
		this.colors = null;
		this.titles = null;
		this.ids = null;

		this.vao = null;
		this.buffers = { position: null, offset: null, size: null, color: null };

		this.initShaders();
	}

	initShaders() {
		const vertexShaderSource = `#version 300 es
			in vec2 point;      
			in vec2 position;   
			in float size;
			in vec4 color;      
			uniform mat4 modelViewProjection; 
			uniform float cameraDistance;
			out vec2 vPoint;    
			out vec4 vColor;    

			void main() {
				vec2 scaledPosition = point * (size + cameraDistance) + position;
				gl_Position = modelViewProjection * vec4(scaledPosition, 0.0, 1.0);
				vPoint = point; // we give the position so it can be interpolated and we can use it to discard fragments outside the circle
				vColor = color; 
			}`;

		const fragmentShaderSource = `#version 300 es
			precision highp float;
			in vec2 vPoint;     
			in vec4 vColor; 
			out vec4 fragColor;
			
			void main() {
				float dist = length(vPoint); 
				if (dist > 1.0) discard;     
				
				// Mix the color with white to make it more pastel
				vec3 pastelColor = mix(vColor.rgb, vec3(1.0), 0.3); 
				fragColor = vec4(pastelColor, vColor.a);
			}`;

		this.program = this.createProgram(vertexShaderSource, fragmentShaderSource);

		this.locations = {
			point: this.gl.getAttribLocation(this.program, "point"),
			position: this.gl.getAttribLocation(this.program, "position"),
			size: this.gl.getAttribLocation(this.program, "size"),
			color: this.gl.getAttribLocation(this.program, "color"),
			modelViewProjection: this.gl.getUniformLocation(this.program, "modelViewProjection"),
			cameraDistance: this.gl.getUniformLocation(this.program, "cameraDistance"),
		};
	}

	initBuffers() {
		const gl = this.gl;

		this.clean();

		this.vao = gl.createVertexArray();
		gl.bindVertexArray(this.vao);

		const quadVertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, -1, 1, 1, -1, 1]);

		this.buffers.position = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.position);
		gl.bufferData(gl.ARRAY_BUFFER, quadVertices, gl.STATIC_DRAW);
		gl.enableVertexAttribArray(this.locations.point);
		gl.vertexAttribPointer(this.locations.point, 2, gl.FLOAT, false, 0, 0);
		gl.vertexAttribDivisor(this.locations.point, 0);

		this.buffers.offset = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.offset);
		gl.bufferData(gl.ARRAY_BUFFER, this.offsets, gl.DYNAMIC_DRAW);
		gl.enableVertexAttribArray(this.locations.position);
		gl.vertexAttribPointer(this.locations.position, 2, gl.FLOAT, false, 0, 0);
		gl.vertexAttribDivisor(this.locations.position, 1);

		this.buffers.size = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.size);
		gl.bufferData(gl.ARRAY_BUFFER, this.sizes, gl.DYNAMIC_DRAW);
		gl.enableVertexAttribArray(this.locations.size);
		gl.vertexAttribPointer(this.locations.size, 1, gl.FLOAT, false, 0, 0);
		gl.vertexAttribDivisor(this.locations.size, 1);

		this.buffers.color = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.color);
		gl.bufferData(gl.ARRAY_BUFFER, this.colors, gl.DYNAMIC_DRAW);
		gl.enableVertexAttribArray(this.locations.color);
		gl.vertexAttribPointer(this.locations.color, 4, gl.FLOAT, false, 0, 0);
		gl.vertexAttribDivisor(this.locations.color, 1);

		gl.bindVertexArray(null);
	}

	batchAddCircles(processedData) {
		this.numCircles = processedData.numItems;
		this.offsets = processedData.offsets;
		this.sizes = processedData.sizes;
		this.colors = processedData.colors;
		this.titles = processedData.titles;
		this.ids = processedData.ids;

		this.initBuffers();
	}

	draw(modelViewProjection, zoomLevel) {
		const gl = this.gl;

		gl.useProgram(this.program);
		gl.bindVertexArray(this.vao);

		gl.uniformMatrix4fv(this.locations.modelViewProjection, false, modelViewProjection);
		gl.uniform1f(this.locations.cameraDistance, zoomLevel * 0.0006); //fix

		gl.drawArraysInstanced(gl.TRIANGLES, 0, 6, this.numCircles);
	}

	clean() {
		const gl = this.gl;

		if (this.vao) {
			gl.deleteVertexArray(this.vao);
			this.vao = null;
		}
		if (this.buffers.position) {
			gl.deleteBuffer(this.buffers.position);
			this.buffers.position = null;
		}
		if (this.buffers.offset) {
			gl.deleteBuffer(this.buffers.offset);
			this.buffers.offset = null;
		}
		if (this.buffers.size) {
			gl.deleteBuffer(this.buffers.size);
			this.buffers.size = null;
		}
		if (this.buffers.color) {
			gl.deleteBuffer(this.buffers.color);
			this.buffers.color = null;
		}
	}
}
