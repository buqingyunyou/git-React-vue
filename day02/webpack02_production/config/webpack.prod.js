const {
  resolve
} = require('path')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'js/[name].[contenthash:8].js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
    publicPath: '/'
  },
  module: {
    rules: [{

    }, ],

  },
  plugins: [

  ],
  mode: "production",
}