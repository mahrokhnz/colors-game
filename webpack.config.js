const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  devtool: 'source-map',

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'docs'),
    clean: true,
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.*'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Mahrokh Nabizadeh | Colors Game',
      template: path.resolve(__dirname, './index.html')
    }),

    new MiniCssExtractPlugin(),

    new CopyPlugin({
      patterns: [
        {
          from: 'src',
          to: '.'
        }
      ],
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [ 'style-loader', 'css-loader' ]
      },

      {
        test: /\.[tj]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            configFile: path.resolve(__dirname, 'babel.config.js')
          }
        }
      },

      // {
      //   test: /\.svg$/i,
      //   issuer: /\.[jt]sx?$/,
      //   use: ['@svgr/webpack'],
      // },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },

      {
        test: /\.(png|svg|jp?g|gif|pdf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images'
            }
          }
        ]
      }
    ],
  },
};