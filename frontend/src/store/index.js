import Vue from 'vue'
import Vuex from 'vuex'
import Quotes from '@/apps/TypingGame/store'
import AppPage from '@/components/AppPage/store'
import Blog from '@/apps/blog/store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Quotes,
    AppPage,
    Blog
  }
})
