<template>
  <div class="avatar">
    <img :src="image || getImage('github.svg')" alt="">
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    image: {
      type: String,
    }
  }
}
</script>

<style lang="scss">
</style>
