// YESSSSSSSSSSSSSSSSSSSSS IT WORKSSSSSSSSSSSSSSSSSSSSSSSSSSSS
// Instanced MSDF rendering 
// adapted from https://github.com/anvaka/map-of-reddit/blob/main/src/lib/MSDFTextCollection.js
// Evey living day I will thank anvaka for the code
// Also I have to credit claude as it helped me a lot with this, Im cooked bro ai is replacing me

export default class MSDFTextRenderer {
  constructor(gl) {
    this.gl = gl;
    this.fontSize =  2;
    this.opacity =  1;

    this.isReady = false;
    this.fontInfo = null;

    this.positions = [];
    this.charSizes = [];
    this.texturePositions = [];

    this.initShaders();
    this.initBuffers();
    this.loadFont();
  }

  // HAVE TO WAIT FOR THE FONT 
  async loadFont() {
    return new Promise((resolve, reject) => {
      (async () => {
        try {
          const response = await fetch('/fonts/Roboto.json', { mode: 'cors' });
          const fontInfo = await response.json();
          this.fontInfo = fontInfo;
          this.alphabet = new Map();
          
          fontInfo.chars.forEach(char => {
            this.alphabet.set(String.fromCharCode(char.id), char);
          });
  
          const img = new Image();
          img.crossOrigin = 'Anonymous';
          
          img.onload = () => {
            const gl = this.gl;
            this.texture = gl.createTexture();

            // Also from anvakas w-gl library
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
            this.isReady = true;
  
            resolve(); 
          };
  
          img.src = '/fonts/Roboto0.png';
        } 
        catch (err) {
          reject(err); 
          console.error('Failed to load font:', err);
        }
      })();
    });
  }
  
  createShader(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error('Shader compilation error:', gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  }

  createProgram(gl, vertexShader, fragmentShader) {
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program linking error:', gl.getProgramInfoLog(program));
      return null;
    }
    return program;
  }

  initShaders() {
    const gl = this.gl;

    // for some reason you have to include the version in the shader in webgl 2 and use this in, out syntax
    
    const vertexShaderSource = 
     `#version 300 es
      precision highp float;
      
      uniform mat4 modelViewProjection;
      uniform vec4 color;
      uniform float cameraDistance;
  
      in vec3 position;
      in vec2 point;
      in vec3 charSize;
      in vec4 texturePosition;
  
      out vec2 vPoint;
      out vec4 vColor;
  
      void main() {
        vec3 pos = position + vec3(vec2(point) * charSize.xy, 0.0);
        gl_Position = modelViewProjection * vec4(pos, 1.0);
        vPoint = texturePosition.xy + point * texturePosition.zw;
        vColor = color;
        //vColor[3] *= (1. - smoothstep(0.0, 1., cameraDistance / (5000. * charSize.z)));
      }`;
  
    const fragmentShaderSource = 
     `#version 300 es
      precision highp float;
      
      uniform sampler2D msdf;
      uniform float bias;
      uniform float opacity;
  
      in vec2 vPoint;
      in vec4 vColor;
  
      out vec4 fragColor;
  
      float median(float r, float g, float b) {
        return max(min(r, g), min(max(r, g), b));
      }
  
      void main() {
        vec3 tsample = texture(msdf, vPoint).rgb;
        float sigDist = median(tsample.r, tsample.g, tsample.b) - bias;
        float alpha = clamp(sigDist / fwidth(sigDist) + bias, 0.0, 1.0);
        fragColor = vec4(vColor.rgb, vColor.a * alpha * opacity);
      }`;

    const vertexShader = this.createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = this.createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
    this.program = this.createProgram(gl, vertexShader, fragmentShader);

    this.locations = {
      position: gl.getAttribLocation(this.program, 'position'),
      point: gl.getAttribLocation(this.program, 'point'),
      charSize: gl.getAttribLocation(this.program, 'charSize'),
      texturePosition: gl.getAttribLocation(this.program, 'texturePosition'),
      modelViewProjection: gl.getUniformLocation(this.program, 'modelViewProjection'),
      color: gl.getUniformLocation(this.program, 'color'),
      cameraDistance: gl.getUniformLocation(this.program, 'cameraDistance'),
      bias: gl.getUniformLocation(this.program, 'bias'),
      opacity: gl.getUniformLocation(this.program, 'opacity'),
      msdf: gl.getUniformLocation(this.program, 'msdf')
    };
  }

