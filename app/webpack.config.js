const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const path = require('path');
const webpack = require('webpack');


module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/",
        filename: 'js/app.bundle.js'
    },

    module: {
      rules: [
          {
              test: /\.css/,
              use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: [
                      {
                          loader: "css-loader",
                          options: {
                              minimize: true
                          }
                      }
                  ]
              })
          },
          {
              test: /\.(png|woff|woff2|eot|ttf|svg)$/,
              use: [
                  {
                      loader: 'file-loader',
                      options: {
                          name: '[name].[ext]',
                          outputPath: 'fonts/'
                      }
                  }
              ]
          },

          {
              test: /\.vue$/,
              loader: 'vue-loader',
              options: {
              }
          }
      ]
    },
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
        publicPath: '/',
        compress: true,
        port: 9000
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Took the Food | Доставка еды и напитков по Минску и Минской области",
            filename: "index.html",
            template: 'src/index.html'
        }),
        new ExtractTextPlugin('css/main.css'),
        new FriendlyErrorsWebpackPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
};