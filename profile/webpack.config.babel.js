const webpack = require('webpack')

const config = {
  entry: './index',
  output: {
    filename: 'bundle.js',
    path: __dirname,
    publicPath: '/profile/'
  }
}

if (process.env.NODE_ENV !== 'production') {
  config.devServer = {
    inline: true,
    historyApiFallback: true,
    port: 3002,
    disableHostCheck: true
  }
}

module.exports = config
