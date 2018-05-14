const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const DEV = process.env.NODE_ENV !== 'production';
const dist = path.resolve(__dirname, './public');

module.exports = {
  mode: DEV ? 'development' : 'production',
  devtool: 'cheap-module-source-map',
  entry: {
    app: ['./src/js/app.js'],
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, dist),
    sourceMapFilename: '[name].map',
  },

  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.css$/,
        use: [
          DEV ? 'style-loader' : MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};
