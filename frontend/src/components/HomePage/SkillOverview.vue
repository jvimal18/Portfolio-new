<template>
  <div class="skill-overview">
    <h3 class="heading-primary">Skills Overview</h3>
    <div class="description">
      <p>
        {{description}}
      </p>
    </div>
    <router-link tag="a" to="/resume">Check out my resume</router-link>

    <div class="skills">

      <div class="card" v-for="(catagories, id) in skillCatagories" :key="id">
        <div>
          <div class="icon">
            <font-awesome-icon :icon="catagories.icon"/>
          </div>
          <div class="list">
            <div>
              <div class="heading-secondary">{{catagories.name}}</div>
              <p v-for="(content, key) in catagories.skills" :key="key">
                <font-awesome-icon :icon="['fas','check']"/> {{content}} 
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters(["skillCatagories", "personalDetails"]),
    description () {
      return this.personalDetails.skills_description
    }
  },
  methods: {
    ...mapActions(["get_skill_catagories"])
  },
  created() {
    this.get_skill_catagories()
  }
}
</script>

<style scoped lang="scss">
  .skill-overview {
      display: flex;
      flex-direction: column;
      padding: 2rem;
      // animation: myfadeIn 1s ease 3s;
      // animation-fill-mode: forwards;
      // visibility: hidden;

      .contact {
        color: var(--primary-color)
      }

      .heading-secondary {
        text-transform: capitalize;
      }
      
      p {
        color: var(--text-color-secondary);
      }

      .skills {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 3rem;
        margin-bottom: 3rem;
        padding: 4rem 4rem;

        .card {
          position: relative;
          display: block;
          flex:1;
          text-align: center;
          background-color: var(--white-color);
          margin: 3rem;
          min-width: 300px;
          max-width: 400px;
          padding-top: 2.5em;
        
          .icon {
            color: var(--white-color);
            background-color: var(--primary-color);
            font-size: 4rem;
            width: 2em;
            height: 2em;
            border-radius: 1000px;
            position: absolute;
            left: 50%;
            top: -1em;
            transform: translateX(-50%);

            svg {
              position: relative;
              top: 50%;
              transform: translateY(-50%);
            }
          }
        }

        .list {
          display: flex;
          flex-direction: column;
          text-align: left;
          align-items: center;
          padding-bottom: 3rem;
          
          .heading-secondary {
            text-align: center;
          }

          .fa-check {
            margin-right: 2rem;
            color: var(--primary-color)
          }
        }
      }
  }


  @media (max-width: 768px) {
    .skill-overview{
      padding:0;

      .description {
        padding: 0 3rem;
      }

      .skills{
          padding: 10px;
          margin: inherit 0;

        .card {
          min-width: 400px;
          margin: 30px 0;
        }
      }
    }
  }

</style>
