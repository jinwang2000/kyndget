const datefmt = {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};

const kyndiSearchConfig = {
  container: '#kyn-search',
  volumeId: 'c873b96b-2f52-4281-82a1-8b3b976a64ef',
  host: 'http://outliant-dot.stag.kyndi.com:3001',
  maxResultsCount: 10,
  searchPlaceholder: 'Enter your query',
  searchReset: `
    <img class="kyn-searchbox-reset-icon" src="images/reset-icon.svg" alt="reset" />`,
  searchButtonText: '',
  searchButtonIcon: `
    <img class="kyn-searchbox-submit-icon" src="images/submit-icon.svg" alt="submit"/>`,
  resultTemplate: `
    <div class="kyn-results-item">
        <div class="title">{{result.docTitle}}</div>
        <div class="title">PageName: {{result.PageName}}</div>
        <!--- div class="byline">{{result.docAuthor}} &mdash; {{result.docDate}}</div --->
        <div class="sentence">{{result.resultText}}</div>
        <div class="link"><a target="_blank" href="{{result.docURL}}">{{result.docURL}}</a></div>
    </div>`,
  transformItems: (items) =>
    items.map((item) => ({
        ...item,
        result: {
            ...item['result'],
            docDate: new Date(item['result']['docDate']).toLocaleString('en-US', datefmt)
        },
    })),
  resultsInfoTemplate: `
    <div class="kyn-results-info">
        <div class="strong">Top {{resultsCount}} results for &ldquo;{{searchQuery}}&rdquo;</div>
    </div>`,
  noSearchResultsTemplate: `
    <div class="kyn-results-noresults">
        <div class="strong">No results for &ldquo;{{searchQuery}}&rdquo; were found</div>
    </div>`,
  errorTemplate: `
    <div class="kyn-results-error">
        <div class="strong">{{error}}</div>
    </div>`,
  processIndicatorTemplate: `
    <div class="kyn-results-progress-indicator">
        <img src="images/progress-indicator.svg"/>
    </div>`
};
