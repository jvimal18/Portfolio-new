<template>
  <div id="BlogList">
    <table CELLSPACING=0 CELLPADDING=6 BORDER=0 >
      
        <tr>
          <th>Topic</th>
          <th>Posted</th>
          <th>Views</th>
        </tr>
      

      <tbody>
        <router-link
          :to="`/blog/${blog.id}`"
          tag="tr"
          class="aBlog cursor-pointer"
          :id="`blog-${blog.id}`"
          v-for="blog in blogmetadata"
          :key="blog.id"
        >
          <td class="align-left">
              <div class="title">{{blog.title}}</div>
              <div class="description">{{blog.description}}</div>
          </td>
          <td class="align-center">
            <div class="posted">{{blog.posted}}</div>
          </td>
          <td class="align-center">
            <div class="views">{{blog.views}}</div>
          </td>
        </router-link>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["blogmetadata"])
  },
  methods: {}
};
</script>

<style lang="scss">
#BlogList {

  table {
    width: 100%;
    background-color: var(--white-color);
    border-spacing: 5px;
    padding: 0 2em;

    .align-left {
      text-align: left;
    }

    
    .align-center {
      text-align: center;
    }
    
    .align-right {
      text-align: right;
    }

    th {
      font-size: 2rem;
      font-weight: 400;
      padding: 1rem 0;
      box-shadow: 0 3px 5px -5px #333;
      text-align: left;
      border-collapse: collapse;
    }
  }

  .aBlog {
    margin: 0.5rem 2rem;
    box-shadow: 0 3px 5px -5px #333;
    padding: 2rem 2rem;

    &:hover {
      transform: translate(-1px, -1px);
    }

    .title {
      font-size: 2rem;
      font-weight: 500;
      font-family: "Poppins", sans-serif;
    }

    .description {
      padding-left: 2rem;
    }
  }
}
</style>