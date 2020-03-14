import Vue from 'vue'
import './plugins/axios'
import './plugins/fontawesome'
import App from './App.vue'
import router from './router'
import store from './store'

import './plugins/_globalcomponents'

// eslint-disable-next-line
Vue.prototype.$eventbus = new Vue();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
