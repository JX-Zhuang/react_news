/**
 * Created by Jesse on 17/3/29.
 */
var webpack = require("webpack");
var path = require("path");
module.exports = {
    context: __dirname + "/src",
    entry: "./js/root.js",
    module: {
        loaders: [{
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015"],
                    plugins: ["react-html-attrs"]
                }
            },
            {
                test: /\.css?$/,
                loader: "style-loader!css-loader"
            }
        ]
    },
    output: {
        path: __dirname + "/src/",
        publicPath: "/src/", //热更新
        filename: "bundle.js"
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        port: 8080
    }
};
