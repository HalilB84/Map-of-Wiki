import Stats from "stats-gl";

export class UI {
    constructor(state) {
        this.state = state;
        this.mobile = false;

        //controls

        if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
            document.getElementById("sensitivity").style.display = "none";
            this.state.camera.controls.enableDamping = false;
            this.mobile = true;
        } else {
            this.state.camera.controls.zoomSpeed = 4;
        }

        this.is = false;
        this.valid = false;

        this.state.canvas.addEventListener("mousedown", () => {
            if (this.mobile) return;
            this.is = true;
            this.valid = true;
        });

        this.state.canvas.addEventListener("mousemove", () => {
            if (this.mobile) return;
            if (this.is) {
                this.valid = false;
            }
        });

        this.state.canvas.addEventListener("mouseup", (mouse) => {
            if (this.mobile) return;
            if (this.valid) {
                this.state.camera.clickArticle((mouse.clientX / this.state.canvas.clientWidth) * 2 - 1, -(mouse.clientY / this.state.canvas.clientHeight) * 2 + 1);
            }

            this.is = false;
            this.valid = false;
        });

        document.getElementById("random-button").addEventListener("click", () => {
            this.state.camera.goToArticle();
        });

        //main
        const introOverlay = document.getElementById("intro");
        const startButton = document.getElementById("start");

        document.getElementById("load-button").addEventListener("click", () => {
            this.state.initialize(document.getElementById("selected").value);
        });

        startButton.addEventListener("click", () => {
            const initialSelected = document.querySelector('input[name="dataset"]:checked').value;

            introOverlay.style.display = "none";

            this.state.initialize(initialSelected);
        });

        document.getElementById("sensitivity-range").addEventListener("input", (e) => {
            this.state.camera.controls.zoomSpeed = e.target.value / 12.5;
            document.getElementById("sensitivity-value").textContent = e.target.value.padStart(3, "0");
        });

        //search
        this.searchInput = document.getElementById("search");
        this.loadingIndicator = document.getElementById("loader");
        this.resultsContainer = document.getElementById("search-results");

        document.getElementById("search-button").addEventListener("click", () => {
            this.state.search.performSearch(this.searchInput.value.trim());
        });

        document.getElementById("search").addEventListener("input", () => {
            this.clearResults();
        });

        //fps
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
            minimal: true,
            mode: 0,
        });

        this.stats.dom.style.top = "auto";
        this.stats.dom.style.left = "auto";
        this.stats.dom.style.bottom = "48px";
        this.stats.dom.style.right = "90px";
        document.body.appendChild(this.stats.dom);
    }

    //load stuff
    setProgress(message) {
        const prog = document.getElementById("loading-message");
        prog.textContent = message;
    }

    toggleLoading(show) {
        const loading = document.getElementById("loading");
        loading.style.display = show ? "flex" : "none";
        if (show) document.getElementById("wiki").style.width = "0%";
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
            this.resultsContainer.style.display = "flex";
            return;
        }

        this.resultsContainer.innerHTML = results
            .map((result) => {
                return `<div class="search-result-item">${result.target}</div>`;
            })
            .join("");

        this.resultsContainer.style.display = "flex";

        this.resultsContainer.querySelectorAll(".search-result-item").forEach((item) => {
            item.addEventListener("click", (e) => this.handleResultClick(e));
        });
    }

    handleResultClick(e) {
        const title = e.target.closest(".search-result-item").textContent;
        this.searchInput.value = "";
        this.clearResults();
        this.state.camera.goToArticle(title);
    }

    //wiki stuff
    popWiki(id) {
        const wiki = document.getElementById("wiki");
        const iframe = document.getElementById("wiki-iframe");

        const url = "https://en.wikipedia.org/?curid=" + id;

        iframe.src = url;
        wiki.style.width = "30%";

        document.getElementById("close-wiki").onclick = () => {
            wiki.style.width = "0%";
            iframe.src = "about:blank";
        };
    }
}
