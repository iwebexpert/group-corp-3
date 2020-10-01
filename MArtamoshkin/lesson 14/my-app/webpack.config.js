const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Dotenv = require('dotenv-webpack')
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const webpack = require('webpack');

require('dotenv').config()

const devMode = process.env.NODE_ENV === 'development'

const APP = /^APP_/i;
const env = Object.keys(process.env)
    .filter(key => APP.test(key))
    .reduce((env, key) => {
        env[key] = process.env[key];
        return env;
    }, {});

const config = (devMode) => {
    return { 
        entry: path.join(__dirname, 'src', 'index.tsx'),

        output: {
            path: path.join(__dirname, 'build'),
            publicPath: '/',
            filename: 'bundle.js',
        },

        optimization: {
            runtimeChunk: 'single',
            splitChunks: {
                chunks: 'all',
                cacheGroups: {
                    react: {
                        automaticNamePrefix: 'react',
                    },
                    bootstrapVendor: {
                        test: /[\\/]node_modules[\\/](react-bootstrap)[\\/]/,
                        name: "bootstrap-vendor"
                    },
                    vendor: {
                        test: /[\\/]node_modules[\\/](!react-bootstrap)[\\/]/,
                     name: "vendor"
                   },
                },
            }
        },

        resolve: {
            extensions: ['.ts', '.tsx', '.js'],
            alias: {
                components: path.join(__dirname, 'src', 'components'),
            },
        },

        module: {
            rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ['@babel/plugin-proposal-class-properties'],
                    }
                }
            },
            { 
                test: /\.tsx?$/, 
                loader: "ts-loader",
            },
            {
                test: /\.s?css$/i,
                use: [
                    'style-loader',
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: true,
                            reloadAll: true,
                        },
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg)(\?.*)?$/,
                use:                   {
                    loader: 'url-loader',
                    options: {
                      limit: 25192,

                      fallback: 'file-loader',
                      name: devMode ? '[path][name].[ext]' : '[contenthash].[ext]',
                      outputPath: 'images',
                    },
                  },
              },
              {
                test: /\.(ttf|otf|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                        include: path.resolve(__dirname, './font'),

                        }
                    },
                ],
            },
            ]
        },

        plugins: [
            new HtmlWebpackPlugin({
                template: path.join(__dirname, 'public',  'index.html'),
            }),
            new MiniCssExtractPlugin({
                filename: devMode ? 'main.css' : '[name].[hash].css',
            }),
            new InterpolateHtmlPlugin(HtmlWebpackPlugin, env),
            new webpack.DefinePlugin(env)
        ],
        devServer: {
            proxy: {
                "/api": {
                    target: 'http://localhost:4000/',
                    changeOrigin: true,
                    secure: false,
                    pathRewrite:{
                        '^/api/*': '',
                    }
                }
            },
            historyApiFallback: true,
        },
    }
}

module.exports = (env, argv) => {
    return config(argv.mode === 'development')
}