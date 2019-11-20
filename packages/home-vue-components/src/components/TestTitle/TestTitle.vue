<template>
  <component class="test-title" :as="is"><slot /></component>
</template>

<script>
export default {
  name: 'TestTitle',
  props: {
    as: {
      type: String,
      default: 'h1',
    },
  },
}
</script>

<style lang="scss">
.test-title {
  font-size: $size-scale-base;
  color: black;
  background: rgba(250, 25, 50, 0.25);
}
</style>
