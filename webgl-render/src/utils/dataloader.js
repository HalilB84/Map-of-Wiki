import Papa from "papaparse";

export class DataLoader {
	constructor(state) {
		this.state = state;

		// hardcoded uncompressed byte sizes for CSVs because the browser doesn't give these numbers directly
		this.fileSizes = {
			"layout60k-Sep-10-2024.csv": 6792224,
			"layout500k-Sep-10-2024.csv": 57693366,
			"layout1m-part1-Sep-10-2024.csv": 59988553,
			"layout1m-part2-Sep-10-2024.csv": 56877942,
		};
	}

	async loadCSV(filePath) {
		this.state.ui.setProgress(0);
		
		const paths = filePath.split(",");
		const totalFiles = paths.length;
		let allData = [];

		for (let i = 0; i < totalFiles; i++) {
			const response = await fetch(paths[i]);
			const fileName = paths[i].split("/").pop();
			const total = this.fileSizes[fileName];

			const reader = response.body.getReader();
			let received = 0;
			const chunks = [];

			while (true) {
				const { done, value } = await reader.read();
				if (done) break;
				chunks.push(value);
				received += value.length;
				this.state.ui.setProgress(Math.floor((i + received / total) / totalFiles * 100));
			}

			const blob = new Blob(chunks);
			const text = await blob.text();

			const results = Papa.parse(text, {
				header: true,
				dynamicTyping: false,
				skipEmptyLines: true,
			});

			allData = allData.concat(results.data);
		}

		return this.processData(allData);
	}


	processData(data) {
		const numItems = data.length;

		const offsets = new Float32Array(numItems * 2);
		const sizes = new Float32Array(numItems);
		const colors = new Float32Array(numItems * 4);
		const titles = new Array(numItems);
		const ids = new Array(numItems);

		let maxy = offsets[0 * 2 + 1] + sizes[0];
		let maxx = offsets[0 * 2] + sizes[0];
		let miny = offsets[0 * 2 + 1] - sizes[0];
		let minx = offsets[0 * 2] - sizes[0];

		for (let i = 0; i < numItems; i++) {
			const item = data[i];

			offsets[i * 2] = +item.x;
			offsets[i * 2 + 1] = +item.y;
			sizes[i] = +item.size;
			colors[i * 4] = +item.r;
			colors[i * 4 + 1] = +item.g;
			colors[i * 4 + 2] = +item.b;
			colors[i * 4 + 3] = 1.0;
			titles[i] = item.title;
			ids[i] = +item.id;

			maxy = Math.max(maxy, offsets[i * 2 + 1] + sizes[i]);
			maxx = Math.max(maxx, offsets[i * 2] + sizes[i]);
			miny = Math.min(miny, offsets[i * 2 + 1] - sizes[i]);
			minx = Math.min(minx, offsets[i * 2] - sizes[i]);
		}

		return {
			numItems,
			offsets,
			sizes,
			colors,
			titles,
			ids,
			axisLimits: [minx, miny, maxx, maxy],
		};
	}
}
