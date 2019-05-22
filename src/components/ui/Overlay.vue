<template>
  <div class="overlay f align-center justify-center">
    <slot></slot>  
  </div>
</template>

<script>
export default {
  name: 'Overlay'
}
</script>

<style lang="scss">
.overlay {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  position: fixed;
  background: rgba($dark, .5);
}
</style>
