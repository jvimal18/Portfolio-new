<template>
  <div id="blogView">
    <div class="blog-header">
      <router-link :to="{path: '/blog'}" tag="div" class="back-button cursor-pointer">
        <font-awesome-icon :icon="['fas', 'arrow-circle-left']" size="2x" />
      </router-link>
      <div>
      <span class="label">Author:</span> {{owner}}(github)
      </div>
      <div>
      <span class="label">Created:</span> {{created}}
      </div>
    </div>

    <div id="blogContent" v-html="blogContent"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogId: String,
      blogData: Object,
      blogContent: "",
      owner: "",
      created: "",
      styleSheet: "",
      blogCategory: undefined
    };
  },
  watch: {
    blogId: {
      handler: "getBlogContent",
      // immediate: true
    }
  },
  activated () {
    this.blogId = this.$route.query.id;
    this.blogCategory = this.$route.params.name
  },
  methods: {
    getBlogContent() {
      this.axios.get('getblogcontent', {
        params: {
          "id": this.blogId
        }
      })
      .then(response => {
        this.blogContent = response.data.div
        this.owner = response.data.owner
        this.created = response.data.created_at
        this.addCss(response.data.stylesheet)
      })
    },
    addCss(stylesheet) {
      let file = document.createElement('link');
      file.rel = 'stylesheet';
      file.href = stylesheet
      document.head.appendChild(file)
    }
  }
};
</script>

<style lang="scss">
.label {
  font-size: 20px;
  font-weight: 600;
}

.blog-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 3rem 1rem;
}

#blogContent {
  padding: 1rem 3rem;
  text-align: left;

    .gist .highlight {
      font-size: 14px;
    }

    .gist-data {
      padding: 5rem;
    }

    .gist-meta {
      display: none;
    }
}
</style>
