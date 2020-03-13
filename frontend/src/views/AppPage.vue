<template>
  <div id="apps">
    <section class="header" v-if="!showHome" @click="showHome=!showHome">
      <font-awesome-icon :icon="['fas', 'arrow-circle-left']" size="3x"/>
    </section>

    <home v-if="showHome" @changeview="showHome=!showHome; console.log(showHome)"/>
    <div v-else>
      <router-view/>
    </div>

    <section class="footer">
      It has been a great journey of learning, visualing and coding all funning and useful things what comes to my mind. More to come.
    </section>
  </div>
</template>

<script>

import home from '@/components/AppPage/Home'
export default {
  components: {
    home
  },
  data() {
    return {
      showHome: true,
    }
  },
  mounted() {
    // console.log(this.$route)
  }
}
</script>

<style lang="scss">
  #apps {
    .content {
      display: flex;
      flex-wrap: wrap;
      
      .card{
        flex-grow:1;
        width: 25%;
        min-width: 400px;
        margin: 1rem;
        background-color: var(--white-color);
        padding: 2rem;
        box-shadow: 0px -2px 5px -5px #333, 2px 0 5px -5px #333, 0 5px 5px -8px #333;
        border-radius: 5px;

        .image{
          img {
            width: 10rem;
            height: 10rem;
          }
        }
      }
    }
  }

</style>