<template>
  <div class="profile-card">
    <div class="image">
      <v-img>
        <img slot="image" src="@/assets/imgs/ProfilePic.jpg" />
        <img slot="preloader" src="@/assets/loadingSpinner/spin-alt.svg" />
        <div slot="error">error message</div>
      </v-img>
    </div>
    <div class="content">
      <div class="greet-1">Hi, Welcome to my Site</div>
      <div class="greet-2">I'm,</div>
      <h1 class="name">{{personalDetails.name}}</h1>
      <div class="description">{{personalDetails.description}}</div>
      <div class="button" @click="ShowContact">Contact Me</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  name: "profilecard",
  computed: {
    ...mapGetters(['personalDetails'])
  },
  mounted() {
    this.animateEntry()
  },
  methods: {
    animateEntry() {
      const timeline = this.$gsap.timeline({ defaults: { duration: .5 }})

      timeline
      .from('.image', {opacity: 0})
      .from('.greet-1', {opacity: 0})
      .to('.greet-1', {opacity: 0, autoAlpha: 1})
      .from('.greet-2', {opacity:0})
      .from('.name', {x: 100, opacity: 0})
      .from('.description', {opacity: 0})
      .from('.button', {opacity: 0}, '<.5')
    },
    ShowContact() {
      this.$eventbus.$emit("showcontact");
    }
  }
};
</script>

<style scoped lang="scss">
.profile-card {
  display: flex;
  flex-wrap: wrap;
  background-color: var(--primary-color);
  justify-content: space-around;
  align-items: center;
  text-align: left;
  margin: 0;
  color: var(--white-color);
  padding: 2rem;

  .image {
    flex: 1;
    margin: 5rem;
    text-align: center;
    // animation: myfadeIn 1s ease-in;
    // animation-fill-mode: both;

    

    .vue-load-image img{
      width: 20rem;
      border-radius: 5px;
    }
  }

  .content {
    flex: 3;
    font-size: 2.4rem;

    .greet-1 {
      // animation: myfadeInOut 2s ease 1s;
      // animation-fill-mode: both;
    }

    .greet-2 {
      // animation: myfadeIn 1.5s ease 2s;
      // animation-fill-mode: both;
    }

    .name {
      font-size: 4rem;
      line-height: 8rem;
      font-weight: 600;
      letter-spacing: 2px;
      // animation: myslideleft .5s ease 3s;
      // animation-fill-mode: forwards;
      // visibility: hidden;
      text-transform: capitalize;
    }

    .description {
      font-size: 1.6rem;
      // animation: myslideleft 1s ease 3.5s;
      // animation-fill-mode: forwards;
      // visibility: hidden;
    }

    .button {
      font-size: 1.6rem;
      text-align: center;
      border-radius: 4px;
      padding: 0.3em;
      width: 7em;
      margin-top: 1em;
      background-color: var(--hover-color-dark);
      // animation: myfadeIn 1s ease 3.5s;
      // animation-fill-mode: forwards;
      // visibility: hidden;

      &:hover {
        background-color: rgba(0, 0, 0, 0.3);
        cursor: pointer;
      }
    }
  }
}

@media (max-width: 768px) {
  .profile-card {
    padding: 3rem;

    .image {
      text-align: center;
    }

    .content {
      .name {
        font-size: 3rem;
        line-height: 6rem;
      }

      .button {
        margin: 2rem auto 0 auto;
      }
    }
  }
}

</style>