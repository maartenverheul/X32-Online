<template>
  <div class="channel">
    <div>Item 1</div>
    <div style="flex-grow: 1">Item 2</div>
    <div>Ch {{channelnr}}</div>
  </div>
</template>

<script>
export default {
  name: 'Channel',
  props: {
    chnr: {
      type: String,
      default() {
        return 0
      },
      validator(value){
        return value.length > 0 && value.length <= 2;
      }
    }
  },
  data () {
    return {
      channelnr: this.chnr,
    }
  },
  created() {
    if(this.channelnr.length == 1) this.channelnr = '0' + this.channelnr;
  }
}
</script>

<style scoped>
.channel {
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3px;
}
</style>
