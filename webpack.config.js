const webpack = require('webpack');
const path = require('path');

module.exports = {

  entry: './src/index.js',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },

  module: {
    rules: [
      {
        test: [/\.vert$/, /\.frag$/],
        use: 'raw-loader',
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        use: 'file-loader',
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new webpack.DefinePlugin({
      CANVAS_RENDERER: JSON.stringify(true),
      WEBGL_RENDERER: JSON.stringify(true),
    }),
  ],

};