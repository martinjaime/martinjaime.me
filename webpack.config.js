const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const isDev = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: [path.join(__dirname, 'src', 'index.tsx')],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader',
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: isDev
                ? '[name]_[local]__[hash:base64:5]'
                : '[hash]',
            },
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['./src/helpers/global-styles'],
            },
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
      {
        test: /\.svg$/,
        use: {
          loader: 'svg-react-loader',
        },
      },
    ],
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
  },
}
