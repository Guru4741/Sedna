const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    plugins : [new HtmlWebpackPlugin({
        template: "./src/template.html"
    })],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader","css-loader","sass-loader"]
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },              
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                loader: "file-loader",                                  
                options: {
                    name: "[name].[ext]",
                    outputPath: 'img',
                    publicPath: 'img',
                    emitFile: true,
                    esModule: false
                }                                  
              }            
        ]
    }
}