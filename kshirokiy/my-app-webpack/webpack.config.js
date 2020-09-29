const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
require('dotenv').config({path: __dirname + '/dev.env'});

const Dotenv = require('dotenv-webpack');
const devMode = process.env.NODE_ENV === 'development';

console.log(process.env.NODE_ENV);
console.log(process.env.APP_NAME);
console.log(process.env.test);

fs.readFile(__dirname + '/dev.env', {encoding: 'utf-8'}, function(err, data) {
    if (err) throw error;
    let dataArray = data.split('\n');
    const searchKeyword = 'APP';
    for (let index = 0; index < dataArray.length; index++) {
        if (!dataArray[index].startsWith(searchKeyword)) {
            dataArray.splice(index, 1);
        }
    }
    const updatedData = dataArray.join('\n');
    fs.writeFile(__dirname + '/dev_app.env', updatedData, (err) => {
        if (err) throw err;
    });
});

module.exports = {
    entry: {
        app: path.join(__dirname, 'src', 'index.tsx'),
        commonAndBootstrap: path.join(__dirname, 'src', 'Bootstrap.tsx')
    },
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
        }
    },
    output: {
        publicPath: '/',
        path: path.join(__dirname, 'build'),
        filename: '[name].bundle.js',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
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
                        presets: ['@babel/preset-env', "@babel/preset-react"],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
            },
            {
                test: /\.(sass|less|css|scss)$/,
                loaders: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
                use: [ 'file-loader'],
            },
            {
                test: /\.(jpe?g|gif|png|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10192,
                            esModule: false,
                            fallback: 'file-loader',
                            name: devMode ? '[path][name].[ext]' : '[contenthash].[ext]',
                            outputPath: 'images',
                        },
                    },
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src',  'index.html'),
            filename: 'index.html',
            titleApp: 'The messenger App',
        }),
        new MiniCssExtractPlugin({
            filename: devMode ? 'main.css' : '[name].[hash].css'
        }),
        new Dotenv({path: __dirname + '/dev_app.env'}),
    ],
    devServer: {
        historyApiFallback: true,
    },
}
