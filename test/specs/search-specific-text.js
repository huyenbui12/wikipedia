import { mainPage } from "../pageobjects/main-page.js";
import { searchResultPage } from "../pageobjects/search-result-page.js";
import { BASE_URL } from "../constants.js";
import { readFile } from "../utils/coreHelper.js";


describe('Search for pages containing specific text', () => {
    const inputdata = readFile('../testdata/input-data.json');
    it('should navigate user to Search Result page by clicking on "Search for pages containing" field with valid keywords', async () => {
        // 1. Go to Wikipedia Main Page
        browser.url(BASE_URL);
        browser.maximizeWindow();

        // 2. Input valid keywords
        mainPage.SEARCH_FORM.click();
        mainPage.SEARCH_FORM.addValue(inputdata.shortkeywords);

        // 3. Check point: Check that the inputted keywords display in the field
        await browser.pause(3000);
        await expect(mainPage.SEARCH_SPECIFIC_TEXT_MENU).toHaveText('Search for pages containing ' + inputdata.shortkeywords);

        // 4. Click on "Search for pages containing specific text" field
        mainPage.SEARCH_SPECIFIC_TEXT_MENU.click();

        // 5. Check point: Check that Search Result page displays with related results successfully
        await expect(searchResultPage.SEARCH_RESULT_TITLE).toHaveText('Search results');
        await expect(searchResultPage.EXIST_MESSAGE).toBeDisplayed();
    });

    it('should display error message when searching keywords that exceed the maximum allowed length', async () => {
        // 1. Go to Wikipedia Main Page
        browser.url(BASE_URL);
        browser.maximizeWindow();

        // 2. Input keywords that exceed the maximum allowed length
        mainPage.SEARCH_FORM.click();
        mainPage.SEARCH_FORM.addValue(inputdata.longkeywords);

        // 3. Check point: Check that the inputted keywords display in the field
        await browser.pause(3000);
        await expect(mainPage.SEARCH_SPECIFIC_TEXT_MENU).toHaveText('Search for pages containing ' + inputdata.longkeywords);

        // 4. Click on Search for pages containing specific text field
        mainPage.SEARCH_SPECIFIC_TEXT_MENU.click();

        // 5. Check point: Search Result page displays with Error message
        await expect(searchResultPage.SEARCH_RESULT_TITLE).toHaveText('Search results');
        await expect(searchResultPage.ERROR_MESSAGE).toBeDisplayed();
    });
});