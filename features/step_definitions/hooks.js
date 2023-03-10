const {Before, After, AfterAll} = require('@cucumber/cucumber');
const fs                   = require('fs');
const createTestCafe       = require('testcafe');

let testcafe = null;
const DELAY = 3000;
let world;
var interation = 400;
function createTestFile () {
    fs.writeFileSync('test.js',
        'import testControllerHolder from "./features/support/testControllerHolder.js";\n\n' +

        'fixture("fixture")\n' +

        'test("test", testControllerHolder.capture);');
}

function runTest () {
    var runner = null;

    createTestCafe('localhost', 1337 + interation, 1338 + interation)
        .then(function (tc) {
            testcafe = tc;
            runner   = tc.createRunner();

            return runner
                .src('./test.js')
                .browsers('chrome')
                .run()
                .catch(function (error) {
                    console.log(error);
                });
        })
        .then(function (report) {
            console.log(report);
        });
    interation++;
}

var testController = null;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
Before(function (testCase, callback) {
    world = this;
    // console.log(world);
    // console.log(world.testControllerHolder);
    try{
        world.createTestFile();
        world.runTest();
    }catch (e){
        console.log(e);
    }

    setTimeout(callback, DELAY);
});
After((testCase, callback) => {
    // console.log(world);
    // console.log(world.testControllerHolder);
    try {
        // world.freeTestController();
        // world.fs.unlinkSync('test.js');
        console.log("limpieza completada");
    }catch (e) {
        console.log(e);
    }
    setTimeout(callback, DELAY);
})

AfterAll((callback) => {
    try {
        // world.freeTestController();
        // world.fs.unlinkSync('test.js');
    }catch (e) {
        console.log(e);
    }
    setTimeout(callback, DELAY);
})

/*
defineSupportCode(function ({ registerHandler }) {
    registerHandler('BeforeFeatures', function (features, callback) {
        createTestFile();
        runTest();

        setTimeout(callback, DELAY);
    });

    registerHandler('AfterFeatures', function (features, callback) {
        testControllerHolder.free();
        fs.unlinkSync('test.js');
        setTimeout(callback, DELAY);
    });
});

 */
