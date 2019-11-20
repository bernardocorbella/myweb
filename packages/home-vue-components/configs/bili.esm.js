module.exports = {
  input: 'src/index.js',
  output: {
    format: 'esm',
    extractCSS: false,
  },
  plugins: {
    vue: {
      css: false
    }
  }
}

