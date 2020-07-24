<template>
  <div class="home">
    <ProfileCard ref="profileCard"/>
    <SkillOverview ref="skillOverview"/>
    <Companies ref="companies"/>
    <Footer ref="aboutFooter"/>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from 'vuex'

import ProfileCard from '@/components/HomePage/ProfileCard'
import SkillOverview from '@/components/HomePage/SkillOverview'
import Companies from '@/components/HomePage/Companies'
import Footer from '@/components/HomePage/Footer'

export default {
  title: 'Home',
  name: 'Home',
  components: {
    ProfileCard,
    SkillOverview,
    Companies,
    Footer
  },
  created() {
    this.get_personal_details()
  },
  mounted() {
    this.animateEntry()
  },
  methods: {
    ...mapActions(["get_personal_details"]),
    animateEntry() {
      const { profileCard, skillOverview, companies,  aboutFooter  } = this.$refs
      const mytimeline = this.$gsap.timeline({ defaults: { duration: 1 }})

      mytimeline
      .from(profileCard.$el, {opacity: 0})
      .from(skillOverview.$el, {opacity: 0})
      .from(companies.$el, {opacity: 0})
      .from(aboutFooter.$el, {opacity: 0})
    }
  }
}
</script>
