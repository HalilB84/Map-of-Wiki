/*
adapted from: https://github.com/anvaka/map-of-reddit/blob/main/src/lib/MSDFTextCollection.js
with the heavy lifting done by claude, ai is going take over im cooked
imcomplete code i dont even know if it works but its time to sleep
*/

class MSDFTextRenderer {
    constructor(gl, options = {}) {
        this.gl = gl;
        this.gl.getExtension('OES_standard_derivatives');

        this.isReady = false;
        this.queue = [];
        this.fontSize = options.fontSize || 2;
        this.opacity = options.opacity !== undefined ? options.opacity : 1;
        this.fontInfo = null;
        this.msdfImage = new Image();
        this.msdfImage.crossOrigin = 'Anonymous';

        this.instancedPoints = new Float32Array([
            0, 0,
            1, 0,
            1, 1,
            1, 1,
            0, 0,
            0, 1
        ]);

        let fontPath = 'webgl-render/fonts';
        fetch(`${fontPath}/Roboto.json`, { mode: 'cors' })
            .then(response => response.json())
            .then(fontInfo => {
                this.fontInfo = fontInfo;
                this.alphabet = new Map();
                fontInfo.chars.forEach(char => {
                    this.alphabet.set(String.fromCharCode(char.id), char);
                });

                this.msdfImage.onload = () => {
                    this.isReady = true;
                    this.sdfTextureWidth = this.msdfImage.width;
                    this.sdfTextureHeight = this.msdfImage.height;
                    
                    // idk man i just copied this from w-gl fml at this point i dont understand this
                    this.texture = gl.createTexture();
                    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
                    gl.bindTexture(gl.TEXTURE_2D, this.texture);
                    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.msdfImage);
                    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
                    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
                    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
                    gl.bindTexture(gl.TEXTURE_2D, null);
                    
                    this.queue.forEach(q => this.addText(q));
                    this.queue = [];
                };
                this.msdfImage.src = `${fontPath}/Roboto0.png`;
            });

