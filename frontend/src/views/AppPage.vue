<template>
  <div class="app-page">
    <section class="header" v-if="$route.name !== 'Apps'">
      <router-link :to="{path: '/apps'}" tag="div" class="back-button cursor-pointer">
        <font-awesome-icon :icon="['fas', 'arrow-circle-left']" size="2x" />
      </router-link>
      <div class="title heading-primary">{{$route.name}}</div>
      <a :href="githublink" target="_blank" v-if="githublink !== ''" :key="$route.path"><font-awesome-icon :icon="['fab', 'github-alt']" size="2x" /></a>
    </section>

    <div class="app-view">
      <router-view />
    </div>

    <div class="footer">
      It has been a great journey of learning, visualing and coding all funning and useful things what comes to my mind.
      More to come.
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  title: 'Apps',
  computed: {
    ...mapGetters(["applications"])
  },
  data() {
    return {
      githublink: String
    };
  },
  mounted() {
    
  },
  beforeRouteUpdate(to, from, next) {
   this.applications.forEach(element => {
      if (element.routerlink == to.path) {
        this.githublink = element.githublink
      }
    });
    next();
  }
};
</script>

<style lang="scss" scoped>
.app-page {
  .header {
    display: flex;
    padding: 0 20px;
    flex-direction: row;
    background-color: rgba(10, 113, 198, 0.24);
    justify-content: center;
    align-items: center;
    flex: 1 0 45%;

    div {
      text-transform: uppercase;
    }

    .title {
      margin-right: auto;
    }

    .back-button {
      margin-right: auto;
    }
  }
}
</style>