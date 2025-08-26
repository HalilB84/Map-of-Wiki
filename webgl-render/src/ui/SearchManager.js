export default class SearchManager {
  constructor(visualization, controls) {
    this.visualization = visualization;
    this.controls = controls;
    this.searchInput = document.getElementById('search');
    this.resultsContainer = document.getElementById('search-results');
    this.loadingIndicator = document.querySelector('.search-loading');
    this.searchButton = document.getElementById('search-button');
    
    this.searchWorker = new Worker(new URL('../workers/searchWorker.js', import.meta.url), { type: 'module' });
    this.searchWorker.onmessage = (e) => this.handleWorkerMessage(e);
    
    this.searchButton.addEventListener('click', () => this.performSearch());
    this.searchInput.addEventListener('input', () => this.clearResults());
  }

  showLoading(show) {
    if (this.loadingIndicator) {
      this.loadingIndicator.style.display = show ? 'block' : 'none';
    }
  }

  async performSearch() {
    const query = this.searchInput.value.trim();
    
    if (!query) {
      this.clearResults();
      return;
    }

    this.showLoading(true);
    
    this.searchWorker.postMessage({
      query: query,
      titles: this.visualization.processedData.titles,
      options: {
        limit: 5,
        threshold: -10000 
      }
    });
  }

  handleWorkerMessage(e) {
    const { results } = e.data;
    this.displayResults(results);
    this.showLoading(false);
  }

  displayResults(results) {
    if (results.length === 0) {
      this.resultsContainer.innerHTML = '<div class="search-result-empty">No results found</div>';
      this.resultsContainer.style.display = 'block';
      return;
    }
    
    this.resultsContainer.innerHTML = results
      .map(result => {
        return `<div class="search-result-item" data-title="${result.target}">${result.target}</div>`;
      })
      .join('');
      
    this.resultsContainer.style.display = 'block';
    
    this.resultsContainer.querySelectorAll('.search-result-item').forEach(item => {
      item.addEventListener('click', e => this.handleResultClick(e));
    });
  }

  handleResultClick(event) {
    const title = event.target.closest('.search-result-item').dataset.title;
    this.clearSearch();
    this.handleSearchResult(title);
  }

  handleSearchResult(title) {
    const index = this.visualization.processedData.titles.indexOf(title);
    if (index === -1) return;

    const targetX = this.visualization.processedData.offsets[index * 2];
    const targetY = this.visualization.processedData.offsets[index * 2 + 1];
    const targetZoom = this.visualization.processedData.sizes[index] * 5;
    
    this.controls.smoothTransition(targetX, targetY, targetZoom, true);
  }

  clearSearch() {
    this.searchInput.value = '';
    this.clearResults();
    this.showLoading(false);
  }

  clearResults() {
    this.resultsContainer.innerHTML = '';
    this.resultsContainer.style.display = 'none';
  }

  // Clean up web worker when SearchManager is destroyed
  destroy() {
    if (this.searchWorker) {
      this.searchWorker.terminate();
    }
  }
} 