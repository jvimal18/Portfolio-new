<template>
  <transition
    name="slide"
    enter-active-class="slideInLeft"
    leave-active-class="slideOutLeft"
    :duration="{enter: '500', leave: '100'}"
    style="animation-mode:forwards;"
    mode="out-in"
  >
    <nav v-if="!showHamburger">
      <div class="social">
        <font-awesome-icon
          class="closeNav"
          @click="handleHamburgerClick"
          :icon="['far', 'times-circle']"
          size="2x"
        />
        <round-icon-button v-for="(links, val, id) in socialMedias" :key="id">
          <font-awesome-icon :icon="links.icon" />
          <!-- size="xs" -->
        </round-icon-button>
      </div>
      <div class="links">
        <router-link tag="div" :to="links" v-for="(links,name,id) in routers" :key="id">
          <span>{{name}}</span>
        </router-link>
      </div>
    </nav>

    <div class="hamburger" @click="handleHamburgerClick" v-else>
      <font-awesome-icon :icon="['fas', 'bars']" size="lg" />
    </div>
  </transition>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      routers: {
        about: "/",
        resume: "/resume",
        apps: "/apps",
        // blog: "/blog",
        credits: "/credits"
      },
      socialMedias: [
        { url: "", icon: ["fab", "twitter"] },
        { url: "", icon: ["fab", "linkedin-in"] },
        { url: "", icon: ["fab", "github-alt"] },
        { url: "", icon: ["far", "paper-plane"] }
      ],
      showHamburger: false,
      window_width: Number
    };
  },
  mounted() {
    this.window_width = window.innerWidth;

    window.addEventListener("resize", () => {
      this.window_width = window.innerWidth;
    });
  },
  watch: {
    window_width() {
      this.showHamburger = this.window_width <= 768;
      console.log(this.showHamburger);
    },
    showHamburger() {
      if (this.window_width <= 768) {
        if (!this.showHamburger) {
          document.getElementById("defaultRouterView").style.pointerEvents =
            "none";
          document.getElementById("body").style.overflow = "hidden";
        } else {
          document.getElementById("defaultRouterView").style.pointerEvents =
            "all";
          document.getElementById("body").style.overflow = "scroll";
        }
      }
    },
    $route() {
      if (this.window_width <= 768) {
        this.showHamburger = true;
      }
    }
  },
  methods: {
    handleHamburgerClick() {
      this.showHamburger = !this.showHamburger;
    }
  }
};
</script>

<style lang='scss'>
nav {
  display: flex;
  padding: 0 10px;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1;
  height: 50px;
  background-color: var(--primary-color-dark);
  color: var(--white-color);

  .social {
    display: flex;
    flex: 5;
  }

  .links {
    display: flex;
    flex: 10;
    height: 100%;
    align-items: stretch;
    justify-content: flex-end;

    div {
      min-width: 7em;
      font-size: 1.4rem;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #7ca6d2;

      &:hover {
        cursor: pointer;
        color: #c1dbf0;
      }

      &.router-link-exact-active {
        font-weight: bold;
        color: var(--white-color);
        border-bottom: 4px solid var(--white-color);
        transition: 0.5s ease-out;
      }
    }
  }
  .closeNav {
    display: none;
  }
}
@media (max-width: 768px) {
  nav::after {
    width: 100vw;
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    z-index: 10;
    margin-left: 350px;
    pointer-events: none;
    background-color: rgba(51, 51, 51, 0.151);
  }

  nav {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    left: 0;
    top: 0;
    width: 350px;
    height: 100vh;
    z-index: 100;

    .hamburger {
      display: block;
      z-index: 100;
    }

    .social {
      flex: 1;
      align-items: center;
    }

    .links {
      // display: none;
      flex-direction: column;
      justify-content: flex-start;
      width: 100%;
      flex: 5;

      span {
        margin: 1.5rem;
        font-size: 3rem;
      }
      // display:none;
    }

    .closeNav {
      display: block;
      position: absolute;
      top: 1rem;
      left: 1rem;

      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>