const path = require("path");

module.exports = {
    entry: {
        game: "./src/game/client/index.tsx",
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
            { test: /\.tsx?$/, loader: "awesome-typescript-loader", exclude: path.resolve(__dirname, "./node_modules") },
            { test: /\.jsx?$/, loader: "awesome-typescript-loader", exclude: path.resolve(__dirname, "./node_modules") },
            { test: /\.css$/, use: [ "style-loader", "css-loader" ] },
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: "url-loader" }
        ]
    }
}