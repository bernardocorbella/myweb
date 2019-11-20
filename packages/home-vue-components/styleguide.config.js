module.exports = {
  webpackConfig: require('./configs/webpack.js'),
  components: 'src/components/**/*.vue',
  require: ['@bernardocorbella/home-tokens/dist/css/tokens.css']
}
