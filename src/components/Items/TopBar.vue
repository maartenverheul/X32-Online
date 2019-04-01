<template>
  <div class="topbar">
    <div class="btn-group">
      <router-link tag="button" :to="{name: 'faderoverviewpage'}" class="btn"><i class="material-icons">apps</i></router-link>
      <router-link tag="button" :to="{name: 'bankpage'}" class="btn"><i class="material-icons">view_week</i></router-link>
      <router-link tag="button" :to="{name: 'channelpage', params: { channel: '01' }}" class="btn"><i class="material-icons">remove_red_eye</i></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
.topbar {
  margin: 0;
  border-bottom: 1px solid #999;
  /* box-shadow: inset 0 0 100px black; */
  box-shadow: 0px 0px 20px -1px rgba(0,0,0,1.0);
  z-index: 1;
}
.topbar .btn-group {
  display: inline-block;
}
.topbar .btn-group .btn {
  border: 0;
  background-color: #ccc;
  margin-right: -4px;
  border-right: 1px solid #999;
  padding: 7px 17px;
}
.topbar .btn-group .btn i{
  margin: 0;
  vertical-align: bottom;
  font-size: 2rem;
}
.topbar .btn-group .btn.router-link-exact-active {
  background-color: #bbb;
}
.topbar .btn-group .btn:active {
  background-color: #bbb;
}
.topbar {
  background-color: #ccc;
}
</style>
