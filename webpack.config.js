const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;

module.exports = {
  mode,
  target,
  devtool,
  devServer: {
    port: 3000,
    open: true,
    hot: true,
  },
  entry: ['@babel/polyfill', path.resolve(__dirname, 'src/js/', 'index.js')],
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'assets/[name][ext]',
  },
  module: {
    rules: [{
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.css$/i,
        use: [
            devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    require('postcss-preset-env'),
                    'autoprefixer',
                  ],
                },
              },
            },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext]',
        },
      },
      {
        oneOf: [
          {
            test: /sprite\.svg$|antools\.ico$/i,
            type: 'asset/resource',
            generator: {
              filename: '[name][ext]',
            },
          },
          {
            test: /\.(jpe?g|png|webp|gif|svg)$/i,
            use: devMode
              ? []
              : [
                  {
                    loader: 'image-webpack-loader',
                    options: { mozjpeg: { progressive: true },
                      optipng: { enabled: false },
                      pngquant: { quality: [0.65, 0.90] },
                      gifsicle: { interlaced: false },
                      webp: { quality: 75 }
                    }
                  }
              ],
            type: 'asset/resource',
            generator: {
              filename: 'assets/[name][ext]',
            },
          },
        ],
      },
      {
        test: /\.m?js$/i,
        exclude: /(node_modules|src)/,
        use: {
          loader: 'babel-loader',
          options: {
            targets: "defaults",
            presets: [['@babel/preset-env']]
          },
        },
      },
    ],
  },
  optimization: {
    minimize: !devMode,
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html')
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new BundleAnalyzerPlugin()
  ],
};