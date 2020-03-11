
<template>
  <div class="show-pdf">
    <div class="pdf-tool-bar">
      <div class="name">Vimal Jayapalan</div>
      <div class='page-trigger'>
        <div class="minus disabled" @click="decrementPage">
          <font-awesome-icon :icon="['fas', 'minus']"/>
        </div>
        
        <div class="page-no">{{ page }} / {{ TotalPages }}</div>

        <div class="plus" @click="incrementPage">
          <font-awesome-icon :icon="['fas','plus']"/>
        </div>
      </div>
      <div class="tool-bar-actions">
        <font-awesome-icon :icon="['fas', 'print']" @click='print'/>
        <font-awesome-icon :icon="['fas', 'download']"/>
      </div>
    </div>
    <div class="pdf-viewer">
      <div class="left disabled" @mouseover="showarrow = true" @mouseleave="showarrow = false" @click="decrementPage">
        <font-awesome-icon v-if="showarrow" :icon="['fas', 'chevron-left']"/>
    </div>
      <pdf src="./static/resume/Resume.pdf" :id="page" :page="page">
        <template slot="loading">
          <div class="lds-dual-ring"></div>
        </template>
      </pdf>
      <div class="right" @mouseover="showarrow = true" @mouseleave="showarrow = false" @click="incrementPage">
        <font-awesome-icon v-if="showarrow" :icon="['fas', 'chevron-right']"/>
    </div>
    </div>
  </div>
</template>

<script>
import pdfvuer from 'pdfvuer'
import printjs from 'print-js'

export default {
  components: {
    pdf: pdfvuer
  },
  data() {
    return {
      pdfdata: undefined,
      page: 1,
      TotalPages: 3,
      scale: 'page-width',
      showarrow: false
    }
  },
  watch: {
    page() {
      if ( this.page == this.TotalPages ) {
        this.$el.querySelector(".plus").classList.add("disabled")
        this.$el.querySelector(".right").classList.add("disabled")
      } else if ( this.page == 1 ) {
        this.$el.querySelector(".minus").classList.add("disabled")
        this.$el.querySelector(".left").classList.add("disabled")
      } else {
        this.$el.querySelector(".minus").classList.remove("disabled")
        this.$el.querySelector(".plus").classList.remove("disabled")
        this.$el.querySelector(".right").classList.remove("disabled")
        this.$el.querySelector(".left").classList.remove("disabled")
      }

    }
  },
  methods: {
    incrementPage() {
      if (this.page !== this.TotalPages){
        this.page++
      }
    },
    decrementPage() {
      if (this.page !== 1){
        this.page--
      }
    },
    print(){
      console.log("Print")
      printjs({printable:'./static/resume/Resume.pdf', type:'pdf', showModal:true})
    },
  }
} 
</script>

<style lang="scss">
  .show-pdf{
    display: flex;
    background-color: #5f5f5f7e;
    color: var(--white-color);
    flex-direction: column;
    padding-bottom: 2rem;
    min-height: calc(100vh - 60px);

    .disabled {
      cursor: default !important;
      opacity: .2 !important;
    }

    .pdf-viewer {
      display: flex;
      justify-content: space-around;

      .pdf-canvas {
        flex:4
      }
    }

    .left, .right {
        margin: 0 10px;
        flex: 1;
        min-width: 10%;
        font-size: 5rem;
        color: #333;
        
        svg {
          position: sticky;
          top: 55vh;
        }

        &:hover {
          cursor: pointer;
        }
      }

      .left {
        justify-self: flex-start;

        svg{
          left:20px;
        }
      }

      .right {
        justify-self: flex-end;
      }


    .pdf-tool-bar {
      display: flex;
      align-self: flex-start;
      flex-wrap: nowrap;
      background-color: #333;
      padding: 1rem 15%;
      margin-bottom: 2rem;
      width: 100%;
      position: sticky;
      top: 0;
      z-index: 1;

      .name {
        display: flex;
        flex: 4;
        justify-content: flex-start;
      }
    
      .page-trigger{
        display: flex;
        flex:1;
        justify-content: center;

        .minus {
          margin-right: 10px;
        }

        .plus {
          margin-left: 10px;
        }
        div:nth-child(odd){
          &:hover{
            cursor: pointer;
          }
        }
      }

      .tool-bar-actions {
        display: flex;
        flex:4;
        justify-content: flex-end;
        align-items: center;
        font-size: 2rem;

        *:hover {
          cursor: pointer;
        }

        * {
          margin-left: 2rem;
        }
      }
    }
  }
</style>

<style>
.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>