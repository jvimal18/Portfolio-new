<template>
  <div class="company-details">
    <h3 class="heading-primary" v-if="companies.length > 0">Companies I've worked for</h3>
    <div class="company-icons" v-if="companies.length > 0">
      <div v-for="(company, id) in companies" :key="id">
        <a :href="company.url" target="blank">
          <img :src="company.logo" :alt="company.name" srcset=""/>
        </a>
      </div>
    </div>
    <!-- <h3 class="heading-primary" v-if="clients.length > 0">Great clients I've worked with</h3>
    <div class="company-icons" v-if="clients.length > 0">
      <div v-for="(clients, id) in clients" :key="id">
        <a :href="clients.url" target="blank">
          <img :src="clients.logo" :alt="clients.name" srcset=""/>
        </a>
      </div>
    </div> -->
  </div>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";
  export default {
    computed: {
      ...mapGetters(["companies"]),
    },
    created() {
      this.get_companies()
    },
    methods: {
      ...mapActions(["get_companies"])
    }
  }
</script>

<style lang="scss">
  .company-details {
    background-color: var(--white-color);
    padding: 3rem 2rem;
    // animation: myfadeIn .5s ease 5.5s;
    // animation-fill-mode: forwards;
    // visibility: hidden;

    .company-icons {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      min-height: 150px;
     
      div {
        display: flex;
        align-items: center;
        font-weight: 700;
        font-size: 3.5rem;
        color:#A1A6AE;
        margin: 2rem;
      }

      img {
        margin: 0 4rem;
        height: 6rem;
        // width: 15rem;
        opacity: .6;
      }
    }
  }
</style>
