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
    plugins: [],
    resolve: {
        extensions: [".js", ".jsx", ".json"]
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ["react"]
                }
            }
        ]
    }
}