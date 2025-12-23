import Stats from "stats-gl";
export default class UI {
	constructor(bus) {
		this.bus = bus;

		//controls
		this.canvas = document.getElementById("webgl");

		this.canvas.addEventListener("mousedown", (e) => {
			this.bus.controls.handleMouseDown(e);
		});

		this.canvas.addEventListener(
			"touchstart",
			(e) => {
				this.bus.controls.handleTouchStart(e);
			},
			{ passive: false },
		);

		this.canvas.addEventListener("mouseup", () => {
			this.bus.controls.handleMouseUp();
		});

		this.canvas.addEventListener("mouseleave", () => {
			this.bus.controls.handleMouseUp();
		});

		this.canvas.addEventListener("touchend", () => {
			this.bus.controls.handleTouchEnd();
		});

		this.canvas.addEventListener("mousemove", (e) => {
			this.bus.controls.handleMouseMove(e);
		});

		this.canvas.addEventListener(
			"touchmove",
			(e) => {
				this.bus.controls.handleTouchMove(e);
			},
			{ passive: false },
		);

		this.canvas.addEventListener(
			"wheel",
			(e) => {
				this.bus.controls.handleZoom(e);
			},
			{ passive: true },
		);

		this.canvas.addEventListener("click", (e) => {
			this.bus.controls.handleClick(e);
		});

		document.getElementById("random-button").addEventListener("click", () => {
			this.bus.controls.goToRandomArticle();
		});

		window.addEventListener("resize", () => {
			this.bus.webgl.resizeCanvas();
			this.bus.controls.handleResize();
		});

		document.getElementById("sensitivity-range").addEventListener("input", (e) => {
			this.bus.controls.sensitivity = e.target.value / 25000;
			document.getElementById("sensitivity-value").textContent = e.target.value.padStart(3, "0");
		});

		if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
			document.getElementById("sensitivity").style.display = "none";
		}

		//search
		this.searchInput = document.getElementById("search");
		this.loadingIndicator = document.getElementById("loader");
		this.resultsContainer = document.getElementById("search-results");

		document.getElementById("search-button").addEventListener("click", () => {
			this.bus.search.performSearch(this.searchInput.value.trim());
		});

		document.getElementById("search").addEventListener("input", () => {
			this.clearResults();
		});

		//main
		const introOverlay = document.getElementById("intro");
		const startButton = document.getElementById("start");

		document.getElementById("load-button").addEventListener("click", () => {
			this.bus.visualization.initialize(document.getElementById("selected").value);
		});

		startButton.addEventListener("click", () => {
			const initialSelected = document.querySelector('input[name="dataset"]:checked').value;

			introOverlay.style.display = "none";

			this.bus.visualization.initialize(initialSelected);
		});

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
		this.pctEl = document.getElementById("loading-percent");
	}

	//search
	clearResults() {
		this.resultsContainer.innerHTML = "";
		this.resultsContainer.style.display = "none";
	}

	toggleSearchLoading(show) {
		this.loadingIndicator.style.display = show ? "grid" : "none";
	}

	displayResults(results) {
		if (results.length === 0) {
			this.resultsContainer.innerHTML = "<div class='search-result-item'>No results found</div>";
			this.resultsContainer.style.display = "block";
			return;
		}

		this.resultsContainer.innerHTML = results
			.map((result) => {
				return `<div class="search-result-item">${result.target}</div>`;
			})
			.join("");

		this.resultsContainer.style.display = "block";

		this.resultsContainer.querySelectorAll(".search-result-item").forEach((item) => {
			item.addEventListener("click", (e) => this.handleResultClick(e));
		});
	}

	handleResultClick(e) {
		const title = e.target.closest(".search-result-item").textContent;
		this.searchInput.value = "";
		this.clearResults();
		this.bus.search.handleSearchResult(title);
	}

	//main
	setProgress(progress) {
		this.pctEl.textContent = `${progress}%`;
	}

	toggleLoading(show) {
		const loadingElement = document.getElementById("loading");
		loadingElement.style.display = show ? "flex" : "none";
		if (show) document.getElementById("wiki").classList.remove("active");
	}
}
