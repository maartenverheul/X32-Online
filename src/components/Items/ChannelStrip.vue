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
        { id: '01', color: 'black',   border: false, text: 'Aux 1', icon: '' },
        { id: '02', color: 'red',     border: false, text: 'Aux 2', icon: '' },
        { id: '03', color: 'green',   border: false, text: 'Aux 3', icon: '' },
        { id: '04', color: 'yellow',  border: false, text: 'Aux 4', icon: '' },
        { id: '05', color: 'blue',    border: false, text: 'Aux 5', icon: '' },
        { id: '06', color: 'magenta', border: false, text: 'Aux 6', icon: '' },
        { id: '07', color: 'cyan',    border: false, text: 'Aux 7', icon: '' },
        { id: '08', color: 'white',   border: false, text: 'Aux 8', icon: '' },
        { id: '09', color: 'black',   border: true, text: 'Aux 9', icon: '' },
        { id: '10', color: 'red',     border: true, text: 'Aux 10', icon: '' },
        { id: '11', color: 'green',   border: true, text: 'Aux 11', icon: '' },
        { id: '12', color: 'yellow',  border: true, text: 'Aux 12', icon: '' },
        { id: '13', color: 'blue',    border: true, text: 'Aux 13', icon: '' },
        { id: '14', color: 'magenta', border: true, text: 'Aux 14', icon: '' },
        { id: '15', color: 'cyan',    border: true, text: 'Aux 15', icon: '' },
        { id: '16', color: 'white',   border: true, text: 'Aux 16', icon: '' },
        { id: '17', color: 'green',   border: true, text: 'Aux 17', icon: '' },
        { id: '18', color: 'green',   border: true, text: 'Aux 18', icon: '' },
        { id: '19', color: 'green',   border: true, text: 'Aux 19', icon: '' },
        { id: '20', color: 'green',   border: true, text: 'Aux 20', icon: '' },
        { id: '21', color: 'green',   border: true, text: 'Aux 21', icon: '' },
        { id: '22', color: 'green',   border: true, text: 'Aux 22', icon: '' },
        { id: '23', color: 'green',   border: true, text: 'Aux 23', icon: '' },
        { id: '24', color: 'green',   border: true, text: 'Aux 24', icon: '' },
        { id: '25', color: 'green',   border: true, text: 'Aux 25', icon: '' },
        { id: '26', color: 'green',   border: true, text: 'Aux 26', icon: '' },
        { id: '27', color: 'green',   border: true, text: 'Aux 27', icon: '' },
        { id: '28', color: 'green',   border: true, text: 'Aux 28', icon: '' },
        { id: '29', color: 'green',   border: true, text: 'Aux 29', icon: '' },
        { id: '30', color: 'green',   border: true, text: 'Aux 30', icon: '' },
        { id: '31', color: 'green',   border: true, text: 'Aux 31', icon: '' },
        { id: '32', color: 'green',   border: true, text: 'Aux 32', icon: '' },
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
