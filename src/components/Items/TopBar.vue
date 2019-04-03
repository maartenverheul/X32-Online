<template>
  <div class="topbar">
    <div class="btn-group right">
      <router-link tag="button" :to="{name: 'overview'}" class="btn"><i class="material-icons">apps</i></router-link>
      <router-link tag="button" :to="{name: 'mixerview'}" class="btn"><i class="material-icons">view_week</i></router-link>
      <router-link tag="button" :to="{name: 'channelview', params: { channel: '01' }}" class="btn"><i class="material-icons">remove_red_eye</i></router-link>
    </div>
    <div class="props">
      <div class="name">Ch 01</div>
      <div class="db">-10 db</div>
      <div class="type">Fader</div>
    </div>
    <div class="btn-group right left">
      <router-link tag="button" :to="{name: 'settingsview'}" class="btn"><i class="material-icons">settings</i></router-link>
      <router-link tag="button" :to="{name: 'mixerview'}" class="btn"><i class="material-icons">linear_scale</i></router-link>
      <router-link tag="button" :to="{name: 'channelview', params: { channel: '01' }}" class="btn"><i class="material-icons">album</i></router-link>
    </div>
    <div class="presets">Presets</div>
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

<style lang="scss">
$radius: 7px;
.topbar {
  background-color: #ccc;
  margin: 0;
  border-bottom: 1px solid #999;
  /* box-shadow: inset 0 0 100px black; */
  box-shadow: 0px 0px 20px -1px rgba(0,0,0,1.0);
  z-index: 1;
  height: 50px;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  overflow-y: hidden;

  .btn-group {
    height: 100%;
    &.right .btn:last-child {
      border-right: 1px solid #999;
    }
    &.left .btn:first-child{
      border-left: 1px solid #999;
    }
    .btn {
      border: 0;
      background-color: #ccc;
      padding: 0 17px;
      height: 100%;

      &:not(:last-child){
        margin-right: -4.4px;
        border-right: 1px solid #999;
      }

      i{
        margin: 0;
        vertical-align: middle;
        font-size: 2rem;
        line-height: 0px;
      }
      &.router-link-exact-active, &:active {
        background-color: #bbb;
      }
    }
  }

  .props {
    flex-grow: 1;
    background-color: #333;
    border-radius: $radius;
    margin: 7px;
    margin-right: 10px;
    padding: 0 15px 0 7px;
    border: 2px inset #5a5a5a;
    cursor: pointer;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    * {
      text-align: center;
    }
    .name {
      color: #fff;
    }
    .db {
      color: #00ff00;
      flex-grow: 1;
    }
    .type {
      color: #777;
    }
  }
  .presets {
    width: 120px;
    background-color: #333;
    border-radius: $radius;
    margin: 7px;
    margin-right: 10px;
    padding: 0 15px 0 7px;
    border: 2px outset #5a5a5a;
    color: #ccc;

    display: flex;
    align-items: center;
    align-content: center;
    flex-wrap: nowrap;
    justify-content: center;
    cursor: pointer;
  }
}
</style>
