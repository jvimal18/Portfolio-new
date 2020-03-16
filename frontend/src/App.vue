<template>
  <div id="app">
    <contact-form />
    <nav-bar></nav-bar>
    
    <router-view id="defaultRouterView" :key="$route.path"></router-view>
   
  </div>
</template>

<script>
import NavBar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";

export default {
  name: "App",
  data() {
    return {
      window_width: Number
    }
  },
  watch: {
    $route() {
      var elmnt = document.getElementById('body')
      elmnt.scrollTop+=1000;
    }
  },
  components: {
    NavBar,
    ContactForm
  },
  created() {
    
  },
  methods: {
  
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap");
@import url("https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
}

:root {
  --primary-color: #41a4f5;
  --primary-color-dark: #0a71c6;
  --hover-color-dark: rgba(0, 0, 0, 0.2);
  --white-color: #ffffff;
  --text-color: #434e5e;
  --text-color-secondary: #58677c;
  --app-background: #f7f8fa;
  --breakpoint-xl: 1200px;
  --breakpoint-lg: 1024px;
  --breakpoint-md: 768px;
  --breakpoint-sm: 640px;
}
 


h1,
h2,
h3 {
  font-family: "Poppins", sans-serif;
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
  font-family: "Roboto", "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text-color);
  line-height: 3rem;
  background-color: var(--app-background);
  position: relative
}

.heading-primary {
  font-family: "Poppins", sans-serif;
  font-size: 3rem;
  line-height: 6rem;
}

.heading-secondary {
  font-size: 2rem;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  line-height: 4rem;
  text-transform: capitalize;
}

.cursor-pointer:hover {
  cursor: pointer;
}

/* width */
::-webkit-scrollbar {
  width: 0.5rem;
}

/* Track */
::-webkit-scrollbar-track {
  background: var(--white-color);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--primary-color-dark);
  box-shadow: inset 1px 2px 3px 1px rgba(51, 51, 51, 0.5);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>

<style lang="scss">
.hamburger {
  color: var(--white-color);
  display: none;
  position: absolute;
  left: 5px;
  top: 60px;
  background-color: var(--primary-color-dark);
  padding: 10px 15px;
  transition: 0.5s;
  border-radius: 50px;
  z-index: 1000;

  &.fulpad {
    top: 0;
    left: 0;
    border-radius: 0;
    padding: 100vh 100vw;
    transition: 1s ease;
  }

  &:hover {
    cursor: pointer;
  }
}

@media (max-width: 768px) {
  .hamburger {
    display: block;
  }
}
</style>

<style>
/*************************************** Animations ******************************************/
@keyframes myslideleft {
  0% {
    transform: translateX(100px);
    visibility: hidden;
  }

  90% {
    transform: translateX(-10px);
  }

  100% {
    transform: translateX(0);
    visibility: visible;
  }
}

@keyframes myslideright {
  0% {
    transform: translateX(-100px);
  }

  90% {
    transform: translateX(10px);
  }

  100% {
    transform: translateX(0);
  }
}

@keyframes myfadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
    visibility: visible;
  }
}

@keyframes myfadeInOut {

  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
    visibility: visible;
  }

  100% {
    opacity: 0;
    display: none
  }
  
}
</style>