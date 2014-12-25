module.exports = {
    context: __dirname,
    entry: "./index.html",
    output: {
        path: __dirname
        },
        module: {
        loaders: [
            { test: /\.html$/, loader: "file-loader" }
        ]
    }
}