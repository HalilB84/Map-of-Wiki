import fuzzysort from "fuzzysort";

let storedTitles = null;

self.onmessage = function (data) {
	const { query, titles, options } = data.data;

	if (titles !== null) {
		storedTitles = titles;
	}

	const results = fuzzysort.go(query, storedTitles, options);

	self.postMessage({
		results: results,
	});
};
