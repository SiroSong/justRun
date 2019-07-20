const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = (env, args) => ({
  entry: './src/app.tsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: "/"
  },
  module: {
    rules: [
      { test: /\.(ts|tsx)$/, loaders: ['ts-loader'] },
      { test: /\.(js|jsx)$/, use: [{ loader: "babel-loader", options: { compact: false } }]},
      { 
        test: /\.css$/, 
        use: [ 
          'style-loader',
          {
            loader: "css-loader",
          } 
        ],
      }
    ]
  },
  mode: "development",
  devServer: {
    hot: true,
    historyApiFallback: true
    // noInfo: true,
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin()
  ],
  resolve: {
    // 首先寻找模块中的 .ts(x) 文件, 然后是 .js 文件
    extensions: ['.ts', '.tsx', '.js'],

    // 在模块中添加 src, 当你导入文件时，可以将 src 作为相关路径
    modules: ['src', 'node_modules'],
  },
})