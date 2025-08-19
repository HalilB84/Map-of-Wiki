// Adapted from https://github.com/anvaka/map-of-reddit/blob/main/src/lib/MSDFTextCollection.js
import ShaderProgram from '../core/ShaderProgram.js';

export default class TextRenderer extends ShaderProgram {
  constructor(gl) {
    super(gl);
    this.fontInfo = null;
    this.characterCount = 0;
    this.positions = null;
    this.charSizes = null;
    this.texturePositions = null;

    this.vao = null;
    this.texture = null;
    this.buffers = { point: null, position: null, charSize: null, texturePosition: null };
    
    this.initShaders();
  }
 
  initShaders() {
    const vertexShaderSource = 
     `#version 300 es
      precision highp float;
      
      uniform mat4 modelViewProjection;
      uniform vec4 color;
      uniform vec2 viewportSize;
  
      in vec3 position;
      in vec2 point;
      in vec2 charSize;
      in vec4 texturePosition;
  
      out vec2 vPoint;
      out vec4 vColor;
  
      void main() {
        
        vec3 pos = position + vec3(vec2(point) * charSize.xy, 0.0);
        gl_Position = modelViewProjection * vec4(pos, 1.0);
        vPoint = texturePosition.xy + point * texturePosition.zw;
        vColor = color;
      }`;
  
    const fragmentShaderSource = 
     `#version 300 es
      precision highp float;
      
      uniform sampler2D msdf;
      uniform float bias;
  
      in vec2 vPoint;
      in vec4 vColor;
  
      out vec4 fragColor;
  
      float median(float r, float g, float b) {
        return max(min(r, g), min(max(r, g), b));
      }
  
      void main() {

        
        if (vColor.a <= 0.0) {
          discard;
          return;
        }
        
        vec3 saple = texture(msdf, vPoint).rgb;
        float sigDist = median(saple.r, saple.g, saple.b) - bias;

        float alpha = clamp(sigDist / fwidth(sigDist) + bias, 0.0, 1.0);

        fragColor = vec4(vColor.rgb, vColor.a * alpha);
        
        if (fragColor.a < 0.01) discard;
      }`;

    this.program = this.createProgram(vertexShaderSource, fragmentShaderSource);
    
    if (!this.program) {
      console.error("Failed to create shader program for text renderer");
      return;
    }

    this.locations = {
      position: this.gl.getAttribLocation(this.program, 'position'),
      point: this.gl.getAttribLocation(this.program, 'point'),
      charSize: this.gl.getAttribLocation(this.program, 'charSize'),
      texturePosition: this.gl.getAttribLocation(this.program, 'texturePosition'),
      modelViewProjection: this.gl.getUniformLocation(this.program, 'modelViewProjection'),
      color: this.gl.getUniformLocation(this.program, 'color'),
      bias: this.gl.getUniformLocation(this.program, 'bias'),
      msdf: this.gl.getUniformLocation(this.program, 'msdf'),
    };
  }

  initBuffers() {
    const gl = this.gl;

    this.clean();

    this.vao = gl.createVertexArray();
      gl.bindVertexArray(this.vao);
      
      const quadPoints = new Float32Array([
        0, 0,
        1, 0,
        1, 1,
        1, 1,
        0, 0,
        0, 1
      ]);
      
    this.buffers.point = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.point);
    gl.bufferData(gl.ARRAY_BUFFER, quadPoints, gl.STATIC_DRAW);
    gl.enableVertexAttribArray(this.locations.point);
    gl.vertexAttribPointer(this.locations.point, 2, gl.FLOAT, false, 0, 0);
    gl.vertexAttribDivisor(this.locations.point, 0);

