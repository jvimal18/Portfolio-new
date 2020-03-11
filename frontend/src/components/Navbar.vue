<template>
  <nav>
    <div class='social'>
      <round-icon-button>
        <font-awesome-icon :icon="['fab','twitter']"/>  <!-- size="xs" -->
      </round-icon-button>
      <round-icon-button>
        <font-awesome-icon :icon="['fab','linkedin-in']"/>
      </round-icon-button>
      <round-icon-button>
        <font-awesome-icon :icon="['fab','github-alt']"/>
      </round-icon-button>
      <round-icon-button>
        <font-awesome-icon :icon="['far','paper-plane']"/>
      </round-icon-button>
    </div>
    <div class='links'>
      <ul>
        <router-link tag="li" :to="links" v-for="(links,name,id) in routers" :key="id" >
          <span>{{name}}</span>
        </router-link>
      </ul>
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
      }
    }
  }
}
</script>

<style lang='scss'>
nav {
    display: flex;
    justify-content: space-between;
    padding: 0 10px; 
    align-items: center;
    position: sticky;
    height: 50px;
    background-color: var(--primary-color-dark);
    color: var(--white-color);

    nav div {
        width: 50%;
    }

    .social {
        display: flex;
        flex:1;

        :first-child {
            margin-left: 0px;
        }

        :last-child {
            margin-right: 0px;
        }
    }

    .links {
        flex:1;
        height:100%;
    
        ul {
            height:100%;
            text-align: right;
        }

        li {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 1.4rem;
            min-width: 7em;
            height: 100%;
            margin-left: 5px;
            margin-right: 5px;
            text-transform: uppercase;
            text-decoration: none;
            color: #7CA6D2;

            &:hover {
                cursor: pointer;
                color: #C1DBF0;
            }

            &:first-child {
            margin-left: 0px;
            }

            &:last-child {
                margin-right: 0px;
            }

            &.router-link-exact-active {
                font-weight: bold;
                color: var(--white-color);
                border-bottom: 4px solid var(--white-color);
            }
        }
    }
}
</style>