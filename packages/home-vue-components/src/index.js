import TestTitle from './components/TestTitle/TestTitle.vue'

export {
  TestTitle
}

export default {
  install(Vue) {
    Vue.component('test-title', TestTitle)
  },
}
