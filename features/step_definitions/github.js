var Selector       = require('testcafe').Selector;
var Role           = require('testcafe').Role;

const DELAY = 5000;
const { Given, When, Then, Before, AfterAll } = require('@cucumber/cucumber');

    var testController = null;
    Before(function (testCase, callback) {
        const world = this;
        world.createTestFile();
        world.runTest();

        setTimeout(callback, DELAY);
    });

    Given('I am open GitHub page', function () {
        return this.waitForTestController()
            .then(function (tc) {
                testController = tc;

                return testController.navigateTo('https://github.com/');
            });
    });

    When('I am typing my search request {string} on GitHub', function (text) {
        var input = Selector('input.form-control.header-search-input.js-site-search-focus').with({ boundTestRun: testController });

        return testController.typeText(input, text);
    });

    Then('I am pressing {string} key on GitHub', function (text) {
        return testController.pressKey(text);
    });

    Then('I should see that the first GitHub\'s result is {string}', function (text) {
        var firstLink = Selector('a[href="/DevExpress/testcafe"]').with({ boundTestRun: testController });

        return testController.expect(firstLink.innerText).contains(text);
    });

    const gitHubRoleForExample = Role('https://github.com/login', function (t) {
        return t
            .click('.btn.btn-primary.btn-block')
            .expect(Selector('#js-flash-container > div > div').innerText).contains("Incorrect username or password.");
    });

    Then('I am trying to use {string}', function (text) {
        return testController.useRole(gitHubRoleForExample);
    });

    AfterAll(() => {
        const world = this;
        // world.freeTestController();
    })

