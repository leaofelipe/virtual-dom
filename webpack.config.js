const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = ({ mode = 'development' }) => ({
  mode,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: 'src/template.html' })],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 8080
  }
})