  initBuffers() {
    const gl = this.gl;
    
    this.vao = gl.createVertexArray();
    gl.bindVertexArray(this.vao);
    
    this.buffers = {
      position: gl.createBuffer(),
      point: gl.createBuffer(),
      charSize: gl.createBuffer(),
      texturePosition: gl.createBuffer()
    };

    const quadPoints = new Float32Array([
      0, 0,
      1, 0,
      1, 1,
      1, 1,
      0, 0,
      0, 1
    ]);
    
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.point);
    gl.bufferData(gl.ARRAY_BUFFER, quadPoints, gl.STATIC_DRAW);
    gl.enableVertexAttribArray(this.locations.point);
    gl.vertexAttribPointer(this.locations.point, 2, gl.FLOAT, false, 0, 0);
    gl.vertexAttribDivisor(this.locations.point, 0);

    gl.bindVertexArray(null);
  }

  addText(textInfo) {
    if (!this.isReady) {
      //shouldn't come here anymore
      return;
    }

    let { text, x = 0, y = 0, z = 0} = textInfo;
    if (!text) return;

    let dx = 0;
    let fontSize = textInfo.fontSize;

    if (textInfo.limit !== undefined) {
      let w = 0;
      for (let char of text) {        
        let sdfPos = this.alphabet.get(char);
        if (!sdfPos) {
          sdfPos = this.alphabet.get('_');
          //  continue;
        }
        w += sdfPos.xadvance;
      }
      fontSize = (textInfo.limit * this.fontInfo.info.size) / w;
    }

    const scale = fontSize / this.fontInfo.info.size;

    if (textInfo.cx !== undefined) {
      let w = 0;
      for (const char of text) {
        let sdfPos = this.alphabet.get(char);
        if(!sdfPos) {sdfPos = this.alphabet.get('_');}
         w += sdfPos.xadvance;
      }
      dx -= w * textInfo.cx * scale;
    }

    if (textInfo.cy !== undefined) {
      y += fontSize * textInfo.cy;
    }

    for (const char of text) {
      let sdfPos = this.alphabet.get(char);
      if (!sdfPos) {
        sdfPos = this.alphabet.get('_');
        //continue;
      }

      this.positions.push(x + dx, y - sdfPos.yoffset * scale, z);
      
      this.charSizes.push(
        (fontSize * sdfPos.width) / 42,
        (-fontSize * sdfPos.height) / 42,
        fontSize
      );
      //can this be further optimized? because its taking way too much memory 
      this.texturePositions.push(
        sdfPos.x / this.sdfTextureWidth,
        1 - sdfPos.y / this.sdfTextureHeight,
        sdfPos.width / this.sdfTextureWidth,
        -sdfPos.height / this.sdfTextureHeight
      );

      dx += sdfPos.xadvance * scale;
    }
  }

  uploadBuffers() {
    const gl = this.gl;
    gl.bindVertexArray(this.vao);

    // position 
    //console.log(this.charSizes.length);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.position);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.positions), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(this.locations.position);
    gl.vertexAttribPointer(this.locations.position, 3, gl.FLOAT, false, 0, 0);
    gl.vertexAttribDivisor(this.locations.position, 1);

    //charSize 
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.charSize);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.charSizes), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(this.locations.charSize);
    gl.vertexAttribPointer(this.locations.charSize, 3, gl.FLOAT, false, 0, 0);
    gl.vertexAttribDivisor(this.locations.charSize, 1);

    //texturePosition
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.texturePosition);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.texturePositions), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(this.locations.texturePosition);
    gl.vertexAttribPointer(this.locations.texturePosition, 4, gl.FLOAT, false, 0, 0);
    gl.vertexAttribDivisor(this.locations.texturePosition, 1);

    gl.bindVertexArray(null);
  }

  draw(modelViewProjection, cameraDistance) {
    const gl = this.gl;
    if (!this.isReady || this.positions.length === 0) {
      //console.log(!this.isReady, this.positions.length === 0);
    return;}

    gl.useProgram(this.program);
    gl.bindVertexArray(this.vao);

    gl.uniformMatrix4fv(this.locations.modelViewProjection, false, modelViewProjection);
    gl.uniform1f(this.locations.cameraDistance, cameraDistance);
    gl.uniform1f(this.locations.opacity, this.opacity);

    // no idea what these are but they are needed as per claude
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, this.texture);
    gl.uniform1i(this.locations.msdf, 0);

    const instanceCount = this.positions.length / 3;

    //outline is good but it introduces artificats at a certain zoom level
    //gl.uniform4f(this.locations.color, 0.2, 0.2, 0.2, 1.0);
    //gl.uniform1f(this.locations.bias, 0.35);
    //gl.drawArraysInstanced(gl.TRIANGLES, 0, 6, instanceCount);

    gl.uniform4f(this.locations.color, 1., 1., 1, 1.0);
    gl.uniform1f(this.locations.bias, 0.5);
    gl.drawArraysInstanced(gl.TRIANGLES, 0, 6, instanceCount);

    gl.bindVertexArray(null);
  }

  //there should be no need for this
  clear() {
    this.positions = [];
    this.charSizes = [];
    this.texturePositions = [];
  }
}