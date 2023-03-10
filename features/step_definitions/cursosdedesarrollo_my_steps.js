const {Given, When, Then} = require("@cucumber/cucumber");
const {Selector} = require("testcafe");
Given(/^I am open CursosDeDesarrollo page$/, function () {
    return this.waitForTestController()
        .then(function (tc) {
            testController = tc;

            return testController.navigateTo('https://cursosdedesarrollo.com/');
        });
});
When(/^I am typing my search request "([^"]*)" on CursosDeDesarrollo$/, function (text) {
    const input = Selector('#wp-block-search__input-1').with({boundTestRun: testController});

    return testController.typeText(input, text);
});
Then(/^I should see that the string "([^"]*)"$/, function (text) {
    const firstHeader = Selector('header.page-header h1').with({boundTestRun: testController});

    return testController.expect(firstHeader.innerText).contains(text);
});
When(/^I am clicking the search button$/, function () {
    const searchButton = Selector('button.wp-block-search__button').with({boundTestRun: testController});

    return testController.click(searchButton);
});
