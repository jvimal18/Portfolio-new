<template>
  <div id="app">
    
    <header>
      <div class="title"><span class="title-highlight">T</span>ypeSpeed<span class="title-highlight">++</span></div>
    </header>

    <toolbar></toolbar>
    <timer v-if="isGameStarted"></timer>
    <quoteDisplay v-if="isGameStarted"></quoteDisplay>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import toolbar from './components/toolkit.vue'
import quoteDisplay from './components/quoteDisplay.vue'
import timer from './components/timer.vue';

export default {
  name: 'app',
  components: {
    quoteDisplay,
    timer,
    toolbar
  },
  computed: {
    isGameStarted: {
      get () {
          return this.$store.state.Quotes.startGame
      },
      set(value) {
          this.$store.commit('setStartGame', value)
      }
    }
  },
  methods: {
    ...mapActions(['fetchQuote']),
  },
  Created() {
    // 
  },
  mounted() {
    console.log(this.$store)
    this.fetchQuote()
  }
}
</script>

<style scoped>

* {
  box-sizing: border-box;
}

#app {
  margin: 1rem 1rem;
}

header {
  font-size: 2rem;
  font-weight: bold;
  height: 4rem;
}

.title-highlight {
  color: red;
}
</style>
