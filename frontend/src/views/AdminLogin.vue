<template>
  <div class="admin-login">
    <div class="login-form">
      <div class="heading-primary header">
        Admin Login
      </div>
      <div class="form">
        <font-awesome-icon :icon="['fas', 'user-tie']" />
        <input v-model="userName"/>
        <i class="fas fa-user-tie"></i>
        <font-awesome-icon :icon="['fas', 'arrow-circle-left']" size="2x" />
        <input v-model="password" type="password"/>
      </div>
      <div class="button">
        Login
      </div>
    </div>
  </div>
</template> 

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      userName: "",
      password: ""
    }
  },
  methods: {
    ...mapMutations(['setIsAdmin'])
  }
}
</script>

<style lang="scss">
.admin-login {
  position:absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  width: 30%;

  .login-form {
    text-align: left;
    min-height: 20vh;
    padding: 1rem;    
    position:relative;


    .header {
      text-align: center;
      font-size: 2.5rem;
      line-height: 8rem;
      color: var(--white-color);
      background-color: var(--primary-color);
    }

    .form {
      height: 20vh;
    }

    input {
      height: 9rem;
      width: 100%;
      padding: 0 1rem;
      padding-left: 5rem;
      outline: none;
      border: none;
      background: transparent;
      font-size: 2rem;
      border-bottom: 1px solid rgba(51, 51, 51, 0.479);
    }

    .button {
      margin: 2rem 0;
      position:absolute;
      background-color: var(--primary-color);
      width: 106%;
      left: -3%;
      text-align: center;
      color: var(--white-color);
      font-size: 2rem;
      line-height: 40px;

      &:before {
        content: '';
        width: 20px;
        z-index: 100;
        height: 100%;
        background: linear-gradient(135deg, HERE 45%,
                                      #aaaaaa 50%,
                                      #cccccc 56%,
                                      white 80%);
      }
    }
  }
}
</style>