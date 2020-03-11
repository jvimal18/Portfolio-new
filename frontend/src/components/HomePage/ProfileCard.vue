<template>
  <div class="profile-card">
    <div class="image">
      <img src="@/assets/imgs/ProfilePic.jpg" alt="profile-picture" class="profile-picture">
    </div>
    <div class="content">
      Hello my name is, <br/>
      <h1 class="name">{{name}}</h1>
      <div class="description">
        I'm a full-stack developer specialised in frontend and backend development for complex scalable web apps.
        I always love to  learn & master new technologies.
      </div>
      <div class="button">Hire Me</div>
    </div>
  </div>
</template>

<script>
export default {
    name:'profilecard',
    data () { 
      return {
        name: 'Vimal Jayapalan'
      }
    }
}
</script>

<style scoped lang="scss">
  .profile-card {
    display: flex;
    background-color: var(--primary-color);
    justify-content: space-around;
    align-items: center;
    text-align: left;
    padding: 5rem 5%;
    margin: 0;
    color:var(--white-color);

    .image {
      flex: 1;
      margin-right: 5rem;
      text-align: right;

      .profile-picture {
        width: 25rem;
        border-radius: 10px;
      }
    }

    .content {
      flex: 3;
      font-size: 2.4rem;

      .name {
        font-size: 4rem;
        line-height: 8rem;
        font-weight: 600;
        letter-spacing: 2px;
      }

      .description {
        font-size: 1.6rem;
      }

      .button {
        font-size: 1.6rem;
        font-weight: bold;
        text-align: center;
        border-radius: 4px;
        padding: .3em 0;
        width: 6em;
        margin-top: 1em;
        background-color: var(--hover-color-dark);

        &:hover {
          background-color: rgba(0, 0, 0, 0.3);
          cursor: pointer;
        }
        
      }
    }
  }

</style>