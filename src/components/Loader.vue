<template>
  <Overlay>
    <Spinner></Spinner>
  </Overlay>
</template>

<script>
import Overlay from '@/components/Overlay';
import Spinner from '@/components/Spinner';

export default {
  name: 'Loader',
  components: {
    Overlay,
    Spinner
  }
}
</script>