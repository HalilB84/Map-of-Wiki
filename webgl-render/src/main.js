import CircleRenderer from './CircleRenderer.js';
import MSDFTextRenderer from './MSDFTextRenderer.js';
import Papa from 'papaparse';
import fuzzysort from 'fuzzysort'


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

let zoomLevel = 20;
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
    const dx = (e.clientX - lastMouseX) * (zoomLevel / 1000);
    const dy = (e.clientY - lastMouseY) * (zoomLevel / 1000);
    cameraX -= dx;
    cameraY += dy;
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
  }
});

canvas.addEventListener('wheel', (e) => {
  const zoomFactor = Math.exp(e.deltaY * 0.001);
  zoomLevel *= zoomFactor;
});

// Create projection matrix but no idea if its right???
//nvm this is wrong need to fix
function createProjectionMatrix() {
  const aspectRatio = canvas.width / canvas.height;
  const scale = 1 / zoomLevel;
  return new Float32Array([
    scale / aspectRatio, 0, 0, 0,
    0, scale, 0, 0,
    0, 0, 1, 0,
    -cameraX * scale / aspectRatio , -cameraY * scale, 0, 1,
  ]);
}

// Function to handle search also have to make this async
function search() {
  const query = document.getElementById('search').value;
  const resultsContainer = document.getElementById('search-results');

  if (query === '') {
    resultsContainer.innerHTML = '';
    resultsContainer.style.display = 'none';
    return;
  }

  const results = fuzzysort.go(query, circleRenderer.titles, { limit: 5 });

  if (results.length > 0) {
    resultsContainer.innerHTML = results
      .map(
        (result) =>
          `<div class="search-result-item" data-title="${result.target}">${result.target}</div>`
      )
      .join('');
    resultsContainer.style.display = 'block';

    document.querySelectorAll('.search-result-item').forEach((item) => {
      item.addEventListener('click', (event) => handleResultClick(event));
    });
  } else {
    resultsContainer.innerHTML = '<div>No results found</div>';
    resultsContainer.style.display = 'block';
  }
}

function handleResultClick(event) {
  const clickedElement = event.target;
  const title = clickedElement.dataset.title; 

  //console.log(`User clicked on result: ${title} (Index: ${index})`);
  smoothTransition(title);
}

document.getElementById('search').addEventListener('input', search);


function smoothTransition(title){
  // transition from initial camera x and y to the new camera x and y
  // transition from initial zoom level to the new zoom level
  // has to be smooth so a like a curve function

  // for now just teleporting is good enough and yes I know the index fetching is bad i will fix it
  const index = circleRenderer.titles.indexOf(title);
  cameraX = circleRenderer.offsets[index * 2];
  cameraY = circleRenderer.offsets[index * 2 + 1];
  zoomLevel = circleRenderer.sizes[index] * 10;
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
    const data = await loadCSV('/layout3.csv'); 
    circleRenderer.setData(data);

    await textRenderer.loadFont();
    for (let i = 0; i < circleRenderer.numCircles; i++) {

      textRenderer.addText({
        text: circleRenderer.titles[i],
        x: circleRenderer.offsets[i * 2],
        y: circleRenderer.offsets[i * 2 + 1],
        limit: 2 * circleRenderer.sizes[i],
        cx: 0.51, //gotta figure out these
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
