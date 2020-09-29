const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

require('dotenv').config();

const config = (devMode) => {
  return {
    entry: path.join(__dirname, 'src', 'index.tsx'),

    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          react: {
            automaticNamePrefix: 'react',
          },
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
          },
        },
      },
    },

    output: {
      publicPath: '/',
      path: path.join(__dirname, 'build'),
      filename: 'bundle.js',
    },

    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      alias: {
        'react-dom': '@hot-loader/react-dom',
        components: path.join(__dirname, 'src', 'components'),
      },
    },

    module: {
      rules: [
        {
          test: /\.[jt]sx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-typescript',
                '@babel/preset-env',
                '@babel/preset-react',
              ],
              plugins: [
                '@babel/plugin-proposal-class-properties',
                'react-hot-loader/babel',
              ],
            },
          },
        },
        {
          test: /\.s?css$/i,
          use: [
            'style-loader',
            {
              loader: MiniCssExtractPlugin.loader,
              options: { hmr: true, reloadAll: true }, // For HMR
            },
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(png|jpg|gif)$/i,
          use: [
            {
              loader: 'url-loader', // Transforms image to Base64 and embeds ti bundle
              options: {
                limit: 8192, // Limits image size

                fallback: 'file-loader', // Use file loader if image is big
                name: devMode ? '[path][name].[ext]' : '[contenthash].[ext]',
                outputPath: 'images', // Use file loader if image is big
              },
            },
          ],
        },
        {
          test: /\.(ttf|otf|woff|woff2)$/,
          use: ['file-loader'],
        },
      ],
    },

    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src', 'index.html'),
        filename: 'index.html',
        titleApp: 'Chat App',
      }),
      new MiniCssExtractPlugin({
        filename: devMode ? '[name].css' : '[name].[hash].css',
        chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
      }),
      new Dotenv(),
    ],

    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      compress: true,
      publicPath: '/',
      contentBase: path.join(__dirname, 'src'),
    },
  };
};

module.exports = (env, argv) => {
  return config(argv.mode === 'development');
};
