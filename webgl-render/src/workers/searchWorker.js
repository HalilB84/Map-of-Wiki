import fuzzysort from 'fuzzysort';

self.onmessage = function(data) { //I should probably send the data once but oh well
  const { query, titles, options } = data.data;
  
    const results = fuzzysort.go(query, titles, options);
    
    self.postMessage({
      results: results
    });
 
};
