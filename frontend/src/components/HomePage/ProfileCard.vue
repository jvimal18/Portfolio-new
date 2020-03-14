<template>
  <div class="profile-card">
    <div class="image">
      <v-img>
        <img slot="image" src="@/assets/imgs/ProfilePic.jpg" />
        <img slot="preloader" src="@/assets/loadingSpinner/Spin.gif" />
        <div slot="error">error message</div>
      </v-img>
    </div>
    <div class="content">
      <div class="greet-1">Hi, Welcome to my Site</div>
      <div class="greet-2">My name is,</div>
      <h1 class="name">{{name}}</h1>
      <div class="description">{{description}}</div>
      <div class="button" @click="ShowContact">Contact Me</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "profilecard",
  data() {
    return {
      name: "Vimal Jayapalan",
      description:
        "I'm a full-stack developer specialised in frontend and backend development \
        for complex scalable web apps.\
        I always love to  learn & master new technologies."
    };
  },
  methods: {
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
    animation: myfadeIn 1s ease-in;
    animation-fill-mode: both;

    .profile-picture {
      width: 25rem;
      border-radius: 10px;
    }
  }

  .content {
    flex: 3;
    font-size: 2.4rem;

    .greet-1 {
      animation: myfadeInOut 2s ease 1s;
      animation-fill-mode: both;
    }

    .greet-2 {
      animation: myfadeIn 1.5s ease 2s;
      animation-fill-mode: both;
    }

    .name {
      font-size: 4rem;
      line-height: 8rem;
      font-weight: 600;
      letter-spacing: 2px;
      animation: myslideleft 1s ease 3s;
      animation-fill-mode: forwards;
      visibility: hidden;
    }

    .description {
      font-size: 1.6rem;
      animation: myslideleft 1s ease 4s;
      animation-fill-mode: forwards;
      visibility: hidden;
    }

    .button {
      font-size: 1.6rem;
      text-align: center;
      border-radius: 4px;
      padding: 0.3em;
      width: 7em;
      margin-top: 1em;
      background-color: var(--hover-color-dark);
      animation: myfadeIn 1s ease 4s;
      animation-fill-mode: forwards;
      visibility: hidden;

      &:hover {
        background-color: rgba(0, 0, 0, 0.3);
        cursor: pointer;
      }
    }
  }
}

@media (max-width: 768px) {
  .profile-card {
    padding: 0 3rem;

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