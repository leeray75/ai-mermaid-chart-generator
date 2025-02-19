module.exports = {
  testEnvironment: "node",
  setupFilesAfterEnv: ["./src/test/setup.js"],
  coveragePathIgnorePatterns: ["/node_modules/"],
  testResultsProcessor: "./node_modules/jest-json-reporter", // Use testResultsProcessor for the custom reporter

};
