var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: '',
  output: '',
  plugins: [],
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};