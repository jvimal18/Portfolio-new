<template>
  <div id="apps">
    <section class="header">
      
    </section>
    <section class="heading-primary">
      Personal Projects Developed By Me
    </section>

    <section class="content">
      <div class="card" v-for="(application, id) in applications" :key="id">
        <div class="image">
          <font-awesome-icon v-if="Array.isArray(application.icon)" :icon="application.icon" size="6x"/>
          <img v-else :src="application.icon">
        </div>
        <div class="heading-secondary">{{application.name}}</div>
        <div class="description">{{application.description}}</div>
      </div>
    </section>

    <section class="footer">
      It has been a great journey of learning, visualing and coding all funning and useful things what comes to my mind. More to come.
    </section>
  </div>
</template>

<script>
export default {
  data() {
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
          routerlink:"", 
          githublink:"",
          icon:"./static/icons/tax.svg"
        },
      ]
    }
  },
  mounted() {
    // console.log(this.$route)
  }
}
</script>

<style lang="scss">
  #apps {
    .content {
      display: flex;
      flex-wrap: wrap;
      
      .card{
        flex-grow:1;
        width: 25%;
        margin: 1rem;
        background-color: var(--white-color);
        padding: 2rem;

        .image{
          img {
            width: 10rem;
            height: 10rem;
          }
        }
      }
    }
  }

</style>