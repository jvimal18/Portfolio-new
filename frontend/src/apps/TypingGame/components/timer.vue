<template>
  <div class="timer" id="timer" :class="{red: danger}">{{ counter }}</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
// var moment = require('moment');

export default {
    name: 'timer',
    data() {
        return {
            counter: null,
            danger: false
        }
    },
    computed: {
        ...mapGetters(['getQuoteLength']),
        createdTime() {
            return this.$store.state.Quotes.startTime
        },
        deadline() {
            let time = this.createdTime
            let timelimit = Math.floor( this.getQuoteLength / 2 )
            return new Date(time.setSeconds(time.getSeconds() + timelimit))
        }
    },
    methods: {
        ...mapActions(['resetGame'])
    },
    mounted() {
        this.interval = setInterval(() => {
            this.counter = Math.floor((this.deadline - new Date()) / 1000)
            if (this.counter > 10){
                document.getElementById('timer').classList.remove('red')
            } else if ( this.counter >= 1 && this.counter <= 10){
                console.log('corrupt')
                this.danger = true
            } else if ( this.counter <= 0) {
                alert("Nice Try, Time Over!!!")
                this.resetGame()
            }
        }, 1000);
    },
    beforeDestroy() {
        clearInterval(this.interval)
    }
}
</script>

<style>
.timer {
    text-align: center;
    align-items: center;
    font-size: 3rem;
    font-weight: bold;
    margin: 0 auto;
    width: 100%;
}

.timer.red {
    color: red;
}
</style>