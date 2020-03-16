<template>
  <div id="credit-parse">
    <div class="heading-secondary">{{name}}</div>
    <div class="container">
      <p class="module" v-for="(module, idx) in data" :key="idx">
        <font-awesome-icon :icon="['fas','arrow-circle-right']" />
        <a :href="module.link">{{ module.name }}</a>
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
  }
};
</script>

<style lang="scss">
#credit-parse {
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