<template>
  <div class="channelView">
    <x-channel style="grid-row: 1; grid-column: 1 / 2; box-sizing: border-box" color="red" :muted="false"></x-channel>
    <div style="grid-row: 1; grid-column: 2 / 9; background-color: green">1</div>
  </div>
</template>

<script>
export default {
  name: 'Channel',
  data: () => ({
    channel: null
  }),
  mounted(){
    this.channel = this.$route.params.channel;
  }
}
</script>

<style lang="scss" scoped>
.channelView {
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(8, 1fr);
}
</style>

