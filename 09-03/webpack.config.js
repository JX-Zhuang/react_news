/**
 * Created by Jesse on 17/3/29.
 */
var webpack = require("webpack");
var path = require("path");
module.exports = {
    context: __dirname + "/src",
    entry: "./js/index.js",
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
                loader: "style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]"
            }
        ]
        // rules:[{
        //     test:/\.js?$/,
        //     exclude:/(node_modules)/,
        //     use:[
        //         {
        //             loader:"babel-loader",
        //             options:{
        //                 presets:["react","es2015"]
        //             }
        //         }
        //     ]
        // }]
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
