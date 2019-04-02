<template>
  <div :class="['channel', props.color, props.inverted?'inverted':'']">
    <div class="gain rounded"></div>
    <div class="scribble rounded">{{props.text}}</div>
    <div style="flex-grow: 1">Item 3</div>
    <div>Ch {{props.id}}</div>
  </div>
</template>

<script>
export default {
  name: 'Channel',
  props: {
    props: Object
  },
  data () {
    return {
      channelnr: this.props.id.toString(),
    }
  },
  created() {
    if(this.channelnr.length == 1) this.channelnr = '0' + this.channelnr;
  }
}
</script>

<style lang="scss">
$width: 100px;
$spacing: 10px;
.channel {
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: $spacing;
  flex-shrink: 0;
	border-right: 1px solid #111;
  width: $width;

  &:nth-child(odd){ background-color: #222; }
  &:nth-child(even){ background-color: #1d1d1d; }

  .gain {
  background-color: #333;
  width: 100%;
  height: 70px;
  margin-bottom: $spacing;
  }
  .scribble {
    background-color: #222;
    width: 100%;
    height: 70px;
    padding: 3px 7px;
    box-sizing: border-box;
    font-weight: bold;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    border-style: inset;
    border-color: #3e3e3e;
    box-shadow: inset 0 0 49px -3px black;
    border-width: 3px;
  }

  .rounded {
    border-radius: 7px;
  }

  &.black:not(.inverted) .scribble {  border-color: #333333; background-color: #0c0c0c; color: transparent; }
  &.red:not(.inverted) .scribble {    background-color: #1d0505; border-color: #e72d2e; color: #e72d2e; }
  &.green:not(.inverted) .scribble {  background-color: #051704; border-color: #35e72d; color: #35e72d; }
  &.yellow:not(.inverted) .scribble { background-color: #171600; border-color: #fcf300; color: #fcf300; }
  &.blue:not(.inverted) .scribble {   background-color: #000c1f; border-color: #0060ff; color: #0060ff; }
  &.magenta:not(.inverted) .scribble {background-color: #1b0413; border-color: #ed27ac; color: #ed27ac; }
  &.cyan:not(.inverted) .scribble {   background-color: #041617; border-color: #2de0e7; color: #2de0e7; }
  &.white:not(.inverted) .scribble {  background-color: #131313; border-color: #ffffff; color: #ffffff; }
  &.black.inverted .scribble {    background-color: #333333; }
  &.red.inverted .scribble {      background-color: #e72d2e; }
  &.green.inverted .scribble {    background-color: #35e72d; }
  &.yellow.inverted .scribble {   background-color: #fcf300; }
  &.blue.inverted .scribble {     background-color: #0060ff; }
  &.magenta.inverted .scribble {  background-color: #ed27ac; }
  &.cyan.inverted .scribble {     background-color: #2de0e7; }
  &.white.inverted .scribble {    background-color: #ffffff; }
}

</style>
