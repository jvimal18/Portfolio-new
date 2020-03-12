<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view/>
    <div class="hamburger" @click="showNavMobile=!showNavMobile">
      <font-awesome-icon :icon="['fas', 'bars']" size="lg"/>
    </div>
  </div>
</template>

<script>
  import NavBar from '@/components/Navbar'

  export default {
    name: 'App',
    components: {
      NavBar
    },
  }
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');
@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');

* {
  margin:0;
  padding:0;
  box-sizing: border-box;
  user-select: none;
}

:root {
  --primary-color: #41A4F5;
  --primary-color-dark: #0A71C6;
  --hover-color-dark: rgba(0,0,0,0.2);
  --white-color: #ffffff;
  --text-color:#434E5E;
  --text-color-secondary: #58677c;
  --app-background: #F7F8FA;
}

h1,h2,h3 {
  font-family: 'Poppins', sans-serif;
}

a {
  text-decoration: none;
  color: var(--primary-color);
}

html {
  font-size: 62.5%;
}

#app {
  font-size: 1.6rem;
  font-family: 'Roboto', 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text-color);
  line-height: 3rem;
  background-color: var(--app-background);
}

.heading-primary {
  font-family: 'Poppins', sans-serif;
  font-size: 3rem;
  margin: 3rem auto;
}

.heading-secondary {
  font-size: 2rem;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  margin: 1rem auto;
  text-transform: capitalize;
}

</style>

<style lang="scss">
    .hamburger {
      color: var(--white-color);
      display: none;
      position: absolute;
      left: 5px;
      top: 50px;
      background-color: var(--primary-color-dark);
      padding: 10px 15px;
      transition: .5s;
      border-radius: 50px;

      &.fulpad {
        top: 0;
        left: 0;
        border-radius: 0;
        padding: 100vh 100vw;
        transition: 1s ease;
      }

      &:hover {
        cursor:pointer;
      }
    }

    @media (max-width: 850px) { 
      .hamburger {
        display: block;
      }
    }

</style>