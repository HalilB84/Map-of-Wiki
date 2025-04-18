import fuzzysort from 'fuzzysort';

export default class SearchManager {
  constructor(circleRenderer, controls) {
    this.circleRenderer = circleRenderer;
    this.controls = controls;
    this.searchInput = document.getElementById('search');
    this.resultsContainer = document.getElementById('search-results');
    this.loadingIndicator = document.querySelector('.search-loading');
    this.debounceTimer = null;
    this.lastSearchPromise = null;
    
    this.searchInput.addEventListener('input', () => this.debounceSearch());
  }

  debounceSearch() { //Searchs after 500ms of no input
    clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(() => this.performSearch(), 500);
  }

  showLoading(show) {
    if (this.loadingIndicator) {
      this.loadingIndicator.style.display = show ? 'block' : 'none';
    }
  }

  async performSearch() {
    if (this.lastSearchPromise) {
      this.lastSearchPromise.cancel();
    }
    
    const query = this.searchInput.value.trim();
    
    if (!query) {
      this.clearResults();
      this.showLoading(false);
      return;
    }
    
    const cleanQuery = query.replace(/\s+/g, '');
    
    try {
      this.showLoading(true);
      this.lastSearchPromise = fuzzysort.goAsync(cleanQuery, this.circleRenderer.titles, {
        limit: 5,
      });
      
      const results = await this.lastSearchPromise;
      this.displayResults(results);
    } catch (err) {
      if (err.name !== 'CancelError') {
        console.error('Search error:', err);
      }
    } finally {
      this.showLoading(false);
    }
  }

  displayResults(results) {
    if (results.length === 0) {
      this.resultsContainer.innerHTML = '<div class="search-result-empty">No results found</div>';
      this.resultsContainer.style.display = 'block';
      return;
    }
    
    this.resultsContainer.innerHTML = results
      .map(result => {
        const highlighted = fuzzysort.highlight(result, '<span class="highlight">', '</span>');
        return `<div class="search-result-item" data-title="${result.target}">${highlighted || result.target}</div>`;
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
    const index = this.circleRenderer.titles.indexOf(title);
    if (index === -1) return;
    
    const targetX = this.circleRenderer.offsets[index * 2];
    const targetY = this.circleRenderer.offsets[index * 2 + 1];
    const targetZoom = this.circleRenderer.sizes[index] * 5;
    
    this.controls.smoothTransition(targetX, targetY, targetZoom, 2);
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
} 