<template>
  <div class="credits" v-if="siteCredits">
    <div class="header">
      <div class="heading-primary">Site Credits</div>
      <div class="date">
        <font-awesome-icon :icon="['far','calendar-alt']" />
        {{siteCredits.CreditsDate}}
      </div>
    </div>
    <div
      class="heading-secondary"
    >&ldquo;Big thanks to my family and friends, Who has always helped me to grow as a better person.&rdquo;</div>
    <div
      class="heading-secondary"
    >&ldquo;Alone we can do so little, together we can do so much&rdquo;</div>

    <div class="opsrc" ref="opSrc">
      <p class="opsrc" v-for="(line, idx) in siteCredits.opnsrc" :key="idx">
        <font-awesome-icon :icon="['fas','arrow-circle-right']" />
        <span v-html="line"></span>
      </p>
    </div>

    <div class="site-credits">

      <creditParser class="site-credit" v-for="(val, key, idx) in siteCredits.others" :key="idx" :name="key" :data="val"></creditParser>

    </div>
  </div>

  <div v-else class="full-loading">
    <img src="@/assets/loadingSpinner/spin.svg"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import creditParser from '@/components/creditParser'


export default {
  title: 'Credits',
  components: {
    creditParser  
  },
  computed: {
    ...mapGetters(["siteCredits"])
  },
  created() {
    this.get_site_credits()
  },
  mounted () {
    let interval = setInterval(() => {
      if (this.siteCredits) {
        this.animateEntry()
        clearInterval(interval)
      }
    }, 100);
  },
  methods: {
    ...mapActions(["get_site_credits"]),
    animateEntry () {
      const timeline = this.$gsap.timeline({ defaults: { duration: .5 }})
      timeline
      .fromTo('.heading-secondary', {opacity: 0, x:-100}, {opacity: 1, x:0})
      .fromTo('.opsrc', { x:-100, opacity:0, stagger: 1, ease: 'Power2'}, { opacity: 1, x:0 })
    }
  }
};
</script>

<style lang="scss" scoped>

.full-loading {
    height: calc(100vh - 50px);
    display: flex;
    justify-content: center;
  }

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