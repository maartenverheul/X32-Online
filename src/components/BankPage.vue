<template>
  <div class="bankpage" style="height: calc(100% - 47px)">
    <SideBar id="sidebar"/>
  </div>
</template>

<script>
import SideBar from '@/components/items/SideBar'
export default {
  name: 'BankPage',
  components: {
    SideBar
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#sidebar{
  position: fixed;
  right: 0;
}
</style>
