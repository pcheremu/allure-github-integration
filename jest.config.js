/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  name: 'test',
  rootDir: './',
  testMatch: ['<rootDir>/test_puppeteer/pew.test.ts'],
  verbose: true,
  setupFilesAfterEnv: ["<rootDir>/report.js"],
  testRunner: 'jest-jasmine2'
};
