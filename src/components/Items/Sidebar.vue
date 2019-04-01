<template>
  <div :class="{'expanded': expanded}">
    <div class="mutes component" style="margin-top: 10px;" v-on:click="open">
      <span class="h1">MUTE</span>
      <div class="btn-group">
        <div class="btn"></div>
        <div class="btn active"></div>
        <div class="btn active"></div>
        <div class="btn"></div>
        <div class="btn active"></div>
        <div class="btn"></div>
      </div>
    </div>
    <div class="assigns component">
      <span class="h1">ASSIGN</span>
      <div class="btn-group">
        <div class="btn active"></div>
        <div class="btn active"></div>
        <div class="btn active"></div>
        <div class="btn active"></div>
        <div class="btn"></div>
        <div class="btn"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  data () {
    return {
      expanded: false
    }
  },
  methods: {
    open () {
      this.expanded = true
    },
    close () {
      this.expanded = false
    }
  }
}
</script>

<style scoped>
.sidebar {
  padding: 0;
  background-color: #111;
  width: 173px;
  height: 100%;
  transition: width 0.1s ease-out;
}
.sidebar.expanded {
  width: 800px;
}
.sidebar .component{
  text-align: center;
  cursor: pointer;
}
.sidebar .component .h1{
  color: white;
  font-size: 1.3rem;
}
.sidebar .component .btn-group {
  margin: 10px 1px;
}
.sidebar .component .btn {
  margin: 2px;
  width: 25%;
  height: 20px;
  display: inline-block;
}
.sidebar .component .btn {
  background-color: #333333;
  border: 2px solid #424242;
}
.sidebar .mutes .btn.active {
  background-color: #e05555;
  border: 2px solid #7b0e0e;
}
.sidebar .assigns .btn.active {
  background-color: #e09c55;
  border: 2px solid #755100;
}
</style>
