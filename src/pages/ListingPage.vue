<template>
  <div>
    <Loader v-if="isLoading"
      :message="loaderMessage"
    >
    </Loader>
    <div class="wrapper f justify-center align-center">
      <div class="col-12 col-lg-10">
        <Card v-for="(repo, i) in repositories" 
          :key="i"
          :repo="repo"
        >
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
import Repos from '@/providers/Repos';
import Card from '@/components/Card';
import Loader from '@/components/ui/Loader';
import moment from 'moment';

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
      default: moment().subtract(30, 'days').valueOf()
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
    repositories: [],
    isLoading: false,
    page: 1
  }),
  computed: {
    loaderMessage() {
      return `Loading ${this.page > 1 ? 'even more' : ''} repositories...`
    }
  },
  created() {
    window.addEventListener('scroll', this.onScroll);
  },
  mounted() {
    this.fetch();
  },
  methods: {
    // TODO - Add throttling
    onScroll() {
      if (this.isLoading) {
        return;
      }
      let anticipationBias = 200;
      let scrollLimit = document.documentElement.scrollHeight - anticipationBias;
      let shouldFetchMore = window.scrollY + window.innerHeight > scrollLimit
      
      if (shouldFetchMore) {
        this.fetch();
      }
    },
    async fetch() {
      this.isLoading = true;
      let startDate = new Date(this.since).toISOString().slice(0, 10);
      let results = await Repos.get({
        q: `created:>${startDate}`,
        sort: this.sort,
        order: this.order,
        page: this.page
      });
      this.isLoading = false

      if (results.error) {
        this.showErrorMessage(results.error);
        return;
      }

      this.repositories = this.repositories.concat(results);
      this.page++;
    },
    showErrorMessage() { 
      // TODO - implement
    }
  }
}
</script>