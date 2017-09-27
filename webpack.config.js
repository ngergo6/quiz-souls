const path = require("path");

module.exports = {
    entry: {
        game: "./src/game/client/index.jsx",
        overlay: "./src/overlay/client/index.js"
    },
    output: {
        filename: "[name]/public/dist/bundle.js",
        path: path.resolve(__dirname, "./src")
    },
    devtool: "source-map",
    plugins: [],
    resolve: {
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { test: /\.jsx?$/, loader: "awesome-typescript-loader" }
        ]
    }
}