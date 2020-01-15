module.exports = {
    context: __dirname,
    devtool: "source-map",
    entry: "./scripts/script.js",
    output: {
        path: __dirname + "/build",
        filename: "script.js"
    },
    module:{
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ]
    },
    devServer: {
        port: 9000,
        hot: true
    }
}
