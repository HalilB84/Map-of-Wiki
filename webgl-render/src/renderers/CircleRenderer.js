import ShaderProgram from '../core/ShaderProgram.js';

export default class CircleRenderer extends ShaderProgram {
  constructor(gl) {
    super(gl);
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
      in vec2 a_position;    
      in vec2 a_offset;     
      in float a_size;
      in vec4 a_color;       
      uniform mat4 u_projection;   
      uniform float cameraDistance;
      out vec2 v_point;    
      out vec4 v_color;     
      void main() {
        vec2 scaledPosition = a_position * (a_size  + cameraDistance) + a_offset;
        gl_Position = u_projection * vec4(scaledPosition, 0.0, 1.0);
        v_point = a_position;
        v_color = a_color;
      }
    `;

    const fragmentShaderSource = `#version 300 es
      precision highp float;
      in vec2 v_point;         
      in vec4 v_color; 
      out vec4 fragColor;
      
      void main() {
        float dist = length(v_point); 
        if (dist > 1.0) discard;     
        
        // Mix the color with white to make it more pastel
        vec3 pastelColor = mix(v_color.rgb, vec3(1.0), 0.3); 
        fragColor = vec4(pastelColor, v_color.a);
      }
    `;

    this.program = this.createProgram(vertexShaderSource, fragmentShaderSource);
    
    this.locations = {
      position: this.gl.getAttribLocation(this.program, 'a_position'),
      offset: this.gl.getAttribLocation(this.program, 'a_offset'),
      size: this.gl.getAttribLocation(this.program, 'a_size'),
      color: this.gl.getAttribLocation(this.program, 'a_color'),
      projection: this.gl.getUniformLocation(this.program, 'u_projection'),
      cameraDistance: this.gl.getUniformLocation(this.program, 'cameraDistance')
    };
  }

  setData(processedData) {
    this.numCircles = processedData.numItems;
    this.offsets = processedData.offsets;
    this.sizes = processedData.sizes;
    this.colors = processedData.colors;
    this.titles = processedData.titles;
    this.ids = processedData.ids;
    
    this.initBuffers();
  }

  initBuffers() {
    const gl = this.gl;

    this.clean();

    this.vao = gl.createVertexArray();
    gl.bindVertexArray(this.vao);
    
    const quadVertices = new Float32Array([
      -1, -1,  1, -1, -1,  1,
       1, -1,  1,  1, -1,  1,
    ]);

    this.buffers.position = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.position);
    gl.bufferData(gl.ARRAY_BUFFER, quadVertices, gl.STATIC_DRAW);
    gl.enableVertexAttribArray(this.locations.position);
    gl.vertexAttribPointer(this.locations.position, 2, gl.FLOAT, false, 0, 0);
    gl.vertexAttribDivisor(this.locations.position, 0);

    this.buffers.offset = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.offset);
    gl.bufferData(gl.ARRAY_BUFFER, this.offsets, gl.DYNAMIC_DRAW);
    gl.enableVertexAttribArray(this.locations.offset);
    gl.vertexAttribPointer(this.locations.offset, 2, gl.FLOAT, false, 0, 0);
    gl.vertexAttribDivisor(this.locations.offset, 1);

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

  draw(projectionMatrix, zoomLevel) {
    const gl = this.gl;
    
    gl.useProgram(this.program);
    gl.bindVertexArray(this.vao);

    gl.uniformMatrix4fv(this.locations.projection, false, projectionMatrix);
    gl.uniform1f(this.locations.cameraDistance, zoomLevel * 0.0006); //fix

    gl.drawArraysInstanced(gl.TRIANGLES, 0, 6, this.numCircles);
  }

  clean() {
    const gl = this.gl;

    if (this.vao) { gl.deleteVertexArray(this.vao); this.vao = null; }
    if (this.buffers.position) { gl.deleteBuffer(this.buffers.position); this.buffers.position = null; }
    if (this.buffers.offset) { gl.deleteBuffer(this.buffers.offset); this.buffers.offset = null; }
    if (this.buffers.size) { gl.deleteBuffer(this.buffers.size); this.buffers.size = null; }
    if (this.buffers.color) { gl.deleteBuffer(this.buffers.color); this.buffers.color = null; }
  }
} 