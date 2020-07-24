<template>
  <div class="button button__icon button__round">
      <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
  
  .button__round {
    font-size: 1rem;
    width: 4em;
    height: 4em;
    border-radius: 100px;
    margin-left: 5px;
    margin-right: 5px;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      color: var(--white-color);
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    svg {
      font-size: 1.6rem;
    }

    &:hover {
      background-color: var(--hover-color-dark);
      cursor: pointer;
    }
  }

</style>