        this.program = this.createProgram();
        this.setupBuffers();
    }

    setupBuffers() {
        const gl = this.gl;

        this.pointBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.pointBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, this.instancedPoints, gl.STATIC_DRAW);

        this.positionBuffer = gl.createBuffer();
        this.charSizeBuffer = gl.createBuffer();
        this.texturePositionBuffer = gl.createBuffer();
    }

    createProgram() {
        const gl = this.gl;

        const vertexShaderSource = `
            attribute vec3 position;
            attribute vec2 point;
            attribute vec3 charSize;
            attribute vec4 texturePosition;
            uniform mat4 modelViewProjection;
            uniform vec4 color;
            uniform float cameraDistance;
            varying vec4 vColor;
            varying vec2 vPoint;

            void main() {
                gl_Position = modelViewProjection * vec4(position + vec3(vec2(point.x, point.y) * charSize.xy, position.z), 1.0);
                vPoint = texturePosition.xy + point * texturePosition.zw;
                vColor = color;
                vColor.a *= (1.0 - smoothstep(0.0, 1.0, cameraDistance / (5000.0 * charSize.z)));
            }`;

        const fragmentShaderSource = `
            #ifdef GL_OES_standard_derivatives
            #extension GL_OES_standard_derivatives : enable
            #endif
            precision highp float;
            varying vec2 vPoint;
            varying vec4 vColor;
            uniform float bias;
            uniform float opacity;
            uniform sampler2D msdf;

            float median(float r, float g, float b) {
                return max(min(r, g), min(max(r, g), b));
            }

            void main() {
                vec3 sample = texture2D(msdf, vPoint).rgb;
                float sigDist = median(sample.r, sample.g, sample.b) - bias;
                float alpha = clamp(sigDist / fwidth(sigDist) + bias, 0.0, 1.0);
                gl_FragColor = vec4(vColor.rgb, vColor.a * alpha * opacity);
            }`;

        const compileShader = (source, type) => {
            const shader = gl.createShader(type);
            gl.shaderSource(shader, source);
            gl.compileShader(shader);
            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                console.error('Shader compile failed: ', gl.getShaderInfoLog(shader));
            }
            return shader;
        };

        const vertexShader = compileShader(vertexShaderSource, gl.VERTEX_SHADER);
        const fragmentShader = compileShader(fragmentShaderSource, gl.FRAGMENT_SHADER);

        const program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);

        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            console.error('Program link failed: ', gl.getProgramInfoLog(program));
        }

        return program;
    }

    addText(textInfo) {
        if (!this.isReady) {
            this.queue.push(textInfo);
            return;
        }
        //wth is cy???
        let { text, x = 0, y = 0, z = 0, fontSize = this.fontSize, limit, cx, cy } = textInfo;

        if (!text) throw new Error('Text is not defined in ' + textInfo);

        let dx = 0;
        if (limit !== undefined) {
            let width = 0;
            for (let char of text) {
                const sdfChar = this.alphabet.get(char);
                if (!sdfChar) continue;
                width += sdfChar.xadvance;
            }
            fontSize = (limit * this.fontInfo.info.size) / width;
        }

        let scale = fontSize / this.fontInfo.info.size;
        if (cx !== undefined) {
            let width = 0;
            for (let char of text) {
                const sdfChar = this.alphabet.get(char);
                if (!sdfChar) continue;
                width += sdfChar.xadvance;
            }
            dx -= width * cx * scale;
        }
        if (cy !== undefined) {
            y += fontSize * cy;
        }

        const positions = [];
        const charSizes = [];
        const texturePositions = [];

        for (let char of text) {
            const sdfChar = this.alphabet.get(char);
            if (!sdfChar) {
                console.error(char + ' is missing in the font');
                continue;
            }

            positions.push(x + dx, y - sdfChar.yoffset * scale, z);
            charSizes.push(
                (fontSize * sdfChar.width) / 42,
                (-fontSize * sdfChar.height) / 42,
                fontSize
            );
            texturePositions.push(
                sdfChar.x / this.sdfTextureWidth,
                1 - sdfChar.y / this.sdfTextureHeight,
                sdfChar.width / this.sdfTextureWidth,
                -sdfChar.height / this.sdfTextureHeight
            );
            dx += sdfChar.xadvance * scale;
        }

        this.renderText(positions, charSizes, texturePositions);
    }

    renderText(positions, charSizes, texturePositions) {
        const gl = this.gl;
        
        //uhhhhhhhhhh why are these dynamic draw
        gl.bindBuffer(gl.ARRAY_BUFFER, this.positionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.DYNAMIC_DRAW);

        gl.bindBuffer(gl.ARRAY_BUFFER, this.charSizeBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(charSizes), gl.DYNAMIC_DRAW);

        gl.bindBuffer(gl.ARRAY_BUFFER, this.texturePositionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texturePositions), gl.DYNAMIC_DRAW);

        const positionLoc = gl.getAttribLocation(this.program, 'position');
        const pointLoc = gl.getAttribLocation(this.program, 'point');
        const charSizeLoc = gl.getAttribLocation(this.program, 'charSize');
        const texturePosLoc = gl.getAttribLocation(this.program, 'texturePosition');

        gl.bindBuffer(gl.ARRAY_BUFFER, this.positionBuffer);
        gl.vertexAttribPointer(positionLoc, 3, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(positionLoc);

        gl.bindBuffer(gl.ARRAY_BUFFER, this.pointBuffer);
        gl.vertexAttribPointer(pointLoc, 2, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(pointLoc);

        gl.bindBuffer(gl.ARRAY_BUFFER, this.charSizeBuffer);
        gl.vertexAttribPointer(charSizeLoc, 3, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(charSizeLoc);

        gl.bindBuffer(gl.ARRAY_BUFFER, this.texturePositionBuffer);
        gl.vertexAttribPointer(texturePosLoc, 4, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(texturePosLoc);

        gl.drawArrays(gl.TRIANGLES, 0, this.instancedPoints.length / 2);
    }

    draw(modelViewProjection, cameraDistance = 0) {
        // i assume cameradistance is just zoom level but i wont need it anyways
        const gl = this.gl;

        gl.useProgram(this.program);

        const uniforms = {
            modelViewProjection: gl.getUniformLocation(this.program, 'modelViewProjection'),
            color: gl.getUniformLocation(this.program, 'color'),
            bias: gl.getUniformLocation(this.program, 'bias'),
            opacity: gl.getUniformLocation(this.program, 'opacity'),
            cameraDistance: gl.getUniformLocation(this.program, 'cameraDistance'),
            msdf: gl.getUniformLocation(this.program, 'msdf')
        };

        gl.uniformMatrix4fv(uniforms.modelViewProjection, false, modelViewProjection);
        gl.uniform1f(uniforms.cameraDistance, cameraDistance);

        gl.uniform4f(uniforms.color, 0.2, 0.4, 0.8, 0.8);
        gl.uniform1f(uniforms.bias, 0.35);
        gl.uniform1f(uniforms.opacity, this.opacity);
        
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, this.texture);
        gl.uniform1i(uniforms.msdf, 0);
        
        this.renderText();

        gl.uniform4f(uniforms.color, 0.9, 0.9, 0.9, 1.0);
        gl.uniform1f(uniforms.bias, 0.5);
        this.renderText();
    }
}

export default MSDFTextRenderer;