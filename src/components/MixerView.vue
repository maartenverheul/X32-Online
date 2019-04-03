<template>
  <div id="bankpage" class="content">
    <ChannelStrip v-on:click.native="closeSidebar"/>
    <SideBar ref="sidebar"/>
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
<style scoped lang="scss">
#bankpage {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: stretch;
  align-self: stretch;
}
</style>
