const nextJest = require("next/jest");

const createJestConfig = nextJest({ dir: "./" });

/**
 * @type {import('@jest/types').Config.InitialOptions}
 **/
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  modulePathIgnorePatterns: ["<rootDir>/e2e/"],
  moduleNameMapper: { "src/(.*)": "<rootDir>/src/$1" }, 
};

module.exports = createJestConfig(customJestConfig);