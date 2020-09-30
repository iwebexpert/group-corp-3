const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Dotenv = require('dotenv-webpack')
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

require('dotenv').config()

const devMode = process.env.NODE_ENV === 'development'

const APP_ = /^APP_/i;
const stringified = {
    'process.env': Object.keys(process.env)
        .filter(key => APP_.test(key))
        .reduce((env, key) => {
            env[key] = JSON.stringify(process.env[key]);
            return env;
        }, {}),
}

module.exports =  {
    entry: {
        app: path.join(__dirname, 'src', 'index.tsx'),
        bootstrap: path.join(__dirname, 'src', 'bootstrap.tsx')
    },

    //webpack5
    // entry: {
    //     app: {import: path.join(__dirname, 'src', 'index.tsx'), dependOn: 'bootstrap'},
    //     bootstrap: path.join(__dirname, 'src', 'Bootstrap.tsx'),
    // },

    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                react: {
                    automaticNamePrefix: 'react'
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors'
                }
            }
        }
    },

    output: {
        publicPath: "/",
        path: path.join(__dirname, 'build'),
        filename: '[name].bundle.js',
    },

    devtool: devMode ? 'eval-source-map' : 'source-map',

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
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-typescript', '@babel/preset-env', '@babel/preset-react'],
                        plugins: ['@babel/plugin-proposal-class-properties', 'react-hot-loader/babel'],
                    }
                }
            },
            // {
            //     test: /\.tsx?$/,
            //     loader: "ts-loader",
            // },
            {
                test: /\.s?css$/i,
                use: [
                    'style-loader',
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: true,
                            reloadAll: true
                        }
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,

                            fallback: 'file-loader',
                            outputPath: 'images',
                            name: devMode ? '[path][name].[ext]' : '[hash].[ext]',
                        },
                    },
                ],
            },
            {
                test: /\.(ttf|otf|woff|woff2)$/i,
                use: [
                    'file-loader'
                ]
            }
        ]
    },

    plugins: [
        /**
         * All files inside webpack's output.path directory will be removed once, but the
         * directory itself will not be. If using webpack 4+'s default configuration,
         * everything under <PROJECT_DIR>/dist/ will be removed.
         * Use cleanOnceBeforeBuildPatterns to override this behavior.
         *
         * During rebuilds, all webpack assets that are not used anymore
         * will be removed automatically.
         *
         * See `Options and Defaults` for information
         */
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src',  'index.html'),
            filename: 'index.html',
            titleApp: 'The messenger App',
        }),
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].main.css' : '[name].[hash].css',
            chunkFileName: devMode ? '[id].main.css' : '[id].[hash].css'
        }),
        //new Dotenv(),
        new webpack.DefinePlugin(stringified),
    ],
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        compress: true,
        publicPath: '/',
        contentBase: path.join(__dirname, 'src')
    },
}
