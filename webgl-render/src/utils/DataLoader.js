import Papa from 'papaparse';

export default class DataLoader {
  async loadCSV(filePath) {
    if (filePath.includes(',')) {
      const filePaths = filePath.split(',');
      const loadPromises = filePaths.map(path => this.loadSingleCSV(path));
      const results = await Promise.all(loadPromises);
      return results.flat(); //this is where you appen the information
    }
    return this.loadSingleCSV(filePath);
  }

  async loadSingleCSV(filePath) {
    return new Promise((resolve, reject) => {
      Papa.parse(filePath, {
        download: true,
        header: true,
        dynamicTyping: false,
        skipEmptyLines: true,
        complete: results => { //no idea what this is but it works. 
          if (!results.data || results.data.length === 0) {
            reject(new Error('CSV file contains no data'));
            return;
          }
          resolve(results.data);
        },
        error: error => reject(error),
      });
    });
  }

  processData(data) {
    const requiredFields = ['id', 'title', 'x', 'y', 'size', 'r', 'g', 'b'];
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
      ids
    };
  }
} 