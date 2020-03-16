<template>
  <div class="app-home">
    <section class="heading-primary">Personal Fun Projects</section>

    <div class="content">
      <div
        class="card"
        v-for="(application, id) in applications"
        :key="id"
        @mouseenter="setShowOverlay(id, true)"
        @mouseleave="setShowOverlay(id, false)"
      >
        <div class="image">
          <font-awesome-icon
            v-if="Array.isArray(application.icon)"
            :icon="application.icon"
            size="6x"
          />
          <v-img v-else>
            <img slot="image" :src="application.icon" />
            <img slot="preloader" src="@/assets/loadingSpinner/spin.svg" />
            <div slot="error">error message</div>
          </v-img>
        </div>

        <div class="heading-secondary cursor-pointer">{{application.name}}</div>
        <div class="description">{{application.description}}</div>

        <div class="overlay" v-if="showOverlay[id]">
          <div class="tech-icon">
            <v-img v-for="(icon,idx) in application.techused" :key="idx">
              <img slot="image" :src="`./static/icons/tech-icons/${icon}.svg`" />
              <img slot="preloader" src="@/assets/loadingSpinner/spin.svg" />
              <div slot="error">error message</div>
            </v-img>
          </div>
          <div class="links">
            <a class="button cursor-pointer" :href="application.githublink" target="_blank">
              <font-awesome-icon :icon="['fab','github-alt']" size="2x" />
            </a>
            <div class="button cursor-pointer">
              <router-link tag="div" :to="{path: application.routerlink}">
                <font-awesome-icon :icon="['fas','play']" size="2x" />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AppHome",
  data () {
    return {
      animationDelay: [],
      showOverlay: []
    }
  },
  components: {},
  computed: {
    ...mapGetters(["applications"]),
  },
  mounted() {
    let temp = 0
    let div;
    this.applications.forEach(() => {
      temp += .25
      this.showOverlay.push(false);
      this.animationDelay.push(`${temp}s`)
    });
    div = this.$el.querySelectorAll('.card')
    div.forEach((element, idx) => {
      element.style.animationDelay = this.animationDelay[idx]
      element.style.animationFillMode = 'forwards'
      element.style.visibility = 'hidden'
    })
  },
  created() {
   
  },
  methods: {
    setShowOverlay(idx, val) {
      this.$set(this.showOverlay, idx, val);
    }
  }
};
</script>

<style lang="scss">
.app-home {
  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .card {
      flex-grow: 1;
      width: 25%;
      min-width: 400px;
      margin: 1rem;
      background-color: var(--white-color);
      padding: 2rem;
      box-shadow: 0px -2px 5px -5px #333, 2px 0 5px -5px #333,
        0 5px 5px -8px #333;
      border-radius: 5px;
      position: relative;
      animation: myfadeIn 1s ease;

      .overlay {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;
        transition: 0.5s ease;
        background-color: rgba(51, 51, 51, 0.816);
        padding: 10%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;

        .links {
          color: var(--white-color);
          display: flex;
          align-items: center;
          justify-content: space-between;

          .button {
            margin: 2rem;
            color: var(--white-color);
          }
        }

        .tech-icon {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;

          svg {
            color: white;
          }

          img {
            margin: 1rem;
            height: 50px;
            width: 50px;
          }
        }
      }

      .image {
        img {
          width: 20rem;
          height: 20rem;
        }
      }
    }
  }
}
</style>