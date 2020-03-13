<template>
  <div>
    <section class="heading-primary">
      Personal Projects Developed By Me
    </section>
    <section class="content">
      <div class="card" v-for="(application, id) in applications" :key="id">
        <div class="image">
          <font-awesome-icon v-if="Array.isArray(application.icon)" :icon="application.icon" size="6x"/>
          <img v-else :src="application.icon">
        </div>
        <router-link class="heading-secondary" tag="div" :to="application.routerlink"  @click="this.$emit('changeview')">
          {{application.name}}
        </router-link>
        <div class="description">{{application.description}}</div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
    name: 'AppHome',
    data () {
      return {
        applications: [
          { 
            name: "Tax Calculator FY 20-21", 
            description:"Simple application to calculate tax payable as per New scheme proposed in Budget 2020", 
            routerlink:"", 
            githublink:"",
            icon:"./static/icons/tax.svg"
          },
          { 
            name: "Tax Calculator FY 19-20", 
            description:"Application to calculate tax payable for financial year 2019-2020", 
            routerlink:"", 
            githublink:"",
            icon:['fas', 'coins']
          },
          { 
            name: "TicTacToe", 
            description:"Lets have some fun beat me if you can !!!", 
            routerlink:"", 
            githublink:"",
            icon:"./static/icons/tax.svg"
          },
          { 
            name: "Flames", 
            description:"Discover your relationship with your loved ones..", 
            routerlink:"", 
            githublink:"",
            icon:"./static/icons/tax.svg"
          },
          { 
            name: "TypeIT", 
            description:"Test your speed of typing", 
            routerlink:"/apps/typinggame", 
            githublink:"",
            icon:"./static/icons/tax.svg"
          },
        ]
      }
    }
}
</script>

<style>

</style>