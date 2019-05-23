<template>
  <div class="tag">
    <span
      class="tag-content"
      :style="style"
      >
        {{ this.label }} 
        <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Tag',
  props: {
    label: {
      type: String
    },
    background: {
      type: String
    },
    color: {
      type: String,
      default: '#eee'
    },
    size: {
      type: Number,
      default: 13
    }
  },
  computed: {
    _background() {
      return this.background || this.theme.colors.dark
    },
    style() {
      return {
        color: this.color,
        backgroundColor: this._background,
        fontSize: `${this.size}px`
      }
    } 
  }
}
</script>

<style lang="scss">
.tag {
  display: inline-block;
  margin: .2rem;
  .tag-content {
    border-radius: 1000px;
    padding: .2rem .5rem;
    box-shadow: $box-shadow;
  }
}
</style>