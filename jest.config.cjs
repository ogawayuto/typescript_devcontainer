const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig");
/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
    modulePaths: ["<rootDir>"],
    testMatch: ["<rootDir>/test/**/*.test.ts?(x)"],
    transform: {
        "^.+.tsx?$": ["ts-jest", {}],
    },
};
