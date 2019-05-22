<template>
  <div class="spinner-container">
    <div class="spinner"></div>
    <div class="spinner-bg"></div>
  </div>
</template>

<script>
export default {
  name: 'Spinner'
}
</script>

<style lang="scss" scoped>
$spinner-size: 100px;
$spinner-color: rgba(darken($primary, 20), .7);
$border-width: $spinner-size / 6;
$bg-border-width: $border-width / 3;
$animation-duration: 2s;
$animation-properties: $animation-duration cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;

@keyframes rotate-and-fade {
  0% {
    border-width: $border-width;
    transform: rotate(0deg);
  }

  50% {
    border-width: 0px;
    padding: $border-width + $bg-border-width;
    transform: rotate(360deg);
  }

  100%  {
    border-width: $border-width;
    transform: rotate(720deg);
  }
}

@keyframes color-fade {
  10% {
    border-color: rgba($dark, .4);
  }

  50% {
    border-color: $spinner-color; 
  }

  90% {
    border-color: rgba($dark, .4);
  }

}

@keyframes rotate-simple {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.spinner-container {
  transform: rotate(45deg);
  transform-origin: 50%;
  padding-top: $bg-border-width;
  padding-left: $bg-border-width;
  width: $spinner-size + 7 * $bg-border-width;
  height: $spinner-size + 7 * $bg-border-width;
  animation: rotate-simple $animation-duration * 1.2 linear infinite;
}

.spinner {
  animation: rotate-and-fade $animation-properties ;
  border: $border-width solid transparent;
  border-top-color: $spinner-color;
  border-radius: 50%;
  height: $spinner-size - $bg-border-width * 2;
  width: $spinner-size - $bg-border-width * 2;
  position: absolute;
  padding: $bg-border-width;
}

.spinner-bg {
  @extend .spinner;
  margin-top: -1 * $bg-border-width;
  margin-left: -1 * $bg-border-width;
  padding: 2 * $bg-border-width; 
  border: $bg-border-width solid rgba($dark, .4);
  animation: color-fade $animation-properties;
  height: $spinner-size + $bg-border-width * 2;
  width: $spinner-size + $bg-border-width * 2;
}
</style>
