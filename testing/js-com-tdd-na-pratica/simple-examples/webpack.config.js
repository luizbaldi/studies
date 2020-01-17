const webpack = require('webpack');

module.exports = {
  entry: {
    filename: './src/main.js'
  },
  output: {
    filename: './dist/build.js'
  },
  module: {
    loaders: [
      {
        test: '/\.js$/',
        exclude: '/node_modules/',
        loader: 'babel-loader',
        query: {
          presets: [
            ['es2015', { modules: false }]
          ]
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: { comments: false }
    })
  ]
}