    this.buffers.position = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.position);
    gl.bufferData(gl.ARRAY_BUFFER, this.positions, gl.DYNAMIC_DRAW);
    gl.enableVertexAttribArray(this.locations.position);
    gl.vertexAttribPointer(this.locations.position, 3, gl.FLOAT, false, 0, 0);
    gl.vertexAttribDivisor(this.locations.position, 1);

    this.buffers.charSize = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.charSize);
    gl.bufferData(gl.ARRAY_BUFFER, this.charSizes, gl.DYNAMIC_DRAW);
    gl.enableVertexAttribArray(this.locations.charSize);
    gl.vertexAttribPointer(this.locations.charSize, 2, gl.FLOAT, false, 0, 0);
    gl.vertexAttribDivisor(this.locations.charSize, 1);

    this.buffers.texturePosition = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.texturePosition);
    gl.bufferData(gl.ARRAY_BUFFER, this.texturePositions, gl.DYNAMIC_DRAW);
    gl.enableVertexAttribArray(this.locations.texturePosition);
    gl.vertexAttribPointer(this.locations.texturePosition, 4, gl.FLOAT, false, 0, 0);
    gl.vertexAttribDivisor(this.locations.texturePosition, 1);

    gl.bindVertexArray(null);
  }
  
  async loadFont() {
    try {
      const response = await fetch('/Map-of-Wiki/fonts/Roboto.json', { mode: 'cors' });
      const fontInfo = await response.json();
      this.fontInfo = fontInfo;
      this.alphabet = new Map();
      
      fontInfo.chars.forEach(char => {
        this.alphabet.set(String.fromCharCode(char.id), char);
      });

      return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = 'Anonymous';
        
        img.onload = () => {
          const gl = this.gl;

          if (this.texture) {
            gl.deleteTexture(this.texture);
            this.texture = null;
          }
          this.texture = gl.createTexture();

          gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
          gl.bindTexture(gl.TEXTURE_2D, this.texture);
          gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
          gl.bindTexture(gl.TEXTURE_2D, null);

          this.sdfTextureWidth = img.width;
          this.sdfTextureHeight = img.height;

          resolve();
        };

        img.onerror = () => {
          reject(new Error('Failed to load font texture'));
        };

        img.src = '/Map-of-Wiki/fonts/Roboto0.png';
      });
    } catch (err) {
      console.error('Failed to load font:', err);
      throw err;
    }
  }

  allocateBuffers(charCount) { 
    this.positions = new Float32Array(charCount * 3);;
    this.charSizes = new Float32Array(charCount * 2);
    this.texturePositions = new Float32Array(charCount * 4);
  }

  batchAddText(textInfoArray) {
    let totalChars = 0;
    for (const info of textInfoArray) {
      if (info.text) {
        totalChars += info.text.length;
      }
    }
    
    this.characterCount = 0;
    this.allocateBuffers(totalChars);
    
    for (const info of textInfoArray) {
      this.addText(info);
    }
    
    this.initBuffers();
  }
 
  //copied directly from anvaka's code with little changes
  addText(textInfo) {
    let { text, x = 0, y = 0, z = 0 } = textInfo;
        
    let dx = 0;
    let fontSize = textInfo.fontSize;

    if (textInfo.limit !== undefined) {
      let w = 0;
      for (let char of text) {        
        const sdfPos = this.alphabet.get(char) || this.alphabet.get('?');
        w += sdfPos.xadvance;
      }
      fontSize = (textInfo.limit * this.fontInfo.info.size) / w;
    }

    const scale = fontSize / this.fontInfo.info.size;

    if (textInfo.cx !== undefined) {
      let w = 0;
      for (const char of text) {
        const sdfPos = this.alphabet.get(char) || this.alphabet.get('_');
        w += sdfPos.xadvance;
      }
      dx -= w * textInfo.cx * scale;
    }

    if (textInfo.cy !== undefined) {
      y += fontSize * textInfo.cy;
    }

    for (let i = 0; i < text.length; i++) {
      const charIndex = this.characterCount + i;
      const char = text[i];
      const sdfPos = this.alphabet.get(char) || this.alphabet.get('_');

      const posOffset = charIndex * 3;
      this.positions[posOffset] = x + dx;
      this.positions[posOffset + 1] = y - sdfPos.yoffset * scale;
      this.positions[posOffset + 2] = z;

      const sizeOffset = charIndex * 2;
      this.charSizes[sizeOffset] = (fontSize * sdfPos.width) / 42;
      this.charSizes[sizeOffset + 1] = (-fontSize * sdfPos.height) / 42;

      const texOffset = charIndex * 4;
      this.texturePositions[texOffset] = sdfPos.x / this.sdfTextureWidth;
      this.texturePositions[texOffset + 1] = 1 - sdfPos.y / this.sdfTextureHeight;
      this.texturePositions[texOffset + 2] = sdfPos.width / this.sdfTextureWidth;
      this.texturePositions[texOffset + 3] = -sdfPos.height / this.sdfTextureHeight;

      dx += sdfPos.xadvance * scale;
    }
    
    this.characterCount += text.length;
  }

  draw(modelViewProjection) {
    const gl = this.gl;
    
    gl.useProgram(this.program);
    gl.bindVertexArray(this.vao);

    gl.uniformMatrix4fv(this.locations.modelViewProjection, false, modelViewProjection);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, this.texture);
    gl.uniform1i(this.locations.msdf, 0);

    gl.uniform4f(this.locations.color, 1.0, 1.0, 1.0, 1.0);
    gl.uniform1f(this.locations.bias, 0.5);
    gl.drawArraysInstanced(gl.TRIANGLES, 0, 6, this.characterCount);

    gl.bindVertexArray(null);
  }  

  // Release GPU and CPU-side resources
  clean() {
    const gl = this.gl;

    if (this.vao) { gl.deleteVertexArray(this.vao); this.vao = null; }
    if (this.buffers.point) { gl.deleteBuffer(this.buffers.point); this.buffers.point = null; }
    if (this.buffers.position) { gl.deleteBuffer(this.buffers.position); this.buffers.position = null; }
    if (this.buffers.charSize) { gl.deleteBuffer(this.buffers.charSize); this.buffers.charSize = null; }
    if (this.buffers.texturePosition) { gl.deleteBuffer(this.buffers.texturePosition); this.buffers.texturePosition = null; }
  }
}