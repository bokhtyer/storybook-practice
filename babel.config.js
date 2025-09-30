// babel.config.js
module.exports = {
    presets: [
        // target current Node for Jest transforms
        ["@babel/preset-env", { targets: { node: "current" } }],
        // use automatic runtime for React 17+; use 'classic' if you rely on React.createElement
        ["@babel/preset-react", { runtime: "automatic" }],
    ],
};
