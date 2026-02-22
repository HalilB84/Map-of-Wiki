import Stats from "stats-gl";

export class UI {
    constructor(state) {
        this.state = state;

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

        //controls
        this.mobile = false;

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
        document.getElementById("start").addEventListener("click", () => {
            document.getElementById("intro").style.display = "none";

            this.state.initialize(document.querySelector('input[name="dataset"]:checked').value);
        });

        //dropdown & sens
        document.getElementById("load-button").addEventListener("click", () => {
            this.state.initialize(document.getElementById("selected").value);
        });

        document.getElementById("sensitivity-range").addEventListener("input", (val) => {
            this.state.camera.controls.zoomSpeed = val.target.value / 12.5;
            document.getElementById("sensitivity-value").textContent = val.target.value.padStart(3, "0");
        });

        //search
        this.results = document.getElementById("search-results");
        this.input = document.getElementById("search");

        document.getElementById("search-button").addEventListener("click", () => {
            this.state.search.performSearch(this.input.value);
        });

        document.getElementById("search").addEventListener("input", () => {
            this.clearResults(false);
        });
    }

    //load stuff
    setProgress(message) {
        document.getElementById("loading-message").textContent = message;
    }

    toggleLoading(show) {
        document.getElementById("loading").style.display = show ? "flex" : "none";
        if (show) document.getElementById("wiki").style.width = "0%";
    }

    //search
    clearResults(input) {
        if (input) this.input.value = "";
        this.results.innerHTML = "";
        this.results.style.display = "none";
    }

    toggleSearchLoading(show) {
        document.getElementById("loader").style.display = show ? "grid" : "none";
    }

    displayResults(results) {
        this.results.style.display = "flex";

        if (results.length === 0) {
            this.results.innerHTML = "<div class='search-result-item'>No results found</div>";
            return;
        }

        this.results.innerHTML = results
            .map((result) => {
                return `<div class="search-result-item">${result.target}</div>`;
            })
            .join("");

        this.results.querySelectorAll(".search-result-item").forEach((item) => {
            item.addEventListener("click", (res) => this.clickResult(res));
        });
    }

    clickResult(res) {
        const title = res.target.closest(".search-result-item").textContent;
        this.clearResults(true);
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
