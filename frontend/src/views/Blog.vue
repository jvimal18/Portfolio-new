<template>
  <div id="blog">
      <div class="header">
          
      </div>
      <div class="card" v-for="(blog, id) in blogs" :key='id'>

      </div>
  </div>
</template>

<script>
export default {
    name: 'blog',
}
</script>

<style>

</style>