import Papa from "papaparse";

export default class DataLoader {
  // hardcoded uncompressed byte sizes for CSVs
  static FILE_SIZES = {
    "layout60k-Sep-10-2024.csv": 6792224,
    "layout500k-Sep-10-2024.csv": 57693366,
    "layout1m-part1-Sep-10-2024.csv": 59988553,
    "layout1m-part2-Sep-10-2024.csv": 56877942,
  };

  async loadCSV(filePath, onProgress) {
    const paths = filePath.split(",");
    const totalFiles = paths.length;
    let allData = [];

    for (let i = 0; i < totalFiles; i++) {
      const data = await this.loadSingleCSV(paths[i], (p) => {
        onProgress(Math.floor(((i + p / 100) / totalFiles) * 100));
      });
      allData = allData.concat(data);
    }
    return allData;
  }

  // wtf is this, it works tho. Will make sure to understand how it works before publishing
  async loadSingleCSV(filePath, onProgress) {
      const response = await fetch(filePath);
      const fileName = filePath.split("/").pop();
      const total = DataLoader.FILE_SIZES[fileName];
      const reader = response.body.getReader();
      let received = 0;
      const chunks = [];
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        chunks.push(value);
        if (total && onProgress) {
          received += value.length;
          onProgress((received / total) * 100);
        }
      }
      const blob = new Blob(chunks);
      const text = await blob.text();

      return new Promise((resolve, reject) => {
        Papa.parse(text, {
          header: true,
          dynamicTyping: false,
          skipEmptyLines: true,
          complete: (results) => {
            if (!results.data || results.data.length === 0) {
              reject(new Error("CSV file contains no data"));
            } else {
              resolve(results.data);
            }
          },
          error: (error) => reject(error),
        });
      });
  }

  processData(data) {
    const requiredFields = ["id", "title", "x", "y", "size", "r", "g", "b"];
    const firstItem = data[0];

    for (const field of requiredFields) {
      if (!(field in firstItem)) {
        throw new Error(`CSV is missing required field: ${field}`);
      }
    }

    const numItems = data.length;

    const offsets = new Float32Array(numItems * 2);
    const sizes = new Float32Array(numItems);
    const colors = new Float32Array(numItems * 4);
    const titles = new Array(numItems);
    const ids = new Array(numItems);

    for (let i = 0; i < numItems; i++) {
      const item = data[i];

      offsets[i * 2] = parseFloat(item.x);
      offsets[i * 2 + 1] = parseFloat(item.y);

      sizes[i] = parseFloat(item.size);

      colors[i * 4] = parseFloat(item.r);
      colors[i * 4 + 1] = parseFloat(item.g);
      colors[i * 4 + 2] = parseFloat(item.b);
      colors[i * 4 + 3] = 1.0;

      titles[i] = item.title;
      ids[i] = parseInt(item.id);
    }

    return {
      numItems,
      offsets,
      sizes,
      colors,
      titles,
      ids,
    };
  }
}
