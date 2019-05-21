<template>
  <div class="f justify-center align-center">
    <div class="wrapper f">
      <Card></Card>
    </div>
  </div>
</template>

<script>
import Repos from '@/providers/Repos';
import Card from '@/components/Card';

export default {
  name: 'RepoList',
  components: [
    Card
  ],
  props: {
    /**
     * Unix timestamp in miliseconds.
     * Results will only show repos created after this date
     */
    since: {
      type: Number,
      default: new Date('2017-11-22').getTime()
    },
    /**
     * Sorting criterion
     * Can be one of 'stars', 'forks', 'help-wanted-issues', 'updated'
     */
    sort: {
      type: String,
      default: Best
    },
    /**
     * Results order
     * Can be one of 'asc' (ascending) or 'desc' (descending)
     * @default 'desc'
     */
    order: {
      type: String,
      default: 'desc'
    }
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
