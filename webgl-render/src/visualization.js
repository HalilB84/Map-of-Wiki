import Stats from "stats-gl";

export default class Visualization {
	constructor(bus) {
		this.bus = bus;

		this.animationFrameId = null;
		this.initializing = false;

		this.lastTextUpdateTime = 0;
		this.textUpdateInterval = 1000;

		this.pctEl = document.getElementById("loading-percent");

		this.stats = new Stats({
			trackGPU: false,
			trackHz: false,
			trackCPT: false,
			logsPerSecond: 4,
			graphsPerSecond: 30,
			samplesLog: 40,
			samplesGraph: 10,
			precision: 2,
			horizontal: true,
			minimal: false,
			mode: 0,
		});

		this.stats.dom.style.position = "fixed";
		this.stats.dom.style.bottom = "45px";
		this.stats.dom.style.right = "180px";
		this.stats.dom.style.top = "auto";
		this.stats.dom.style.left = "auto";
		document.body.appendChild(this.stats.dom);
		document.getElementById("load-button").addEventListener("click", () => this.initialize());

		this.setupIntroOverlay();
	}

	setupIntroOverlay() {
		const introOverlay = document.getElementById("intro-overlay");
		const startExplorationButton = document.getElementById("start-exploration");
		const csvSelect = document.getElementById("csv-select");

		startExplorationButton.addEventListener("click", () => {
			const selectedDataset = document.querySelector('input[name="dataset"]:checked').value;

			csvSelect.value = selectedDataset;

			introOverlay.style.display = "none";

			this.initialize();
		});
	}

	//Needs cleaning
	async initialize() {
		if (this.initializing) return;
		this.initializing = true;

		const selector = document.getElementById("csv-select");
		const selectedValue = selector.value;

		const loadingElement = document.getElementById("loading");
		loadingElement.style.display = "flex";

		const rawData = await this.bus.dataLoader.loadCSV(selectedValue, (percent) => {
			this.pctEl.textContent = `${Math.floor(percent)}%`;
		});

		console.log(`Loaded ${rawData.length} data points from CSV`);

		this.bus.data = this.bus.dataLoader.processData(rawData);

		this.bus.circleRenderer.batchAddCircles(this.bus.data);

		await this.bus.textRenderer.loadFont();

		this.updateVisibleText();
		this.bus.searchManager.isDataInitialized = false; //Yes I know this is bad, bla bla Im gonna rewrite the entire codebase

		this.bus.controls.reset();

		if (!this.animationFrameId) {
			this.animationFrameId = requestAnimationFrame((timestamp) => this.draw(timestamp));
		}

		loadingElement.style.display = "none";
		this.initializing = false;
	}

	updateVisibleText() {
		//Also possible for this to be in workers? would decrease lag I think
		const topLeft = this.bus.controls.screenToWorld(0, 0);
		const bottomRight = this.bus.controls.screenToWorld(this.bus.webgl.canvas.width, this.bus.webgl.canvas.height);

		const viewBounds = {
			minX: Math.min(topLeft.x, bottomRight.x),
			maxX: Math.max(topLeft.x, bottomRight.x),
			minY: Math.min(topLeft.y, bottomRight.y),
			maxY: Math.max(topLeft.y, bottomRight.y),
		};

		let threshold = 3000;

		if ((viewBounds.maxX - viewBounds.minX) * (viewBounds.maxY - viewBounds.minY) > threshold) {
			return;
		}

		const visibleTextData = [];
		const { offsets, sizes, titles, numItems } = this.bus.data;

		for (let i = 0; i < numItems; i++) {
			const x = offsets[i * 2];
			const y = offsets[i * 2 + 1];

			if (x >= viewBounds.minX && x <= viewBounds.maxX && y >= viewBounds.minY && y <= viewBounds.maxY) {
				visibleTextData.push({
					text: titles[i],
					x: x,
					y: y,
					limit: 2 * sizes[i],
					cx: 0.51,
					cy: 0.5,
					radius: sizes[i],
				});
			}
		}

		const maxLabels = 1000;
		let labelsToShow = visibleTextData;

		if (visibleTextData.length > maxLabels) {
			labelsToShow = visibleTextData.sort((a, b) => b.radius - a.radius).slice(0, maxLabels);
		}

		console.log(`Showing ${labelsToShow.length} labels out of ${visibleTextData.length} visible circles`);

		this.bus.textRenderer.batchAddText(labelsToShow);
	}

	draw(timestamp) {
		this.stats.begin();

		this.bus.webgl.clear();
		this.bus.webgl.resizeCanvas();

		if (this.bus.controls.transitionActive) {
			this.bus.controls.updateTransition(timestamp);
		}

		if (timestamp - this.lastTextUpdateTime > this.textUpdateInterval) {
			this.updateVisibleText();
			this.lastTextUpdateTime = timestamp;
		}

		const projectionMatrix = this.bus.webgl.createProjectionMatrix(this.bus.controls.cameraX, this.bus.controls.cameraY, this.bus.controls.zoomLevel);

		this.bus.circleRenderer.draw(projectionMatrix, this.bus.controls.zoomLevel * 0.0003);
		this.bus.textRenderer.draw(projectionMatrix);

		this.animationFrameId = requestAnimationFrame((timestamp) => this.draw(timestamp));

		this.stats.end();
		this.stats.update();
	}
}
