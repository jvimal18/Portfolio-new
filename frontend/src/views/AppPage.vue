<template>
  <div id="apps">

    <section class="header" v-if="$route.name !== 'Apps'">
      <router-link :to="{path: '/apps'}" tag="div" class="back-button cursor-pointer">
        <font-awesome-icon :icon="['fas', 'arrow-circle-left']" size="2x" />
      </router-link>
    </section>

    <div class="app-view">
    <router-view/>
    </div>

    <div class="footer">
      It has been a great journey of learning, visualing and coding all funning and useful things what comes to my mind. 
      More to come.
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters(['applications'])
  },
  watch: {

  },
  data() {
    return {
       
    };
  },
  mounted() {
    // console.log(this.$route)
  },
};
</script>

<style lang="scss">
#apps {
  .header {
    display: flex;
    padding: 0 20px;
    align-items: center;
    height: 50px;
    background-color: rgba(10, 113, 198, 0.24);
    opacity: .5;

    .back-button {


    }

    .app-view {
      max-height: 90vh;
    }

  }
}
</style>