<template>
  <div id="ticTacToe">
    <div class="form">
      <div><span class="label">Player: </span>  X</div>
      <!-- <input type="text" name="Name" v-model="player" id=""> -->
      <div><span class="label">Computer: </span> O</div>

      <div @click="resetGame">
        <round-icon-button>
          <font-awesome-icon :icon="['fas', 'recycle']" />
        </round-icon-button>
      </div>
      
    </div>
    <div id="canvas">
      <div class="row" v-for="(row,row_idx) in 3" :key="`row-${row}`">
        <div class="col" v-for="(col,col_idx) in 3" @click="handle_click" :row="row_idx" :col="col_idx" :id="`${row_idx}-${col_idx}`" :key="`col-${row}-${col}`">
          <span>
            {{ gameTable[row_idx][col_idx] }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      player: "",
      round: 1,
      gameTable: [
        [" "," "," "],
        [" "," "," "],
        [" "," "," "]
      ]
    }
  }, 
  computed: {
    flat_board () {
      return this.gameTable.flat()
    }
  },
  methods: {
    handle_click(e) {
      var [row,col] = e.srcElement.id.split('-')
      this.drawSlot(row, col, 'X')
      // this.checkGameStatus()

      this.checkresponse()
    },
    drawSlot(row, col, coin) {
      const newRow = this.gameTable[row].slice(0)
      newRow[col] = coin
      this.$set(this.gameTable, row, newRow)
    },
    checkresponse() {
      this.$axios.post('/ttt/play', {
          board: this.flat_board,
          coin: 'X'
       }).then(res => {
         if (res.data.status === 1) {
           alert("Player Wins")
           this.resetGame()
         } else if (res.data.status === 2) {
           this.drawSlot(res.data.row, res.data.col, 'O')
           setTimeout(() => {
             alert("Computer Wins")             
           }, 200);
          this.resetGame()
         } else if (res.data.status === 3 ) {
           alert("Game Draw")
           this.resetGame()
         } else {
           this.drawSlot(res.data.row, res.data.col, 'O')
         }
       })
    },
    resetGame () {
      this.gameTable = [
        [" "," "," "],
        [" "," "," "],
        [" "," "," "]
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
#ticTacToe{
  padding: 20px;

  .form {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
      margin: 5px 30px;
    }

    .button {
      color: white;
      background-color: var(--primary-color);

      &:hover {
        background-color: var(--primary-color-dark);
      }
    }
  }

  input{
    width: 25%;
    height: 30px;
    margin: 10px 20px;
    font-size: 20px;
    padding: 0 5px ;
  }

  select {
    width: 40px;
    height: 30px;
    font-size: 20px;
  }

  #canvas {
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    div.row { 
      height: 120px;
      border-bottom: 1px solid black;
      width: 360px;
      
      &:nth-child(2) {
        border-left: none;
        border-right: none;;
      }

      &:last-child {
        border-bottom: none;
      }

      div.col {
        display: inline-block;
        width: 33.33%;
        height: 100%;
        position: relative;

        span {
          font-size: 30px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        &:first-child, &:nth-child(2) {
          border-right: 1px solid black;
        }
      }
    }
  }
}
</style>