import Vue from 'vue'
import Vuex from 'vuex'
import Quotes from '@/apps/TypingGame/store'
import AppPage from '@/components/AppPage/store'
import Blog from '@/apps/blog/store'
import personalDetails from './modules/personal_details'
import credits from './modules/credits'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAdmin: false
  },
  getters: {
  },
  actions: {
  },
  mutations: {
    setIsAdmin: (state, bool) => state.isAdmin = bool
  },
  modules: {
    Quotes,
    AppPage,
    personalDetails,
    Blog,
    credits
  }
})
