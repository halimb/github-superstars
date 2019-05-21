<template>
  <div class="f justify-center align-center">
    <Loader v-if="isLoading"></Loader>
    <div v-else class="wrapper f">
      <Card></Card>
    </div>
  </div>
</template>

<script>
import Repos from '@/providers/Repos';
import Card from '@/components/Card';
import Loader from '@/components/ui/Loader';

export default {
  name: 'ListingPage',
  components: {
    Card,
    Loader,
  },
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
      default: 'stars'
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
  data: () => ({
    repos: [],
    isLoading: true
  }),
  mounted() {
    this.fetch();
  },
  methods: {
    async fetch() {
      let startDate = new Date(this.since).toISOString().slice(0, 10);
      let results = await Repos.get({
        q: `created:>${startDate}`,
        sort: this.sort,
        order: this.order
      });
      
      if (results.error) {
        this.showErrorMessage(results.error);
        return;
      }

      this.repos = results;
      this.isLoading = false;
    },
    showErrorMessage() { 
      // TODO - implement
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
