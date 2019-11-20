import Vue from 'vue'
import HomeVueComponents from '@bernardocorbella/home-vue-components/dist/index.esm.js'

import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'


Vue.config.productionTip = false

Vue.use(HomeVueComponents)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
