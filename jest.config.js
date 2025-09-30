// jest.config.js
module.exports = {
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.[tj]sx?$": "babel-jest", // use babel-jest to transform JSX/TSX
    },
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
    moduleNameMapper: {
        "\\.(css|scss|sass)$": "identity-obj-proxy", // mock css modules
        "\\.(png|jpg|jpeg|svg|gif)$": "<rootDir>/__mocks__/fileMock.js",
    },
    transformIgnorePatterns: ["/node_modules/"],
};
