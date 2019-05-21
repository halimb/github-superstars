<template>
  <Overlay>
    <Spinner></Spinner>
  </Overlay>
</template>

<script>
import Overlay from '@/components/ui/Overlay';
import Spinner from '@/components/ui/Spinner';

export default {
  name: 'Loader',
  components: {
    Overlay,
    Spinner
  }
}
</script>