<template>
  <div 
    class="avatar"
    :style="{
      height: `${size}px`,
      width: `${size}px`
    }"
    >
    <div class="avatar-img">
      <img
        alt="avatar"
        ref="imageElement"
        @load="onImageLoad"
        :src="image || getImage('github.svg')"
        :class="imageClass"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    image: {
      type: String,
    },
    size: {
      type: Number,
      default: 50
    }
  },
  computed: {
    imageClass() {
      return `avatar-img--${this.isLandscape ? 'landscape' : 'portrait'}`
    }
  },
  methods: {
    onImageLoad() {
      let imageElement = this.$refs.imageElement;
      this.isLandscape = imageElement.width > imageElement.height;
    }
  }
}
</script>

<style lang="scss">
.avatar {
  display: inline-block;
  .avatar-img {
    &--portrait {
      width: 100%;
      height: auto;
    }
    &--landscape {
      width: auto;
      height: 100%;
    }
    img {
      display:block;
      max-width: unset;
      border-radius: 1000px;
      background: white;
      box-shadow: $box-shadow;
    }
  }
}
</style>
