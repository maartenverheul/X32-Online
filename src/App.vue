<template>
  <!-- <div id="app" class="noselect" style="height: 100vh;"> -->
  <div id="app" class="noselect" style="height: 100vh;">
    <TopBar />
    <router-view />
  </div>
</template>

<script>
import TopBar from '@/components/items/TopBar'
export default {
  name: 'App',
  components: {
    TopBar
  }
}
</script>

<style lang="scss">
html, body{
  padding:0;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
#app {
  width: 100vw;
  height: 100vh;
  background-color: #222;
  /* overflow: hidden; */
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 20fr;
}
.content {
  
}
button{
  cursor: pointer;
}
*:focus {
  outline: 0;
}
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
}
</style>
