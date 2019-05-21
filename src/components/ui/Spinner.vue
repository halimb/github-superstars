<template>
  <div class="spinner"></div>
</template>

<script>
export default {
  name: 'Spinner'
}
</script>

<style lang="scss">
$animation-duration: 1.2s;
$border-width: 8px;

@-webkit-keyframes rotate-infinite {
  0% {
    border-width: $border-width;
    -webkit-transform: rotate(0deg);
  }

  50% {
    border-width: 0px;
    -webkit-transform: rotate(360deg);
  }

  100%  {
    border-width: $border-width;
    -webkit-transform: rotate(720deg);
  }
}

.spinner {
  -webkit-animation: rotate-infinite $animation-duration linear infinite;
  border: 12px solid transparent;
  border-right-color: rgba(darken($primary, 20), .7);
  border-radius: 50%;
  display: inline-block;
  height: 100px;
  width: 100px;
}
</style>
