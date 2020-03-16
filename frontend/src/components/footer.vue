<template>
  <div class="app-footer">
    <div class="image">
      <v-img>
        <img slot="image" src="@/assets/imgs/ProfilePic.jpg" />
        <img slot="preloader" src="@/assets/loadingSpinner/spin.svg" />
        <div slot="error">error message</div>
      </v-img>
    </div>
    <div class="heading-secondary">Interested in Learning Web development ??</div>
    <div class="description">
      I take classes on Python and Vuejs as my hobby on weekend. Feel free to
      <a
        href="mailTo:j.vimal18@gmail.com?subject=Hi"
      >mail me</a>.
      <br />
      I also takeup freelance web development on request.
    </div>
    <div class="button cursor-pointer">
      <span @click="showContactForm">Let's Talk</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    showContactForm() {
        this.$eventbus.$emit("showcontact");
    }
  }
};
</script>

<style lang="scss">
.app-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: var(--white-color);
  background-color: var(--primary-color);
  padding: 2rem;

  .vue-load-image img {
    border-radius: 200px;
    height: 100px;
    width: 100px;
  }

  .description {
    a {
      color: var(--primary-color-dark);
    }
  }

  .button {
    margin: 1rem;
    span {
      background-color: var(--primary-color-dark);
      padding: 0.5em 1em;
      font-weight: 600;
      border-radius: 5px;

      &:hover {
        background-color: rgb(9, 90, 156);
      }
    }
  }
}
</style>