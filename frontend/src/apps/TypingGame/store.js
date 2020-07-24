const RANDOM_QUOTE_API_URL = 'http://quotes.stormconsultancy.co.uk/random.json'

const state = {
    currentQuoteRes: {
        author: "",
        id: 0,
        quote: "",
        permalink: "",
      },
    quoteLength: 0,
    startGame: false,
    score: 0,
    startTime: new Date(),
    quoteHtmlElement: HTMLElement,
}

const getters = {
  currentQuoteRes: (state) => state.currentQuoteRes,
  getQuoteLength: (state) => state.quoteLength,
  getcurrentQuote: (state) => state.currentQuoteRes.quote.replace("’", "'"),
  getQuoteHtmlElement: (state) => state.quoteHtmlElement,
  getscore: (state) => state.score,
}

const actions = {
  async fetchQuote({ commit }) {
    await fetch(RANDOM_QUOTE_API_URL)
      .then(res => {
          if (res.ok) {
              res.json().then( data => { 
                  commit( 'setcurrentQuoteRes', data ) // commit data -> commit (<mutation func name>, <data>) 
                  commit( 'setQuoteLength', data.quote.length)
                })
          } else {
              // console.log('Error')
          }
      })
  },
  resetTimer({commit}) {
    commit('setStartTime', new Date())
  },  

  resetGame({ commit, dispatch }, flag=true) {
    if (flag) { dispatch('fetchQuote') }
    commit('setScore', 0)
    commit('setStartTime', new Date())
  },
  endGame({commit, dispatch}) {
    // dispatch('resetGame', false)
    dispatch('resetGame')
    commit('setStartGame', false)
  }
}

const mutations = {
  setcurrentQuoteRes: (state, data) => { state.currentQuoteRes = data },
  setStartGame: (state, data) => { state.startGame = data },
  setScore: (state, data) => { state.score = data },
  setStartTime: (state, data) => { state.startTime = data },
  setQuoteLength: (state, length) => { state.quoteLength = length },
  setQuoteHTMLElement: (state, element) => { state.quoteHtmlElement = element },
}


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}