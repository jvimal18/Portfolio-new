const state = {
    blogmetadata: [
        {
            id: 1,
            title: 'About Me',
            description: 'Irure laboris laborum mollit minim deserunt incididunt Lorem ea ipsum.',
            link: '',
            posted: '18 Jan 2020',
            views: 2
        },
        {
            id: 2,
            title: 'About Me',
            description: 'Ad aliqua amet magna labore.',
            link: '',
            posted: '18 Jan 2020',
            views: 3
        },
        {
            id: 3,
            title: 'About Me',
            description: 'Consequat consequat voluptate enim ut labore est.Veniam quis Lorem qui nisi magna cupidatat aliqua nostrud consectetur ipsum do excepteur sit deserunt.',
            link: '',
            posted: '20as Jan 2020',
            views: 100000
        }
    ]
  };
  
  const getters = {
    blogmetadata: (state) => state.blogmetadata 
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
  