<template>
  <div id="app" class="noselect" style="height: 100vh;">
    <TopBar />
    <router-view/>
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

<style>
html, body{
  padding:0;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
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
