<template>
  <div class="card f f-column f-md-row"> 

    <!-- Side pane -->
    <div class="side-pane f f-md-column col-2 col-lg-3 align-center justify-space-around justify-md-center">
        
        <!-- Owner -->
        <div class="f f-column align-center">
          <Avatar 
            class="m-10 mx-20"
            :size="80"
            :image="repo.owner.avatar_url"
            >
          </Avatar>
          <strong class="mb-10">
            {{ this.repo.owner.login }}
          </strong>
        </div>

        <!-- Status -->
        <div class="f f-wrap align-space-between justify-center mb-20">
          <!-- Stars -->
          <Tag label="Stars" :background="colors.star">
            <strong>
              {{ this.repo.stargazers_count }}
            </strong>
          </Tag>
          <!-- Issues -->
          <Tag label="Issues" :background="colors.issue">
            <strong>
              {{ this.repo.open_issues_count }}
            </strong>
          </Tag>
      </div>
      
    </div>

    <!-- Card content -->
    <div class="col-10 col-lg-9 f f-column justify-space-between">
      <div class="f f-column m-10 mx-20">
        <h3>
          {{ this.repo.name }}
        </h3>
        <p>
          {{ this.repo.description }}
        </p>
      </div>
      <div class="f m-10 mx-20">
        <span class="mt-auto ml-auto">
          Last updated: 
          <strong>
            {{ formattedDate }}
          </strong>
        </span>
      </div> 
    </div>
    
  </div>
</template>

<script>
import Tag from '@/components/ui/Tag';
import Avatar from '@/components/ui/Avatar';
import moment from 'moment';

export default {
  name: 'Card',
  components: {
    Tag,
    Avatar
  },
  props: {
    repo: {
      type: Object,
      default: () => ({
        name: 'TimeTravelStuff',
        updated_at: '2013-12-01T23:00:00.000Z',
        description: 'Wubba lubba dub dub',
        stargazers_count: 42,
        open_issues_count: 13,
        owner: {
          login: 'RickSanchez',
          avatar_url: 'https://bit.ly/2JYee2Y',
        },
        url: 'https://github.com/afuh/rick-and-morty-api'
      })
    }
  },
  data: () => ({
    colors: {
      issue: '#dd2d2d',
      star: '#317837'
    }
  }),
  computed: {
    formattedDate() {
      return moment(this.repo.updated_at).fromNow();
    }
  }
}
</script>

<style lang="scss">
.card {
  background: white;
  border-radius: .5rem;
  box-shadow: $box-shadow;
  overflow: hidden;
  margin: 1.5rem;
  min-height: 150px;
  .side-pane {
    color: lightgray;
    background-color: $primary;
  }
}
</style>