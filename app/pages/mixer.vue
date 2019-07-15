<template>
  <div class="mixer">
    <v-channel color="red" :muted="false"></v-channel>
    <v-channel color="red" :muted="false"></v-channel>
    <v-channel color="red" :muted="false"></v-channel>
    <v-channel color="red" :muted="false"></v-channel>
  </div>
</template>

<script>
import config from '@/config'
export default {
  name: 'Mixer',
  data: () => ({
    test: config.test
  })
}
</script>

<style lang="scss" scoped>

</style>

