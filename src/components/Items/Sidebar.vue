<template>
  <div :class="{'sidebar': true, 'expanded': expanded}">
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
  name: "SideBar",
  data() {
    return {
      expanded: false
    };
  },
  methods: {
    open() {
      this.expanded = true;
    },
    close() {
      this.expanded = false;
    }
  }
};
</script>

<style scoped lang="scss">
.sidebar {
  padding: 0;
  background-color: #111;
  width: 112px;
  height: 100%;
  transition: width 0.1s ease-out;

  &.expanded {
    width: 300px;
  }
  .component {
    text-align: center;
    cursor: pointer;
  }
  .component {
    .h1 {
      color: white;
      font-size: 1.3rem;
    }
    .btn-group {
      margin: 10px 1px;
    }
    .btn {
      margin: 2px;
      width: 25%;
      height: 20px;
      display: inline-block;
      background-color: #333333;
      border: 2px outset #424242;
      border-radius: 3px;
    }

    &.mutes {
      .btn {
        &.active {
          background-color: #e05555;
          border-color: #ff4444;
        }
      }
    }
    &.assigns {
      .btn {
        &.active {
          background-color: #e09c55;
          border-color: #d69708;
        }
      }
    }
  }
}
</style>
