var webpack = require('webpack')

var config = {
  entry: './index',
  output: {
    filename: 'bundle.js',
    path: __dirname,
    publicPath: '/login/'
  }
}

if (process.env.NODE_ENV !== 'production') {
  config.devServer = {
    inline: true,
    historyApiFallback: true,
    port: 3001,
    host: 'awesome.app'
  }
}

module.exports = config
