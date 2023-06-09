const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = (envVars) => {
    const {env} = envVars;
    const config = require(`./webpack.${env}.js`);
    const finalConfig = merge(commonConfig, config);
    return finalConfig;
}