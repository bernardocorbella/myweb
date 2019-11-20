module.exports = {
  input: 'src/index.js',
  output: {
    extractCSS: false,
    format: 'cjs',
  },
  plugins: {
    vue: {
      template: {
        optimizeSSR: true,
      },
    },
  },
}
