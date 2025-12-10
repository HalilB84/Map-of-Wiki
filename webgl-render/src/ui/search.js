//to be refactored later

export default class Search {
	constructor(bus) {
		this.bus = bus;

		this.isDataInitialized = false;

		this.searchWorker = new Worker(new URL("../utils/searchworker.js", import.meta.url), { type: "module" });
		this.searchWorker.onmessage = (data) => this.handleWorkerMessage(data);
	}

	performSearch(query) {
		if (!query) {
			this.bus.ui.clearResults();
			return;
		}

		this.bus.ui.toggleSearchLoading(true);

		this.searchWorker.postMessage({
			query: query,
			titles: this.isDataInitialized ? null : this.bus.data.titles,
			options: { limit: 5 },
		});

		this.isDataInitialized = true;
	}

	handleWorkerMessage(data) {
		const { results } = data.data;
		this.bus.ui.displayResults(results);
		this.bus.ui.toggleSearchLoading(false);
	}

	handleSearchResult(title) {
		const index = this.bus.data.titles.indexOf(title);
		if (index === -1) return;

		const targetX = this.bus.data.offsets[index * 2];
		const targetY = this.bus.data.offsets[index * 2 + 1];
		const targetZoom = this.bus.data.sizes[index] * 5;

		this.bus.controls.smoothTransition(targetX, targetY, targetZoom, true);
	}
}
