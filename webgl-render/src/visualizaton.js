export default class Visualization {
	constructor(bus) {
		this.bus = bus;

		this.animationFrameId = null;
		this.initializing = false;

		this.lastTime = 0;
	}

	async initialize(selectedCSV) {
		if (this.initializing) return;
		this.initializing = true;

		if (this.animation) cancelAnimationFrame(this.animation);
		this.bus.ui.toggleLoading(true);
		this.bus.search.isDataInitialized = false;

		const rawData = await this.bus.dataLoader.loadCSV(selectedCSV, (percent) => {
			this.bus.ui.setProgress(Math.floor(percent));
		});

		this.bus.data = this.bus.dataLoader.processData(rawData);

		this.bus.circleRenderer.batchAddCircles(this.bus.data);

		await this.bus.textRenderer.loadFont();

		this.animation = requestAnimationFrame((timestamp) => this.draw(timestamp));
		this.bus.controls.reset();

		this.bus.ui.toggleLoading(false);
		this.initializing = false;
	}

	draw(timestamp) {
		this.bus.ui.stats.begin();

		this.bus.webgl.clear();

		if (this.bus.controls.transitionActive) {
			this.bus.controls.updateTransition(timestamp);
		}

		let shouldUpdate = false;

		if (timestamp - this.lastTime > 1000) {
			shouldUpdate = true;
			this.lastTime = timestamp;
		}

		const projectionMatrix = this.bus.webgl.createProjectionMatrix(this.bus.controls.cameraX, this.bus.controls.cameraY, this.bus.controls.zoomLevel);

		this.bus.circleRenderer.draw(projectionMatrix, this.bus.controls.zoomLevel * 0.0003);
		this.bus.textRenderer.draw(projectionMatrix, shouldUpdate);

		this.animation = requestAnimationFrame((timestamp) => this.draw(timestamp));

		this.bus.ui.stats.end();
		this.bus.ui.stats.update();
	}
}
