<template>
  <div id="creditParse">
    <div class="heading-secondary">{{name}}</div>
    <div class="container">
      <p class="module" v-for="(module, idx) in data" :key="idx">
        <font-awesome-icon :icon="['fas','arrow-circle-right']" />
        <a :href="module.link" target="_blank">{{ module.name }}</a>
        <span class="credit-description" v-if="module.hasOwnProperty('description')"> &ldquo;{{module.description}}&rdquo;</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "creditParser",
  props: {
    data: Array,
    name: String
  },
  mounted() {
    this.animateEntry()
  },
  methods: {
    animateEntry () {
      const timeline = this.$gsap.timeline({ defaults: { duration: .5 }})

      timeline
      .fromTo('#creditParse .heading-secondary', {opacity: 0, x:-100,}, {opacity: 1, x:0})
      .fromTo('.module', {x:-100, opacity:0, stagger: 1, ease: 'Power2'}, {opacity: 1, x:0})
    }
  }
};
</script>

<style lang="scss">
#creditParse {
  .container {
    padding: 0 2rem;
    .module {
        text-transform: capitalize;
    }
    p {
      svg {
        margin-right: 2rem;
      }
    }
  }
}
</style>