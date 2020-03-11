<template>
  <div class="home">
    <ProfileCard/>
    <SkillOverview/>
    <Companies/>
  </div>
</template>

<script>
// @ is an alias to /src
import ProfileCard from '@/components/HomePage/ProfileCard'
import SkillOverview from '@/components/HomePage/SkillOverview'
import Companies from '@/components/HomePage/Companies'

export default {
  name: 'Home',
  components: {
    ProfileCard,
    SkillOverview,
    Companies
  }
}
</script>
