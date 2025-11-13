export default class SearchManager {
	constructor(bus) {
		this.bus = bus;
		this.searchInput = document.getElementById("search");
		this.resultsContainer = document.getElementById("search-results");
		this.loadingIndicator = document.querySelector(".search-loading");
		this.searchButton = document.getElementById("search-button");
		this.isDataInitialized = false;

		this.searchWorker = new Worker(new URL("../workers/searchworker.js", import.meta.url), { type: "module" });
		this.searchWorker.onmessage = (data) => this.handleWorkerMessage(data);

		this.searchButton.addEventListener("click", () => this.performSearch());
		this.searchInput.addEventListener("input", () => this.clearResults());
	}

	performSearch() {
		const query = this.searchInput.value.trim();

		if (!query) {
			this.clearResults();
			return;
		}

		this.loadingIndicator.style.display = "block";

		this.searchWorker.postMessage({
			query: query,
			titles: this.isDataInitialized ? null : this.bus.data.titles,
			options: { limit: 5 },
		});

		this.isDataInitialized = true;
	}

	handleWorkerMessage(data) {
		const { results } = data.data;
		this.displayResults(results);
		this.loadingIndicator.style.display = "none";
	}

	displayResults(results) {
		if (results.length === 0) {
			this.resultsContainer.innerHTML = '<div class="search-result-empty">No results found</div>';
			this.resultsContainer.style.display = "block";
			return;
		}

		this.resultsContainer.innerHTML = results
			.map((result) => {
				return `<div class="search-result-item" data-title="${result.target}">${result.target}</div>`;
			})
			.join("");

		this.resultsContainer.style.display = "block";

		this.resultsContainer.querySelectorAll(".search-result-item").forEach((item) => {
			//uhh is not deleting this bad?
			item.addEventListener("click", (e) => this.handleResultClick(e));
		});
	}

	handleResultClick(event) {
		const title = event.target.closest(".search-result-item").dataset.title;
		this.searchInput.value = "";
		this.clearResults();
		this.handleSearchResult(title);
	}

	handleSearchResult(title) {
		const index = this.bus.data.titles.indexOf(title);
		if (index === -1) return;

		const targetX = this.bus.data.offsets[index * 2];
		const targetY = this.bus.data.offsets[index * 2 + 1];
		const targetZoom = this.bus.data.sizes[index] * 5;

		this.bus.controls.smoothTransition(targetX, targetY, targetZoom, true);
	}

	clearResults() {
		this.resultsContainer.innerHTML = "";
		this.resultsContainer.style.display = "none";
	}
}
