<template>
  <div class="body">
    <x-header class="header" style="flex-shrink: 1"/>
    <nuxt style="flex-grow: 1"/>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>


<style>
html, body {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  overflow-y: hidden;
  box-sizing: border-box;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>
<style lang="scss" scoped>
.body{
  display: flex;
  height: 100vh;
  flex-direction: column;
  .header {
    height: 32px;
  }
}
</style>
