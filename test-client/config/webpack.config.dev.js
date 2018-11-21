const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 3000;

module.exports = {
    // webpack 설정 부분
    mode: 'development',
      output: {
        filename: 'bundle.[hash].js'
    },
    test: /\.(js|jsx)$/,
    include: paths.appSrc,
    loader: require.resolve('babel-loader'),
    options: {
        plugins: ['react-hot-loader/babel'],
        // This is a feature of `babel-loader` for webpack (not Babel itself).
        // It enables caching results in ./node_modules/.cache/babel-loader/
        // directory for faster rebuilds.
        cacheDirectory: true,
    },
    entry: [
        require.resolve('react-dev-utils/webpackHotDevClient'),
        require.resolve('./polyfills'),
        require.resolve('react-error-overlay'),
        'react-hot-loader/patch',
        paths.appIndexJs,
    ],
    resolve: {
        modules: [
            path.join(__dirname, "src"),
            "node_modules"
        ]
    }
};