<template>
  <nav>
    <div class='social'>
      <round-icon-button v-for="(links, val, id) in socialMedias" :key="id">
        <font-awesome-icon :icon="links.icon"/>  <!-- size="xs" -->
      </round-icon-button>
    </div>
    <div class='links'>
      <router-link tag="div" :to="links" v-for="(links,name,id) in routers" :key="id" >
        <span>{{name}}</span>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      routers: {
        about: "/",
        resume: "/resume",
        apps: "/apps",
        blog: "/blog",
        contact: "/contact",
        credits: "/credits"
      },
      socialMedias: [
        { url: "", icon: ['fab','twitter'] },
        { url: "", icon: ['fab','linkedin-in'] },
        { url: "", icon: ['fab','github-alt'] },
        { url: "", icon: ['far','paper-plane'] },
      ],
      showNavMobile: false
    }
  }
}
</script>

<style lang='scss'>
  nav {
    display: flex;
    padding: 0 10px; 
    align-items: center;
    position: sticky;
    top:0;
    z-index: 1;
    height: 50px;
    background-color: var(--primary-color-dark);
    color: var(--white-color);

    .social {
      display: flex;
      flex:5;
    }

    .links {
        display: flex;
        flex:10;
        height:100%;
        align-items: stretch;
        justify-content: flex-end;

        div {
          min-width: 7em;
          font-size: 1.4rem;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #7CA6D2;

          &:hover {
              cursor: pointer;
              color: #C1DBF0;
          }

          &.router-link-exact-active {
              font-weight: bold;
              color: var(--white-color);
              border-bottom: 4px solid var(--white-color);
              transition: .5s ease-out;
          }
        }
    }
  }
  @media (max-width: 850px) {

    nav {
      height: 100%;
      position: initial;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      
      .hamburger {
        display: block;
      }

      .social {
        flex:1;
        align-items: center;
      }

      .links {
        // display: none;
        flex-direction: column;
        justify-content: flex-start;
        width: 100%;
        flex: 5;

        span{
          margin: 1.5rem;
          font-size: 3rem;
        }
        // display:none;
      }
    }
  
  }
</style>