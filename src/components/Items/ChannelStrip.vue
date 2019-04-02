<template>
  <div class="channelstrip" style="color: white; width: 1px">
    <Channel :key="ch.id" v-for="ch in channels" :props="ch"/>
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
      expanded: false,
      channels: [
        { id: '01', scribble: {color: 'black',   inverted: false, text: 'Aux 1', icon: ''}, mute: {self: false, group: false}},
        { id: '02', scribble: {color: 'red',     inverted: false, text: 'Aux 2', icon: ''}, mute: {self: false, group: false}},
        { id: '03', scribble: {color: 'green',   inverted: false, text: 'Aux 3', icon: ''}, mute: {self: false, group: false}},
        { id: '04', scribble: {color: 'yellow',  inverted: false, text: 'Aux 4', icon: ''}, mute: {self: false, group: false}},
        { id: '05', scribble: {color: 'blue',    inverted: false, text: 'Aux 5', icon: ''}, mute: {self: false, group: false}},
        { id: '06', scribble: {color: 'magenta', inverted: false, text: 'Aux 6', icon: ''}, mute: {self: false, group: false}},
        { id: '07', scribble: {color: 'cyan',    inverted: false, text: 'Aux 7', icon: ''}, mute: {self: false, group: false}},
        { id: '08', scribble: {color: 'white',   inverted: false, text: 'Aux 8', icon: ''}, mute: {self: false, group: true}},
        { id: '09', scribble: {color: 'black',   inverted: true, text: 'Aux 9',  icon: ''}, mute: {self: false, group: true}},
        { id: '10', scribble: {color: 'red',     inverted: true, text: 'Aux 10', icon: ''}, mute: {self: false, group: true}},
        { id: '11', scribble: {color: 'green',   inverted: true, text: 'Aux 11', icon: ''}, mute: {self: false, group: false}},
        { id: '12', scribble: {color: 'yellow',  inverted: true, text: 'Aux 12', icon: ''}, mute: {self: false, group: false}},
        { id: '13', scribble: {color: 'blue',    inverted: true, text: 'Aux 13', icon: ''}, mute: {self: false, group: false}},
        { id: '14', scribble: {color: 'magenta', inverted: true, text: 'Aux 14', icon: ''}, mute: {self: false, group: false}},
        { id: '15', scribble: {color: 'cyan',    inverted: true, text: 'Aux 15', icon: ''}, mute: {self: false, group: false}},
        { id: '16', scribble: {color: 'white',   inverted: true, text: 'Aux 16', icon: ''}, mute: {self: false, group: false}},
        { id: '17', scribble: {color: 'green',   inverted: true, text: 'Aux 17', icon: ''}, mute: {self: false, group: false}},
        { id: '18', scribble: {color: 'green',   inverted: true, text: 'Aux 18', icon: ''}, mute: {self: false, group: false}},
        { id: '19', scribble: {color: 'green',   inverted: true, text: 'Aux 19', icon: ''}, mute: {self: false, group: false}},
        { id: '20', scribble: {color: 'green',   inverted: true, text: 'Aux 20', icon: ''}, mute: {self: false, group: false}},
        { id: '21', scribble: {color: 'green',   inverted: true, text: 'Aux 21', icon: ''}, mute: {self: false, group: false}},
        { id: '22', scribble: {color: 'green',   inverted: true, text: 'Aux 22', icon: ''}, mute: {self: false, group: false}},
        { id: '23', scribble: {color: 'green',   inverted: true, text: 'Aux 23', icon: ''}, mute: {self: false, group: false}},
        { id: '24', scribble: {color: 'green',   inverted: true, text: 'Aux 24', icon: ''}, mute: {self: false, group: false}},
        { id: '25', scribble: {color: 'green',   inverted: true, text: 'Aux 25', icon: ''}, mute: {self: false, group: false}},
        { id: '26', scribble: {color: 'green',   inverted: true, text: 'Aux 26', icon: ''}, mute: {self: false, group: false}},
        { id: '27', scribble: {color: 'green',   inverted: true, text: 'Aux 27', icon: ''}, mute: {self: false, group: false}},
        { id: '28', scribble: {color: 'green',   inverted: true, text: 'Aux 28', icon: ''}, mute: {self: false, group: false}},
        { id: '29', scribble: {color: 'green',   inverted: true, text: 'Aux 29', icon: ''}, mute: {self: false, group: false}},
        { id: '30', scribble: {color: 'green',   inverted: true, text: 'Aux 30', icon: ''}, mute: {self: false, group: false}},
        { id: '31', scribble: {color: 'green',   inverted: true, text: 'Aux 31', icon: ''}, mute: {self: false, group: false}},
        { id: '32', scribble: {color: 'green',   inverted: true, text: 'Aux 32', icon: ''}, mute: {self: false, group: false}},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.channelstrip {
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	background-color: #333;
  overflow-x: scroll;
  flex-grow: 1;

  /* width */
  &::-webkit-scrollbar {
	  height: 10px;
  }
  /* Track */
  &::-webkit-scrollbar-track {
    background: #333; 
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #555; 
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }
}


</style>
