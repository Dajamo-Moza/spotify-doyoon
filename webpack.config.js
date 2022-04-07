const path = require('path');
const yaml = require('yamljs');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    print: './src/print.js'
  },
  devtool: 'inline-source-map',
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Output Management'
    })
  ],
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.yaml$/i,
        type: 'json',
        parser: {
          parse: yaml.parse,
        },
      },
      // {
      //   test: /\.jsx?$/,
      //   include: [
      //     path.resolve(__dirname, 'app')
      //   ],
      //   exclude: /node_modules/,
      //   loader: 'babel-loader',
      //   options: {
      //     preset: ['es2015']
      //   }
      // },
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.ts', '.tsx', '.css']
  },
  devServer: {
    static: path.join(__dirname, 'dist'), 
    compress: true, 
    historyApiFallback: true, 
    hot: true, 
    https: false, 
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        }
      }
    }
  }
}