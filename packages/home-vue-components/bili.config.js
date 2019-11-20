module.exports = {
  input: {
    file: 'src/index.js',
  },
  output: {
    format: 'cjs',
    file: 'dist/index.esm.js',
  },
  plugins: {
    vue: {
      css: false,
    }
  },
}
