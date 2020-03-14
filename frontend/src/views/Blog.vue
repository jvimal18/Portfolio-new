<template>
  <div id="blog">

    <section class="heading">
      <div></div>
      <div class="heading-primary">Techie Talks</div>
      <div></div>
    </section>

    <router-view/>

    <section class="footer"></section>
    
  </div>
</template>

<script>


export default {
    name: 'blog',
    components: {
    
    }
}
</script>

<style>
  #blog {
    padding: 2rem 2rem;
  }

</style>