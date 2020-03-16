<template>
  <div class="credits">
    <div class="header">
      <div class="heading-primary">Site Credits</div>
      <div class="date">
        <font-awesome-icon :icon="['far','calendar-alt']" />
        {{CreditsDate}}
      </div>
    </div>
    <div
      class="heading-secondary"
    >&ldquo;Alone we can do so little, together we can do so much&rdquo;</div>

    <div class="opsrc">
      <p v-for="(line, idx) in opnsrc" :key="idx">
        <font-awesome-icon :icon="['fas','arrow-circle-right']" />
        <span v-html="line"></span>
      </p>
    </div>

    <div class="site-credits">

      <creditParser name="Web UI Modules Used" :data="jsmodules"></creditParser>
      <creditParser name="Designs" :data="css"></creditParser>
      <creditParser name="Icons" :data="icons"></creditParser>
      <creditParser name="Illustrations" :data="Illustrations"></creditParser>
      <creditParser name="Backend" :data="backend"></creditParser>
      <creditParser name="Hosting" :data="hosting"></creditParser>

    </div>
  </div>
</template>

<script>
import creditParser from '@/components/creditParser'
export default {
  components: {
    creditParser  
  },
  data() {
    return {
      CreditsDate: "15 March 2020",
      arrowIcon: "<font-awesome-icon :icon=\"['fas','arrow-circle-right']\"/>",
      opnsrc: [
        "A big to open source community and people who support, trust in open source.",
        "Thanks to all developers, who devote countless hours to helping technology grow, contribute hundreds of articles, guide and willing to post there code/findings for others to use.",
        "Thanks to all tester who are involved in countless number of opensource projects. With out a 3rd eye a project can never become stable.",
        'Thanks to communities like <a href="https://www.reddit.com/" target="_blank">reddit</a>,<a href="http://stackoverflow.com/" target="_blank">stackoverflow</a> who allow people to collabrate and learn things together.'
      ],
      jsmodules: [
        {
          name: "Vuejs",
          link: "https://vuejs.org/"
        },
        {
          name: "Vue Router",
          link: "https://router.vuejs.org/"
        },
        {
          name: "Vuex",
          link: "https://vuex.vuejs.org/"
        },
        {
          name: "Vue-Load-Image",
          link: "https://github.com/john015/vue-load-image#readme"
        },
        {
          name: "PrintJs",
          link: "https://printjs.crabbly.com/"
        }
      ],
      css: [
        {
          name: "scss",
          link: "https://sass-lang.com/"
        },
        {
          name: "css",
          link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
        }
      ],
      icons: [
        {
          name: "FontAwesome",
          link: "https://fontawesome.com/"
        },
        {
          name: "Icon Monster",
          link: "https://iconmonstr.com/"
        }
      ],
      Illustrations: [
        {
          name: "UnDraw",
          link: "https://undraw.co/illustrations"
        }
      ],
      backend: [
        {
          name: "python",
          link: "http://python.org/"
        },
        {
          name: "bottle",
          link: "https://bottlepy.org"
        }
      ],
      hosting: [
        {
          name: "pythonanywhere",
          link: "https://www.pythonanywhere.com",
          description: "Big thanks to python anywhere, for allowing free hosting of websites."

        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.credits {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem 10rem;
  text-align: left;

  .header {
    text-align: left !important;
    width: 100%;
    border-bottom: 1px solid rgba(51, 51, 51, 0.479);

    .date {
      padding: 1rem 0;
    }

    .fa-calendar-alt {
      font-size: 2rem;
      margin-right: 1rem;
    }
  }

  .fa-arrow-circle-right {
    margin: 0 2rem;
  }

  .heading-secondary {
    padding: 1rem 0;
  }
}

@media (max-width: 768px) {
    .credits {
      padding: 2rem 4rem;
    }
  }
</style>