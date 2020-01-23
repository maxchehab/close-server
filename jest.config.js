module.exports = {
  moduleFileExtensions: ["js", "json", "ts"],
  testRegex: ".spec.ts$",
  transform: {
    "^.+\\.(t|j)s$": "ts-jest"
  },
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  testEnvironment: "node",
  coverageReporters: ["text-summary", "lcov"],
  collectCoverageFrom: ["src/**/*.ts"],
  collectCoverage: true
};
