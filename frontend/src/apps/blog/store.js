import Vue from 'vue'

const state = {
    blogMeta: [],
    categories: []
  };
  
  const getters = {
    blogMeta: (state) => state.blogMeta,
    categories: (state) => state.categories
  };
  
  const actions = {
    async getBlogMeta({ commit, dispatch }) {
      await Vue.axios.get("getblogmeta").then((response) => {
        commit("setBlogMeta", response.data);
        dispatch('genCategories')
      })
    },
    genCategories({state, commit}) {
      let categories = []

      Object.keys(state.blogMeta).forEach(function(k){
        categories.push({ id: k, name:state.blogMeta[k].name })
      });

      commit('setCategories', categories)
    }
  };
  
  const mutations = {
    setBlogMeta: (state, object) => { state.blogMeta = object },
    setCategories: (state, array) => { state.categories = array }
  };
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  };
  