import {browser, Config} from 'protractor';

export let config: Config = {
    baseUrl: 'http://localhost:3000/',

    specs: [
        './specs/*.e2e.js',
        './*.e2e.js'
    ],
    exclude: [],

    framework: 'jasmine2',

    allScriptsTimeout: 110000,

    jasmineNodeOpts: {
        showTiming: true,
        showColors: true,
        isVerbose: false,
        includeStackTrace: false,
        defaultTimeoutInterval: 400000
    },
    directConnect: true,

    multiCapabilities: [
        {
            browserName: 'chrome'
        },
        // TODO не получилось завести, разобраться, в ФФ возмонжо проблема с этим https://github.com/angular/zone.js/issues/616
        // {
        //   browserName: 'firefox'
        // },

        // {
        //   browserName: 'internet explorer',
        //   platform: 'ANY',
        //   version: '11'
        // }
    ],

    onPrepare: function () {
        browser.waitForAngularEnabled(false);
    },
    seleniumArgs: ['-Dwebdriver.ie.driver=node_modules/protractor/selenium/IEDriverServer.exe'],

};
