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
    color: {
      type: String
    },
    size: {
      type: Number,
      default: 16
    }
  },
  computed: {
    _color() {
      return this.color || this.theme.colors.dark
    },
    style() {
      return {
        border: `1px solid ${this._color}`,
        backgroundColor: '#fff',
        fontSize: `${this.size}px`
      }
    } 
  }
}
</script>

<style lang="scss">
.tag {
  .tag-content {
    display: inline-block;
    border-radius: .3rem;
    padding: .2rem 1rem;
  }
}
</style>