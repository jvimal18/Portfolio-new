import Vue from 'vue'

const state = {
    companies: [],
    personalDetails: {},
    skillCatagories: [],
    socialMedia: [],
    icon: {
      linkedin: ["fab", "linkedin-in"],
      github: ["fab", "github-alt"],
      telegram: ["far", "paper-plane"],
      reddit: ["fab", "reddit-alien"]
    }
  };
  
  const getters = {
    companies: (state) => state.companies,
    personalDetails: (state) => state.personalDetails,
    skillCatagories: (state) => state.skillCatagories,
    icon: (state) => state.icon,
    socialMedia: (state) => state.socialMedia
  };
  
  const actions = {
    async get_companies({commit}) {
        await Vue.axios.get("getcompanydetails").then((response) => {
            commit("setcompanies", response.data);
        })
    },
    async get_personal_details({commit}) {
      await Vue.axios.get("getpersonaldetails").then((response) => {
          commit("setPersonalDetails", response.data);
      })
    },
    async get_skill_catagories({commit}) {
      await Vue.axios.get("getskills").then((response) => {
          commit("setSkillCatagories", response.data);
      })
    },
    async get_social_media({commit}) {
      await Vue.axios.get("socialmedia").then((response) => {
          commit("setSocialMedia", response.data);
      })
    },
  };
  
  const mutations = {
    setcompanies: (state, data) => { state.companies = data },
    setPersonalDetails: (state, data) => { state.personalDetails = data},
    setSkillCatagories: (state, data) => { state.skillCatagories = data},
    setSocialMedia: (state, data) => { state.socialMedia = data}
  };
  
  export default {
    state,
    getters,
    actions,
    mutations
  };
  