export default class CircleRenderer {
    constructor(gl) {
      this.gl = gl;
      this.numCircles = 1000000;
      this.initShaders();
    }

    setData(data) {
        this.numCircles = data.length;
        this.processData(data);
        this.initBuffers();
      }

      processData(data) {
        this.offsets = new Float32Array(this.numCircles * 2);
        this.sizes = new Float32Array(this.numCircles);
        this.colors = new Float32Array(this.numCircles * 4);
        this.titles = [];
        this.ids = [];
    
        data.forEach((item, i) => {
          this.ids[i] = parseInt(item.id);
          this.titles[i] = item.title;
          //console.log(item.title);
          this.offsets[i * 2] = parseFloat(item.x);
          this.offsets[i * 2 + 1] = parseFloat(item.y);
          
          this.sizes[i] = parseFloat(item.size);
          
          this.colors[i * 4] = parseFloat(item.r);     // R
          this.colors[i * 4 + 1] = parseFloat(item.g); // G
          this.colors[i * 4 + 2] = parseFloat(item.b); // B
          this.colors[i * 4 + 3] = 1.0;                                  
        });
      }
  
    initShaders() {
      const vertexShaderSource = `
        attribute vec2 a_position;    
        attribute vec2 a_offset;     
        attribute float a_size;
        attribute vec4 a_color;       
  
        uniform mat4 u_projection;   
  
        varying vec2 v_point;    
        varying vec4 v_color;     
  
        void main() {
          vec2 scaledPosition = a_position * a_size + a_offset;
          gl_Position = u_projection * vec4(scaledPosition, 0.0, 1.0);
          v_point = a_position;
          v_color = a_color;
        }
      `;
  
      const fragmentShaderSource = `
        precision mediump float;
  
        varying vec2 v_point;         
        varying vec4 v_color; 
  
        void main() {
          float dist = length(v_point); 
          if (dist > 1.0) discard;     
          gl_FragColor = v_color;
        }
      `;
  
      this.program = this.createProgram(
        this.createShader(this.gl.VERTEX_SHADER, vertexShaderSource),
        this.createShader(this.gl.FRAGMENT_SHADER, fragmentShaderSource)
      );
  
      // Get locations
      this.locations = {
        position: this.gl.getAttribLocation(this.program, 'a_position'),
        offset: this.gl.getAttribLocation(this.program, 'a_offset'),
        size: this.gl.getAttribLocation(this.program, 'a_size'),
        color: this.gl.getAttribLocation(this.program, 'a_color'),
        projection: this.gl.getUniformLocation(this.program, 'u_projection')
      };
    }
  
    initBuffers() {
      const quadVertices = new Float32Array([
        -1, -1,  1, -1, -1,  1,
         1, -1,  1,  1, -1,  1,
      ]);
  
      this.quadBuffer = this.createBuffer(quadVertices);
      this.offsetBuffer = this.createBuffer(this.offsets);
      this.sizeBuffer = this.createBuffer(this.sizes);
      this.colorBuffer = this.createBuffer(this.colors);
    }
  
    createShader(type, source) {
      const shader = this.gl.createShader(type);
      this.gl.shaderSource(shader, source);
      this.gl.compileShader(shader);
      if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
        console.error(this.gl.getShaderInfoLog(shader));
        this.gl.deleteShader(shader);
        return null;
      }
      return shader;
    }
  
    createProgram(vertexShader, fragmentShader) {
      const program = this.gl.createProgram();
      this.gl.attachShader(program, vertexShader);
      this.gl.attachShader(program, fragmentShader);
      this.gl.linkProgram(program);
      if (!this.gl.getProgramParameter(program, this.gl.LINK_STATUS)) {
        console.error(this.gl.getProgramInfoLog(program));
        this.gl.deleteProgram(program);
        return null;
      }
      return program;
    }
  
    createBuffer(data) {
      const buffer = this.gl.createBuffer();
      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
      this.gl.bufferData(this.gl.ARRAY_BUFFER, data, this.gl.STATIC_DRAW);
      return buffer;
    }
  
    draw(projectionMatrix) {
      this.gl.useProgram(this.program);
  
      // Set up attributes
      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.quadBuffer);
      this.gl.vertexAttribPointer(this.locations.position, 2, this.gl.FLOAT, false, 0, 0);
      this.gl.enableVertexAttribArray(this.locations.position);
  
      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.offsetBuffer);
      this.gl.vertexAttribPointer(this.locations.offset, 2, this.gl.FLOAT, false, 0, 0);
      this.gl.enableVertexAttribArray(this.locations.offset);
      this.gl.vertexAttribDivisor(this.locations.offset, 1);
  
      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.sizeBuffer);
      this.gl.vertexAttribPointer(this.locations.size, 1, this.gl.FLOAT, false, 0, 0);
      this.gl.enableVertexAttribArray(this.locations.size);
      this.gl.vertexAttribDivisor(this.locations.size, 1);
  
      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colorBuffer);
      this.gl.vertexAttribPointer(this.locations.color, 4, this.gl.FLOAT, false, 0, 0);
      this.gl.enableVertexAttribArray(this.locations.color);
      this.gl.vertexAttribDivisor(this.locations.color, 1);
  
      this.gl.uniformMatrix4fv(this.locations.projection, false, projectionMatrix);
  
      // Draw
      this.gl.drawArraysInstanced(this.gl.TRIANGLES, 0, 6, this.numCircles);
    }
  }