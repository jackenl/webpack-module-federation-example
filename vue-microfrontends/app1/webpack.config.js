const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container
const { VueLoaderPlugin } = require('vue-loader')
const path = require('path')

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    publicPath: 'auto',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 3000,
    quiet: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env'],
        },
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: 'app1',
    }),
    new CleanWebpackPlugin(),
    new ModuleFederationPlugin({
      name: 'app1',
      shared: {
        vue: {
          singleton: true,
        },
        'vue-router': {
          singleton: true,
        },
      },
    }),
  ],
}
