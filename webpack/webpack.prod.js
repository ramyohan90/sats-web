module.exports = {
    mode: 'production',
    devttool: false,
    optimization: {
        splitChunks: {
          minSize: 10000,
          maxSize: 250000
        }
    }
}