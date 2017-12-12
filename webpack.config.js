
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})

const config = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve('build')
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    plugins: [HtmlWebpackPluginConfig]
}

module.exports = config;