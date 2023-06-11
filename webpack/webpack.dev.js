
const ReactRefresh = require('@pmmmwh/react-refresh-webpack-plugin');
module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        port: 3000,
        hot: true
    },
    plugins: [
        new ReactRefresh()
    ]
}