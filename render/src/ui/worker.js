import fuzzysort from "fuzzysort";

let storedTitles = null;

self.addEventListener("message", (data) => {
    const { query, titles, options } = data.data;

    if (titles) {
        storedTitles = titles;
        return;
    }

    const results = fuzzysort.go(query, storedTitles, options);

    self.postMessage({
        results: results,
    });
});
