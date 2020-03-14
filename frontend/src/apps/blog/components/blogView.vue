<template>
  <div id="blogView">
    {{blogData.title}},
    {{blogData.description}}
    {{$route.params.id}}
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      blogId: Number,
      blogData: Object
    };
  },
  computed: {
    ...mapGetters(["blogmetadata"])
  },
  mounted() {
    this.blogId = this.$route.params.id;
    this.blogData = this.blogmetadata[this.blogId];
  },
  methods: {}
};
</script>

<style>
</style>