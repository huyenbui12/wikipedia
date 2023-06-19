class MainPage {
    get SEARCH_FORM() { return $('.cdx-text-input__input'); }
    get SEARCH_SPECIFIC_TEXT_MENU() { return $('.cdx-typeahead-search__search-footer'); }
    get SEARCH_SPECIFIC_TEXT_CONTAINS_LABEL() { return $('.cdx-typeahead-search__search-footer__query'); }
}
export const mainPage = new MainPage();