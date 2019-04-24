var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.join(__dirname, 'src/index.html')
  })]
};
