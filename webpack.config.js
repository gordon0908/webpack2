var webpack = require('webpack');
var path = require('path');
var HTMLPlugin = require('html-webpack-plugin');

var VENDOR_LIBS = [
      'faker', 'lodash', 'react', 'react-dom', 'react-router', 'react-input-range',
      'redux', 'react-redux', 'redux-form', 'redux-thunk'
    ];

module.exports = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HTMLPlugin({
      template: './templates/index.html'
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    })
  ]
};
