const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {  
  context: __dirname,
  entry: { main: ['./src/js/index.tsx'] },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js'
  },

  plugins: [
    new CleanWebpackPlugin(["./dist/"]),
    new CopyWebpackPlugin([
      {from: './src/images', to: 'images/'}
    ]),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader', options: { url: false, sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,  
        use: [{
            loader: 'url-loader',
            options: { 
                limit: 8000, // Convert images < 8kb to base64 strings
                name: './dist/images/[hash]-[name].[ext]'
            } 
        }]
      },
      { 
        test: /\.js$/, 
        loader: 'source-map-loader' 
      }
    ]
  },
  resolve: {
    modules: ['node_modules'],
    extensions: [ '.tsx', '.ts', '.js' ]
  }
}