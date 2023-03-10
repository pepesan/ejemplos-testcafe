const {setWorldConstructor} = require('@cucumber/cucumber');
const testControllerHolder = require('./testControllerHolder');
const createTestCafe       = require('testcafe');
const fs = require("fs");

let testcafe = null;
const DELAY = 5000;
var interation = 400;
function createTestFile () {
    fs.writeFileSync('test.js',
        'import testControllerHolder from "./features/support/testControllerHolder.js";\n\n' +

        'fixture("fixture")\n' +

        'test("test", testControllerHolder.capture);');
}
function runTest () {
    let runner = null;
    interation++;
    createTestCafe('localhost', 33400 + interation, 33401 + interation)
        .then(function (tc) {
            testcafe = tc;
            runner   = tc.createRunner();

            return runner
                .src('./test.js')
                .browsers('chrome')
                .run({
                    selectorTimeout: 30*1000, // 30 seconds
                    assertionTimeout: 30*1000
                })
                .catch(function (error) {
                    console.log(error);
                });
        })
        .then(function (report) {
            console.log(report);
        });
}



function CustomWorld({attach, parameters}) {
    this.testControllerHolder = testControllerHolder;
    this.waitForTestController = testControllerHolder.get;
    this.freeTestController = testControllerHolder.free;
    this.fs = fs;
    this.attach = attach;
    this.parameters = parameters;
    this.createTestFile = createTestFile;
    this.runTest = runTest;
}

setWorldConstructor(CustomWorld);
