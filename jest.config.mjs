/* eslint-disable import/extensions */
/* eslint-disable max-len */
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.jest.json",
    },
  },
  preset: "ts-jest",
  verbose: true,
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // Adjust the path accordingly
  },
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  transformIgnorePatterns: ["/node_modules/", "\\.css$"],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.ts",
    "src/**/*.tsx",
    "!src/**/__tests__/**", // Exclude test files
    "!src/**/?(*.)+(spec|test).[jt]s?(x)", // Exclude spec and test files
  ],
  coverageReporters: ["text", "lcov", "clover"],
  coverageThreshold: {
    global: {
      branches: 99,
      functions: 99,
      lines: 99,
      statements: 99,
    },
  },
  testEnvironment: "jest-environment-jsdom",
  
};

// Example jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
};


// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
