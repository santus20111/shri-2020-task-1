const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: __dirname,
    devtool: "source-map",
    entry: "./scripts/script.js",
    output: {
        path: __dirname + "/../build",
        filename: "script.js"
    },
    module:{
        rules: [
            {
                test: /\.css$/i,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "postcss-loader"]
                })
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin({filename: 'style.css'})
    ],
    devServer: {
        port: 9000,
        hot: true
    }
}
