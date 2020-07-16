// cucumber.js
const common = [
  './feature/*.feature', // Specify our feature files
  '--require-module ts-node/register', // Load TypeScript module
  '--require ./test/acceptance/*.ts', // Load step definitions
  '--format json:report/feature_report.json', // Load custom formatter
].join(' ');

module.exports = {
  default: common
};
