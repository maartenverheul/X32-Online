<template>
    <div id="settings" class="content">
      <div class="nav">
        <div class="button-group fill">
          <div class="btn">Device</div>
          <div class="btn active">About</div>
          <div class="btn">Version</div>
        </div>
      </div>
      <div class="settings-content">
        <p>Hoi</p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Settings',
  data () {
    return {
      sidebar: {}
    }
  }
}
</script>

<style scoped lang="scss">
#settings { 
  $radius: 7px;
  background-color: #ccc;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: stretch;
  align-self: stretch;
  align-content: flex-start;

  .button-group {
    background-color: #ccc;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 400px;

    .btn {
      display: inline-block;
      text-align: center;
      padding: $radius;
      cursor: pointer;
      border: 3px outset #ececec;
      &:first-child{ 
        border-top-left-radius: $radius;
        border-bottom-left-radius: $radius;
      }
      &:last-child{ 
        border-top-right-radius: $radius;
        border-bottom-right-radius: $radius;
      }
      &.active {
        border-style: inset;
      }
    }
    &.fill .btn{
      flex-grow: 1;
    }
  }
  .nav {
    padding: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .settings-content {
    flex-grow: 1;
  }
}
</style>
