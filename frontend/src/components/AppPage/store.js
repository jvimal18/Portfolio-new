const state = {
  applications: [
    {
      name: "Tax Calculator FY 20-21",
      description:
        "Simple application to calculate tax payable as per New scheme proposed in Budget 2020",
      routerlink: "",
      githublink: "https://github.com/jvimal18/vue-typingapp",
      icon: "./static/icons/tax2.svg",
      techused: ['vue', 'html5', 'sass', 'js', 'python', 'css']
    },
    {
      name: "Tax Calculator FY 19-20",
      description:
        "Application to calculate tax payable for financial year 2019-2020",
      routerlink: "",
      githublink: "https://github.com/jvimal18/vue-typingapp",
      icon: "./static/icons/tax.svg",
      techused:['vue', 'html5', 'sass', 'js']
    },
    {
      name: "TicTacToe",
      description: "Lets have some fun beat me if you can !!!",
      routerlink: "",
      githublink: "",
      icon: "./static/icons/tictactoe.svg",
      techused: ['vue']
    },
    {
      name: "Flames",
      description: "Discover your relationship with your loved ones..",
      routerlink: "/apps/flames",
      githublink: "",
      icon: "./static/icons/flames.svg",
      techused: ['vue', 'python', 'css']
    },
    {
      name: "TypeIT",
      description: "Test your speed of typing",
      routerlink: "/apps/typinggame",
      githublink: "",
      icon: "./static/icons/typeit.svg",
      techused: ['vue']
    }
  ]
};

const getters = {
  applications: (state) => state.applications 
};

const actions = {
  // async fetchQuote({ commit }) {
  //   await fetch(RANDOM_QUOTE_API_URL).then(res => {
  //     if (res.ok) {
  //       res.json().then(data => {
  //         commit("setcurrentQuoteRes", data); // commit data -> commit (<mutation func name>, <data>)
  //         commit("setQuoteLength", data.quote.length);
  //       });
  //     } else {
  //       console.log("Error");
  //     }
  //   });
  // }
};

const mutations = {
  //   setcurrentQuoteRes: (state, data) => { state.currentQuoteRes = data },
};

export default {
  state,
  getters,
  actions,
  mutations
};
