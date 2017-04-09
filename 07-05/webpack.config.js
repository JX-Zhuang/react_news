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
                presets: ["react", "es2015"]
            }
        }]
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
        publicPath:"/src/",
        filename: "bundle.js"
    },
    devServer:{
      historyApiFallback: true,
      hot:true,
      inline:true,
      port:8080
    }
};
