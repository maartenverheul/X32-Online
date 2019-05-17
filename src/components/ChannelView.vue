<template>
  <div id="channelpage" class="channelpage">
    <Channel :props="{ id: '01', scribble: {color: 'black',   inverted: false, text: 'Aux 1', icon: ''}, mute: {self: false, group: false}}"/>
    <div class="channelsettings">
      <div class="tabsnav">
        <div>Channel</div>
        <div class="active">Config</div>
        <div>Gate</div>
        <div>Dyn</div>
        <div>EQ</div>
        <div>Sends</div>
        <div>Main</div>
        <div>FX 1 - 4</div>
        <div>FX 5 - 8</div>
      </div>
      <div class="tabs">

      </div>
    </div>
  </div>
</template>

<script>
import Channel from '@/components/items/Channel'
export default {
  name: 'ChannelPage',
  components: {
    Channel
  }
}
</script>

<style scoped lang="scss">
#channelpage {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: stretch;
  align-self: stretch;

  .channelsettings {
    flex-grow: 1;
    background-color: #333333;

    .tabsnav {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr;
      div {
        padding: 10px 5px;
        border-right: 1px solid black;
        border-bottom: 1px solid black;
        text-align: center;
        color: #aaa;
        font-weight: bold;
        font-size: 1.5rem;
        cursor: pointer;
        &:not(.active) {
          background-color: #222;
        }
        &.active {
          border-bottom: none;
        }
      }
    }
    .tabs {

    }
  }
}
</style>
