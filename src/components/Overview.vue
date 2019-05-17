<template>
  <div class="faderoverviewpage">
    <div id="row1" style="grid-column: 1; grid-row: 1;">1</div>
    <div id="row2" style="grid-column: 1; grid-row: 2;">2</div>
    <div id="row3" style="grid-column: 1; grid-row: 3;">3</div>
    <div id="row4" style="grid-column: 1; grid-row: 4;">4</div>
  </div>
</template>

<script>
export default {
  name: 'FaderOverviewPage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.faderoverviewpage {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  height: 100%;

  div {
    border-bottom: 1px dashed #333;
    box-sizing: border-box;
    padding: 0.5rem;
  }
}
</style>
