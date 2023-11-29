const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: `${ path.join(__dirname, 'src') }/main.ts`,
    output: {
        filename: 'js/bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.s?css$/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true,
                    },
                },
            ],
        }, {
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }],
    },
    resolve: {
        extensions: ['.ts'],
        alias: {
            '@': path.join(__dirname, 'src'),
        },
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/index.css',
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: `${ path.join(__dirname, 'public') }/index.html`,
            scriptLoading: 'defer',
            favicon: 'public/assets/favicon.ico',
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'public/assets', to: 'assets' },
            ],
        }),
    ],
};