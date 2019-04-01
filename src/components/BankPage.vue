<template>
    <div id="bankpage">
      <ChannelStrip v-on:click.native="closeSidebar"/>
      <SideBar class="sidebar" ref="sidebar"/>
    </div>
</template>

<script>
import SideBar from '@/components/items/SideBar'
import ChannelStrip from '@/components/items/ChannelStrip'
export default {
  name: 'BankPage',
  components: {
    SideBar,
    ChannelStrip
  },
  data () {
    return {
      sidebar: {}
    }
  },
  methods: {
    closeSidebar () {
      this.$refs.sidebar.close();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
#content {
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: stretch;
  align-self: stretch;
}
.channelstrip {
  flex-grow: 1
}
// .sidebar{

// }
</style>
