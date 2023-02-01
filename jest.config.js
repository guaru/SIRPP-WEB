module.exports = {
    cacheDirectory: '<rootDir>/node_modules/jest-test-cache',
    moduleNameMapper: {
      '^@sicatel/store/(.*)': '<rootDir>/src/app/store/$1',
      '^@sicatel/configs/(.*)': '<rootDir>/src/app/configs/$1',
      '^@sicatel/env/(.*)': '<rootDir>/src/environments/$1',
      '^@sicatel/core/(.*)': '<rootDir>/src/app/core/$1',
      '^@sicatel/modules/(.*)': '<rootDir>/src/app/modules/$1',
      '^@sicatel/shared/(.*)': '<rootDir>/src/app/shared/$1',
      '^@sicatel/tests/(.*)': '<rootDir>/src/tests/$1'
    },
    modulePaths: ["<rootDir>"],
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts', 'jest-canvas-mock'],
    verbose: true,
    collectCoverage: true,
    coverageThreshold: {
      'global': {
        'branches': 100,
        'functions': 100,
        'lines': 100,
        'statements': 100
      }
    },
    coverageDirectory: 'coverage/SicatelWeb',
    coverageReporters: [["json", {file: 'coverage.json'}], "lcov", "text"],
    coveragePathIgnorePatterns: [
      "/node_modules/",
      "<rootDir>/src/app/configs",
      "<rootDir>/src/tests/configs"
    ],
    transformIgnorePatterns: [
      "<rootDir>/node_modules/(?!ngx-extended-pdf-viewer|exceljs|uuid/).+\\.js$"
    ]
  };