import Vue from 'vue'

const state = {
  applications: []
};

const getters = {
  applications: (state) => state.applications 
};

const actions = {
  async get_applications({commit}) {
    await Vue.axios.get("projects").then((response) => {
        commit("setapplications", response.data);
    })
  },
};

const mutations = {
    setapplications: (state, data) => { state.applications = data },
};

export default {
  state,
  getters,
  actions,
  mutations
};
