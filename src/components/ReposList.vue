<template>
  <div class="f justify-center align-center">
    <div class="wrapper f">
    </div>
  </div>
</template>

<script>
import Repos from '@/providers/Repos';

export default {
  name: 'HelloWorld',
  props: {
  },
  mounted() {
    this.fetch();
  },
  methods: {
    async fetch() {
      let repos = await Repos.get({
        q: 'created:>2000-01-21',
        sort: 'stars',
        order: 'desc'
      });
      console.log(repos)
      return repos;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.wrapper {
  width: 100%;
  background: $primary;
  div {
    border: 1px solid green;
  }
  div:nth-child(2) {
    border: blue;
  }
}
</style>
