<template>
    <div class="tool-bar" id="toolbar">

        <div class="start-button" v-if="! isGameStarted" @click="StartGame">
            <button>START</button>
        </div>

        <div class="action-bar" v-else>
            <div class="reset"><button @click="resetGame">Reset</button></div>
            <div class="skip"><button @click="skipQuote">Skip</button></div>
            <div class="end"><button @click="endGame">End</button></div>
            <div class="score">SCORE : {{ score }}</div>
        </div>

    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'toolbar',
    computed: {
        isGameStarted: {
            get () {
                return this.$store.state.Quotes.startGame
            },
            set(value) {
                this.$store.commit('setStartGame', value)
            },
        },
        score: {
            get () {
                return this.$store.state.Quotes.score
            },
            set(value) {
                this.$store.commit('setScore', value)
            }
        },
    },
    methods: {
        ...mapActions(['fetchQuote', 'resetGame', 'resetTimer', 'endGame']),
        StartGame() {
            this.isGameStarted = true
            let time = new Date() 
            this.startTime = time.setSeconds(time.getSeconds() + 2)
        },
        skipQuote() {
            this.fetchQuote()
            this.resetTimer()
        }
    }
}
</script>

<style scoped>
.action-bar {
    margin: auto 0;
    text-align: center
}

.start-button > button {
  border: 1px solid #0288D1;
  background-color:#90CAF9;
  font-size: 1.2rem;
  padding: 1rem;
  width: 10rem;
  border-radius: 15px;
}

.start-button {
  text-align: center;
  margin-bottom: 2rem;
}


.start-button > button:hover {
  background-color: #0288D1;
  color: #ffffff;
}

.action-bar button {
    margin-right: 1rem;
    border-radius: .2rem;
    outline: none;
    width: 5rem;
    height: 2rem
}

.reset, .score, .skip, .end {
    display: inline;
}

.skip > button {
    border: 1px solid #9A7D0A;
    background-color:#F7DC6F;
}

.skip > button:hover {
    background-color: #9A7D0A;
    color: #ffffff;
}



.reset > button {
    border: 1px solid #0288D1;
    background-color:#90CAF9;
}

.reset > button:hover {
    background-color: #0288D1;
    color: #ffffff;
}

.end > button {
    border: 1px solid #CB4335;
    background-color:#EC7063;
}

.end > button:hover {
    background-color: #CB4335;
    color: #ffffff;
}

.tool-bar {
    margin-bottom: 2rem;
}

</style>