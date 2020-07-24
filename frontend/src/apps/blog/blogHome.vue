<template>
  <div id="BlogList">
    <div v-for="(category, idx) in blogMeta" :key="idx">
      <div v-if="category.content.length > 0">
        <!-- <div class="blog-category"> {{category.name}} </div> -->
        <table CELLSPACING=0 CELLPADDING=6 BORDER=0 >
          
            <tr>
              <th>Topic</th>
              <th>Posted</th>
              <th>Views</th>
              <th>Type</th>
            </tr>
          

          <tbody>
            <tr
              tag="tr"
              class="aBlog cursor-pointer"
              :id="`blog-${blog.id}`"
              v-for="(blog, blogidx) in category.content"
              :key="blog.id"
              @click="incrementView(blog.id, category.name, idx, blogidx)"
            >
              <td class="align-left">
                  <div class="title">{{blog.title}}</div>
                  <div class="description">{{blog.description}}</div>
              </td>
              <td class="align-left">
                <div class="posted">{{blog.posted}}</div>
              </td>
              <td class="align-left">
                <div class="views">{{blog.views}}</div>
              </td>
              <td class="align-left">
                <div class="views">{{blog.type}}</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import 'vuex'

import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('Blog')

export default {
  computed: {
    ...mapGetters(["blogMeta"])
  },
  methods: {
    incrementView(id, name, idx, blogidx) {
      this.axios.post('incrementBlogView', {
          "id": id,
          "name": name
      }).then(res => {
        this.blogMeta[idx]['content'][blogidx]['views'] = res.data.views
      })
      this.$router.push({ path: `/blog/${name}`, query: { "id":id } })
    }
  },
  created() {
  }
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