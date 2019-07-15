<template>
  <div class="channel" :style="{ 'background-color': color }">
    <p class="scribble">Scribble</p>
    <p class="indicators">Indicators</p>
    <p class="faders">Faders</p>
    <p class="name">Ch01</p>
  </div>
</template>

<script>
export default {
  name: "Channel",
  props: {
    color: {
      type: String,
      default: "red"
    },
    muted: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.channel {
  display: flex;
  flex-direction: column;
  .scribble {
    padding: 10px;
  }
  .indicators {
    padding: 10px;
  }
  .faders {
    flex-grow: 1;
    padding: 10px;
  }
  .name {
    text-align: center;
    padding: 10px;
  }
}
</style>

