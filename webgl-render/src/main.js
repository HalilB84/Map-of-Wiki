import CircleRenderer from './CircleRenderer.js';
import MSDFTextRenderer from './MSDFTextRenderer.js';
import Papa from 'papaparse';

const canvas = document.getElementById('webgl-canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const gl = canvas.getContext('webgl2');

if (!gl) {
  alert('WebGL 2.0 is not supported in your browser.');
  throw new Error('WebGL 2.0 not supported.');
}

gl.clearColor(0, 0, 0, 1);
gl.enable(gl.BLEND);
gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

let zoomLevel = 10;
let cameraX = 0;
let cameraY = 0;
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

canvas.addEventListener('mousemove', (e) => {
  if (isDragging) {
    const dx = (e.clientX - lastMouseX);
    const dy = (e.clientY - lastMouseY);
    cameraX -= dx/100;
    cameraY += dy/100;
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
  }
});

canvas.addEventListener('wheel', (e) => {
  const zoomFactor = Math.exp(e.deltaY * 0.001);
  zoomLevel *= zoomFactor;
});

// Create projection matrix
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

const circleRenderer = new CircleRenderer(gl);

const textRenderer = new MSDFTextRenderer(gl);

function loadCSV(filePath) {
  return new Promise((resolve, reject) => {
    Papa.parse(filePath, {
      download: true,
      header: true,
      dynamicTyping: false,
      skipEmptyLines: true, 
      complete: (results) => resolve(results.data),
      error: (error) => reject(error),
    });
  });
}

async function initialize() {
  try {
    const data = await loadCSV('/layout.csv'); 
    circleRenderer.setData(data);

    await textRenderer.loadFont();
    for (let i = 0; i < circleRenderer.numCircles; i++) {
      //console.log(circleRenderer.titles[i]);

      textRenderer.addText({
        text: circleRenderer.titles[i],
        x: circleRenderer.offsets[i * 2],
        y: circleRenderer.offsets[i * 2 + 1],
        limit: 2 * circleRenderer.sizes[i],
        cx: 0.51,
        cy: 0.5,
      });

    }
    textRenderer.uploadBuffers();

  } catch (error) {
    console.error('Error initializing the application:', error);
  }
}


function draw() {
  gl.clear(gl.COLOR_BUFFER_BIT);
  
  const projectionMatrix = createProjectionMatrix();
  circleRenderer.draw(projectionMatrix);
  textRenderer.draw(projectionMatrix, 1.0);
  
  requestAnimationFrame(draw);
}

initialize().then(draw);
