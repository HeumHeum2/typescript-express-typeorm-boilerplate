module.exports = {
  preset: "ts-jest",
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json",
    },
  },
  moduleFileExtensions: ["ts", "tsx", "js", "node", "json"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  testMatch: ["**/test/**/*.test.(ts|js|tsx)"],
  testEnvironment: "node",
};
