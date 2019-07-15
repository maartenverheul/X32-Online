<template>
  <div>
    <nuxt-link to="/overview">Overview</nuxt-link>
    <nuxt-link to="/mixer">Mixer</nuxt-link>
    <nuxt-link to="/ch/01">Channel</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
div {
  background-color: $light1;
}
</style>

