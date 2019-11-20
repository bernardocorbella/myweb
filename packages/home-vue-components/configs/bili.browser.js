module.exports = {
  input: 'src/index.js',
  output: {
    format: 'iife',
  },
  plugins: {
    vue: {
      css: false,
    },
  },
}
