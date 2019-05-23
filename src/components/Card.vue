<template>
  <div class="card f"> 
    <div class="side-pane col-3 f f-column justify-center align-center">
      <Avatar 
        size="100"
        :src="repo.owner.avatar_url"
        >
      </Avatar>
    </div>
    <div class="col-9 f f-column justify-center">
      <h3>
        {{ this.repo.name }}
      </h3>
      <p>
        {{ this.repo.description }}
      </p>
      <div class="f">
        <Tag
          label="Stars:"
        >
          <strong>
            {{ this.repo.stargazers_count }}
          </strong>
        </Tag>

        <Tag
          label="Issues:"
        >
          <strong>
            {{ this.repo.open_issues_count }}
          </strong>
        </Tag>
        <span>
          Last updated at {{ formattedDate }}
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
  height: 300px;
  .side-pane {
    background-color: $primary;
  }
}
</style>