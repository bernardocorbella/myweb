<template>
  <component class="test-title" :is="as"><slot /></component>
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

<style>
.test-title {
  font-size: var(--size-scale-base);
  color: black;
  background: rgba(250, 25, 50, 0.25);
}
</style>
