import Vue from 'vue'

const state = {
    siteCredits: undefined
  };
  
  const getters = {
    siteCredits: (state) => state.siteCredits,
  };
  
  const actions = {
    async get_site_credits({commit}) {
        await Vue.axios.get("credits").then((response) => {
            commit("setSiteCredits", response.data);
        })
    },
  };
  
  const mutations = {
    setSiteCredits: (state, data) => { state.siteCredits = data },
  };
  
  export default {
    state,
    getters,
    actions,
    mutations
  };
  