<template>
  <div class="skill-overview">
    <h3 class="heading-primary">Skills Overview</h3>
    <p class="description">
      I have more than 4 years' experience building web applications. <br/>
      Below is a quick overview of my main technical skill sets and tools I use. <br/>
    </p>
    <router-link tag="a" to="/resume">Check out my resume</router-link>

    <div class="skills">
      <div class="card">
      <div class="front-end">
        <div class="icon">
          <font-awesome-icon :icon="['fab','codepen']"/>
        </div>
        <div class="list">
          <div>
            <div class="heading-secondary">Frontend</div>
            <p v-for="(content, key) in skills.frontend" :key="key">
              <font-awesome-icon :icon="['fas','check']"/> {{content}} 
            </p>
          </div>
        </div>
      </div>
      </div>
      <div class="card">
        <div class="back-end">
          <div class="icon">
            <font-awesome-icon :icon="['fas','database']"/>
          </div>
          <div class="list">
            <div>
            <div class="heading-secondary">Backend</div>
            <p v-for="(content, key) in skills.backend" :key="key">
              <font-awesome-icon :icon="['fas','check']"/> {{content}} 
            </p>
          </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="others">
          <div class="icon">
            <font-awesome-icon :icon="['fas','random']"/>
          </div>
          <div class="list">
            <div>
            <div class="heading-secondary">Others</div>
            <p v-for="(content, key) in skills.others" :key="key">
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
export default {
  data () {
    return {
      skills: {
        frontend: ['Vue/Vuex/Router', 'Javascript', 'Nodejs', 'Webpack', 'HTML/CSS/SASS/LESS'],
        backend: ['Python/Flask/Bottle/pyscopg2', 'Mysql/Postgresql', 'Docker'],
        others: ['Linux/Bash', 'Github/Gitlab', 'Arago Hiro', 'Agile', 'DevOps']
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .skill-overview {
      display: flex;
      flex-direction: column;
      padding: 2rem;
      

      p {
        color: var(--text-color-secondary);
      }

      .skills {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 3rem;
        margin-bottom: 3rem;
        padding: 4rem 15rem;
        

        .icon {
          color: var(--white-color);
          background-color: var(--primary-color);
          font-size: 4rem;
          width: 2em;
          height: 2em;
          border-radius: 1000px;
          position: relative;
          left: 50%;
          top: -1em;
          transform: translateX(-50%);

          svg {
            position: relative;
            top: 50%;
            transform: translateY(-50%);
          }
        }

        .card {
          flex:1;
          text-align: center;
          background-color: var(--white-color);
          margin-right: 3rem;
        }

        :last-child {
            margin-right: 0;
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

</style>