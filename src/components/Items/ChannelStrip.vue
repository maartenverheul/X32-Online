<template>
  <div class="channelstrip" style="color: white;">
    <Channel class="ch" chnr="1"/>
    <Channel class="ch" chnr="2"/>
    <Channel class="ch" chnr="3"/>
    <Channel class="ch" chnr="4"/>
    <Channel class="ch" chnr="5"/>
    <Channel class="ch" chnr="6"/>
    <Channel class="ch" chnr="7"/>
    <Channel class="ch" chnr="8"/>
    <Channel class="ch" chnr="9"/>
    <Channel class="ch" chnr="10"/>
    <Channel class="ch" chnr="11"/>
    <Channel class="ch" chnr="12"/>
    <Channel class="ch" chnr="13"/>
    <Channel class="ch" chnr="14"/>
    <Channel class="ch" chnr="15"/>
    <Channel class="ch" chnr="16"/>
		<Channel class="ch" chnr="17"/>
    <Channel class="ch" chnr="18"/>
    <Channel class="ch" chnr="19"/>
    <Channel class="ch" chnr="20"/>
    <Channel class="ch" chnr="21"/>
    <Channel class="ch" chnr="22"/>
    <Channel class="ch" chnr="23"/>
    <Channel class="ch" chnr="24"/>
    <Channel class="ch" chnr="25"/>
    <Channel class="ch" chnr="26"/>
    <Channel class="ch" chnr="27"/>
    <Channel class="ch" chnr="28"/>
    <Channel class="ch" chnr="29"/>
    <Channel class="ch" chnr="30"/>
    <Channel class="ch" chnr="31"/>
    <Channel class="ch" chnr="32"/>
  </div>
</template>

<script>
import Channel from "./Channel";
export default {
	name: 'ChannelStrip',
	components: {
		Channel
	},
  data () {
    return {
      expanded: false
    }
  }
}
</script>

<style lang="less" scoped>
.channelstrip {
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	background-color: #333;
	overflow-x: scroll;
}
.ch {
	flex-shrink: 0;
	border-right: 1px solid black;
}
.ch:nth-child(odd){ background-color: #777; }
.ch:nth-child(even){ background-color: #888; }

/* width */
.channelstrip::-webkit-scrollbar {
	height: 10px;
}

/* Track */
.channelstrip::-webkit-scrollbar-track {
  background: #555; 
}

/* Handle */
.channelstrip::-webkit-scrollbar-thumb {
  background: #333; 
}

/* Handle on hover */
.channelstrip::-webkit-scrollbar-thumb:hover {
  background: #333; 
}
</style>
