import MSDFTextRenderer from './test.js';
import Papa from 'papaparse';


const canvas = document.getElementById('webgl-canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const gl = canvas.getContext('webgl2');

if (!gl) {
  alert('WebGL 2.0 is not supported in your browser.');
  throw new Error('WebGL 2.0 not supported.');
}

const vertexShaderSource = `
  attribute vec2 a_position;    
  attribute vec2 a_offset;     
  attribute float a_size;
  attribute vec4 a_color;       

  uniform mat4 u_projection;   

  varying vec2 v_point;    
  varying vec4 v_color;     

  void main() {
    vec2 scaledPosition = a_position * a_size + a_offset; // Scale and offset quad
    gl_Position = u_projection * vec4(scaledPosition, 0.0, 1.0);
    v_point = a_position; // Pass point to fragment shader
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

// Helper: Compile shader
function createShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

// Helper: Create program
function createProgram(gl, vertexShader, fragmentShader) {
  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error(gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
    return null;
  }
  return program;
}

const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
const program = createProgram(gl, vertexShader, fragmentShader);

const a_position = gl.getAttribLocation(program, 'a_position');
const a_offset = gl.getAttribLocation(program, 'a_offset');
const a_size = gl.getAttribLocation(program, 'a_size');
const a_color = gl.getAttribLocation(program, 'a_color');
const u_projection = gl.getUniformLocation(program, 'u_projection');

// Set up geometry for a quad (representing a circle)
const quadVertices = new Float32Array([
  -1, -1,
   1, -1,
  -1,  1,
   1, -1,
   1,  1,
  -1,  1,
]);

const quadBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer);
gl.bufferData(gl.ARRAY_BUFFER, quadVertices, gl.STATIC_DRAW);

const numCircles = 1000000; // wow no issues with this many circles tested upto 50 million
const offsets = new Float32Array(numCircles * 2);
const sizes = new Float32Array(numCircles);
const colors = new Float32Array(numCircles * 4); // RGBA
for (let i = 0; i < numCircles; i++) {
  offsets[i * 2] = Math.random() * 10000;
  offsets[i * 2 + 1] = Math.random() * 10000 ;
  sizes[i] = Math.random() * 10;
  colors[i * 4] = Math.random();      
  colors[i * 4 + 1] = Math.random();  
  colors[i * 4 + 2] = Math.random();  
  colors[i * 4 + 3] = 1.0;  
}

const offsetBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, offsetBuffer);
gl.bufferData(gl.ARRAY_BUFFER, offsets, gl.STATIC_DRAW);

const sizeBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, sizeBuffer);
gl.bufferData(gl.ARRAY_BUFFER, sizes, gl.STATIC_DRAW);

const colorBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
gl.bufferData(gl.ARRAY_BUFFER, colors, gl.STATIC_DRAW);

// Configure WebGL
gl.clearColor(0, 0, 0, 1);
gl.enable(gl.BLEND);
gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);


let zoomLevel = 1000;
let cameraX = 5000;
let cameraY = 5000;
let isDragging = false;
let lastMouseX = 0;
let lastMouseY = 0;

canvas.addEventListener('mousedown', (e) => {
  isDragging = true;
  lastMouseX = e.clientX;
  lastMouseY = e.clientY;
});

canvas.addEventListener('mouseup', () => {
  isDragging = false;
});

// is not dragging properly zoom levels are off
// im stupid my brain is not functioning right now ill fix this later
canvas.addEventListener('mousemove', (e) => {
  if (isDragging) {
    const dx = (e.clientX - lastMouseX);
    const dy = (e.clientY - lastMouseY) ;
    cameraX -= dx ;
    cameraY += dy ;
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;

    console.log(e.clientX, e.clientY);

  }
});

canvas.addEventListener('wheel', (e) => {
  const zoomFactor = Math.exp(e.deltaY * 0.001);
  zoomLevel *= zoomFactor;
});


const textRenderer = new MSDFTextRenderer(gl);


textRenderer.loadFont().then(() => {
  textRenderer.clear();
  // 1m works but a single tab requires 2.8 gb of ram which is kinda insane 
  // might need to implement something
  for (let i = 0; i < numCircles; i++) {
    textRenderer.addText({
      text: "jklhjkghui",
      x: offsets[i * 2],
      y: offsets[i * 2 + 1],
      limit: 2. * sizes[i],
      cx: 0.51,
      cy: 0.5,
    });
  }
  textRenderer.uploadBuffers();
}).catch(err => {
  console.error('Font loading failed:', err);
});



function createProjectionMatrix() {
  const aspectRatio = canvas.width / canvas.height;
  const scale = 1 / zoomLevel;
  return new Float32Array([
    scale / aspectRatio, 0, 0, 0,
    0, scale, 0, 0,
    0, 0, 1, 0,
    -cameraX * scale / aspectRatio, -cameraY * scale, 0, 1,
  ]);
}

function draw() {
  
  gl.clear(gl.COLOR_BUFFER_BIT);

  gl.useProgram(program);

  gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer);
  gl.vertexAttribPointer(a_position, 2, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(a_position);

  gl.bindBuffer(gl.ARRAY_BUFFER, offsetBuffer);
  gl.vertexAttribPointer(a_offset, 2, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(a_offset);
  gl.vertexAttribDivisor(a_offset, 1);

  gl.bindBuffer(gl.ARRAY_BUFFER, sizeBuffer);
  gl.vertexAttribPointer(a_size, 1, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(a_size);
  gl.vertexAttribDivisor(a_size, 1);

  gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
  gl.vertexAttribPointer(a_color, 4, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(a_color);
  gl.vertexAttribDivisor(a_color, 1);

  const projectionMatrix = createProjectionMatrix();
  gl.uniformMatrix4fv(u_projection, false, projectionMatrix);

  gl.drawArraysInstanced(gl.TRIANGLES, 0, 6, numCircles);
  textRenderer.draw(projectionMatrix, 1.);

  requestAnimationFrame(draw);
}

draw();
