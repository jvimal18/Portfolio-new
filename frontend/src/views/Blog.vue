<template>
  <div class="blog">
    <div class="header">
      <div class="heading-primary">Welcome to My Blog</div>
      <!-- Place where are share about my thoughts and learning on topics i come across -->
    </div>
    <div class="main">
      <div class="sidebar">
        <div class="header">categories</div>
        <div v-for="category in categories" :key="category.id">
          {{ category.name }}
        </div>
      </div>
      <div class="view">
        <router-view/>
      </div>
    </div>
    <section class="footer"></section>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapActions, mapGetters } = createNamespacedHelpers('Blog')

export default {
    title: 'Blog',
    name: 'blog',
    methods: {    
      ...mapActions(["getBlogMeta"]) 
    },
    computed: {
      ...mapGetters(["categories"])
    },
    created() {
      this.getBlogMeta()
    }
}
</script>

<style lang="scss" scoped>
  .blog {
    padding: 1rem 1rem;

    .main {
      display: flex;
      flex-direction: row;
      // flex: 10;

      .sidebar {
        flex: 2;
      }

      .view {
        flex: 8;
      }
    }
  }
</style>