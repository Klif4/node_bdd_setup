const reporter = require('cucumber-html-reporter');
const options = {
    theme: 'bootstrap',
    jsonFile: 'report/feature_report.json',
    output: 'report/feature_report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true
};

reporter.generate(options);
