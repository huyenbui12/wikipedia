class SearchResultPage {
    get SEARCH_RESULT_TITLE() { return $('//*[@id="firstHeading"]'); }
    get ERROR_MESSAGE() { return $('.mw-message-box-error'); }
    get EXIST_MESSAGE() { return $('.mw-search-exists'); }
}
export const searchResultPage = new SearchResultPage();