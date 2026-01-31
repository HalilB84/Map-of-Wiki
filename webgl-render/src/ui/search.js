export class Search {
	constructor(state) {
		this.state = state;

		this.isDataInitialized = false;

		this.searchWorker = new Worker(new URL("../utils/searchworker.js", import.meta.url), { type: "module" });
		this.searchWorker.addEventListener("message", (data) => this.handleWorkerMessage(data));
	}

	performSearch(query) {
		if (!query) {
			this.state.ui.clearResults();
			return;
		}

		this.state.ui.toggleSearchLoading(true);

		this.searchWorker.postMessage({
			query: query,
			titles: this.isDataInitialized ? null : this.state.data.titles,
			options: { limit: 5 },
		});

		this.isDataInitialized = true;
	}

	handleWorkerMessage(data) {
		const { results } = data.data;
		this.state.ui.displayResults(results);
		this.state.ui.toggleSearchLoading(false);
	}
}
