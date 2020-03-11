<template>
  <div class="button">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'Button'
}
</script>

<style lang="scss">
    .button {
        width: 40px;
        height: 30px;
    }

</style>