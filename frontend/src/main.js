import Vue from 'vue'
import './plugins/axios'
import './plugins/fontawesome'
import App from './App.vue'
import router from './router'
import store from './store'
import { gsap } from 'gsap'

import './plugins/_globalcomponents'

Vue.directive('title', {
  // eslint-disable-next-line
  inserted: (el, binding) => document.title = binding.value,
  // eslint-disable-next-line
  update: (el, binding) => document.title = binding.value
})

// eslint-disable-next-line
Vue.prototype.$eventbus = new Vue();

Vue.prototype.$gsap = gsap;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
