export class Search {
    constructor(state) {
        this.state = state;

        this.searchWorker = new Worker(new URL("./worker.js", import.meta.url), { type: "module" });
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
            options: { limit: 5 },
        });
    }

    uploadTitles(titles) {
        this.searchWorker.postMessage({
            titles: titles,
        });
    }

    handleWorkerMessage(data) {
        const { results } = data.data;
        this.state.ui.displayResults(results);
        this.state.ui.toggleSearchLoading(false);
    }
}
