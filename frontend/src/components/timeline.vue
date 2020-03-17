<template>
  <div class="timeline">
    <div class="timeline-container">
      <div class="date">
        <slot name="date"></slot>
      </div>
      <div class="title">
        <slot name="title"></slot>
      </div>
      <div class="decription">
        <slot name="decription"></slot>
      </div>
      <div class="achievements">
        <slot name="achievements"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.timeline {
  position: relative;
  text-align: unset;
  padding: 2rem;

  .timeline-container {
    margin-left: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 1rem;
    padding-bottom: 4rem;
    position: relative;

    &:before {
      content: "";
      position: absolute;
      width: 4px;
      height: 4px;
      border-radius: 50px;
      color: var(--primary-color);
      box-shadow: 0 0 0 5px var(--primary-color);
      left: -2.6rem;
      top: 0;
    }

    .date {
      position: relative;
      top: -2.4rem;
      left: -1.5rem;
      text-transform: uppercase;
      background: rgb(87, 87, 87);
      color: var(--white-color);
      border-radius: 100px;
      padding: 0 1rem;
      font-size: 1rem;
      font-style: italic;
    }
  }
}

.timeline::before {
  content: "";
  position: absolute;
  left: 1.5rem;
  width: 2px;
  height: 100%;
  background-color: #7474747e;
}
</style>