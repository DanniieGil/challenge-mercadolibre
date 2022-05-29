const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@context(.*)$': '<rootDir>/src/context$1',
    '^@pages(.*)$': '<rootDir>/src/pages$1',
    '^@commons(.*)$': '<rootDir>/src/components/commons$1',
    '^@services(.*)$': '<rootDir>/src/services$1',
    '^@hooks(.*)$': '<rootDir>/src/hooks$1',
    '^@tools(.*)$': '<rootDir>/src/tools$1',
    '^@mappers(.*)$': '<rootDir>/src/shared/mappers$1',
    '^@dtos(.*)$': '<rootDir>/src/shared/dtos$1',
    '^@styles(.*)$': '<rootDir>/src/styles$1',
    '^@utils(.*)$': '<rootDir>/src/utils$1',
  },
  testEnvironment: 'jest-environment-jsdom',
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
