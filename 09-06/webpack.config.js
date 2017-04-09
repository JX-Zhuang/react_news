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
                    // plugins: [
                    //     ["import", {
                    //         libraryName: "antd",
                    //         style: "css"
                    //     }] // `style: true` 会加载 less 文件
                    // ]
                }
            },
            {
                test: /\.css?$/,
                // exclude: /(node_modules)/,
                loader: "style-loader!css-loader"
                // loader: "style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]"
                // query:{
                //   plugins:["import", { libraryName: "antd", style: "css" }] // `style: true` 会加载 less 文件
                // }
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
