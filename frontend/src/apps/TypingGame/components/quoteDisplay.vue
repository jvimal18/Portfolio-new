<template>
    <div class="container">
        <div class="auther-name" id="authorName">
            Author: {{ author }} 
            <span class="word-count">{{ getQuoteLength }}</span>
        </div>
        <div id="quoteDisplay" class="quote-display"> 
            <span v-for="(letter, idx) in currentQuote" :key=idx :id="idx">{{ letter }}</span>
        </div>
        <inputAreaVue></inputAreaVue>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import inputAreaVue from './inputArea.vue'

export default {
    name: 'quoteDisplay',
    components: {
        inputAreaVue,
    },
    computed: {
        ...mapGetters(['currentQuoteRes', 'getQuoteLength']),
        
        currentQuote() {
            return this.currentQuoteRes.quote
        },
        author() {
            return this.currentQuoteRes.author
        }
    },
    data() {
        return {
              displayQuoteElement: HTMLElement
        }
    },
    mounted() {
        this.$store.commit('setQuoteHTMLElement', this.$el.querySelector('#quoteDisplay'))
    },
    methods: {
    },
    created() {
    }
}
</script>

<style>

.container {
  display: relative;
  padding: 1rem;
  border-radius: .5rem;
  width: 700px;
  max-width: 90%;
  background-color:#90CAF9;
  border: 1px solid #0288D1;
  margin: 0 auto;
}

.word-count {
    float: right;
}

.quote-display, .auther-name{
  margin-bottom: 1rem;
  margin-left: calc(1rem + 2px);
  margin-right: calc(1rem + 2px);
}

.auther-name {
    text-transform: uppercase;
    font-weight: bold;
}

.quote-display, .quote-input {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.valid {
    color: green;
}

.invalid {
    color: red;
    text-decoration: underline;
}
</style>