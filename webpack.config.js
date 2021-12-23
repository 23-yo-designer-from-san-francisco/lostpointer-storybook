const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const packageConfig = require('./package.json');

const src = path.join(__dirname, 'src');

module.exports = {
    mode: "development",
    entry: './src/index.ts',
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: 'uikit.js',
        library: packageConfig.name,
        libraryTarget: 'umd',
    },
    resolve: {
        alias: {
            components: path.join(src, 'components'),
            forms: path.join(src, 'forms'),
            tokens: path.join(__dirname, 'tokens'),
        },
        extensions: ['.js', '.ts'],
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader',
            },
            {
                test: /\.ts$/,
                exclude: path.resolve(__dirname, './node_modules'),
                use: 'ts-loader',
            },
            {
                test: /\.(jpg|jpeg|png|svg|ico)$/,
                loader: 'file-loader',
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new StylelintPlugin({
            configFile: './.stylelintrс',
            extensions: ['css', 'scss', 'sass'],
        }),
        new MiniCssExtractPlugin({ filename: 'uikit.css' }),
        new CleanWebpackPlugin()
    ],
    optimization: {
        minimize: true,
    },
}
