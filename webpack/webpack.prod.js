module.exports = {
    mode: 'production',
    devtool: false,
    optimization: {
        splitChunks: {
          minSize: 10000,
          maxSize: 250000
        }
    }
}