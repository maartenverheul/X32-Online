<template>
  <div class="channel">
    <div class="gain"></div>
    <div class="scribble" ref="scribble" :class="[props.scribble.color, props.scribble.inverted?'inverted':'']" v-on:click="scribble_click" v-on:contextmenu.prevent="scribble_context">{{props.scribble.text}}</div>
    <div class="mute" :class="[props.mute.self?'active-self':'', props.mute.group?'active-group':'']" v-on:click="mute_click">Mute</div>
    <div class="fader" style="flex-grow: 1">Item 3</div>
    <div class="chid">Ch {{props.id}}</div>
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
  },
  mounted(){
    
  },
  methods: {
    scribble_click(e){
      console.log("SCRIBBLE CLICK");
      this.change_color("red");
    },
    scribble_context(e){
      console.log("SCRIBBLE CONTEXT");
      this.change_color("black");
    },
    mute_click(e){
      console.log("MUTE");
      if(e.target.classList.contains("active-self")) e.target.classList.remove("active-self");
      else e.target.classList.add("active-self");
    },
    change_color(color, inverted){
      this.$refs.scribble.classList.remove("black");
      this.$refs.scribble.classList.remove("red");
      this.$refs.scribble.classList.remove("green");
      this.$refs.scribble.classList.remove("yellow");
      this.$refs.scribble.classList.remove("blue");
      this.$refs.scribble.classList.remove("magenta");
      this.$refs.scribble.classList.remove("cyan");
      this.$refs.scribble.classList.remove("white");
      this.$refs.scribble.classList.remove("inverted");
      this.$refs.scribble.classList.add(color);
      if(inverted) this.$refs.scribble.classList.add("inverted");
      return true;
    }
  }
}
</script>

<style lang="scss">
$width: 100px;
$spacing: 10px;
$radius: 7px;
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
    border-radius: $radius;
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
    border-color: #2f2f2f;
    box-shadow: inset 0 0 49px -3px black;
    border-width: 3px;
    border-radius: $radius;
    cursor: pointer;
    margin-bottom: $spacing;
    &.black:not(.inverted) {  border-color: #333333; background-color: #0c0c0c; color: transparent; }
    &.red:not(.inverted) {    background-color: #1d0505; border-color: #e72d2e; color: #e72d2e; }
    &.green:not(.inverted) {  background-color: #051704; border-color: #35e72d; color: #35e72d; }
    &.yellow:not(.inverted) { background-color: #171600; border-color: #fcf300; color: #fcf300; }
    &.blue:not(.inverted) {   background-color: #000c1f; border-color: #0060ff; color: #0060ff; }
    &.magenta:not(.inverted) {background-color: #1b0413; border-color: #ed27ac; color: #ed27ac; }
    &.cyan:not(.inverted) {   background-color: #041617; border-color: #2de0e7; color: #2de0e7; }
    &.white:not(.inverted) {  background-color: #131313; border-color: #dfdfdf; color: #bfbfbf; }
    &.black.inverted {    background-color: #333333; }
    &.red.inverted {      background-color: #e72d2e; }
    &.green.inverted {    background-color: #35e72d; }
    &.yellow.inverted {   background-color: #fcf300; }
    &.blue.inverted {     background-color: #0060ff; }
    &.magenta.inverted {  background-color: #ed27ac; }
    &.cyan.inverted {     background-color: #2de0e7; }
    &.white.inverted {    background-color: #ffffff; }
  }
  .mute {
    background-color: #808080;
    border-radius: $radius;
    cursor: pointer;
    text-align: center;
    margin-bottom: $spacing;
    padding: 5px 10px;
    border: 3px outset #9e9e9e;
    &.active-group {
      background-color: #751313;
      border-color: #792b2b;
      color: #ffdada;
    }
    &.active-self {
      background-color: #b51111;
      border-color: #d61a1a;
      color: #ffdada;
    }
  }
  .fader{
    background-color: red;
    background-color: #333;
    width: 100%;
    height: 70px;
    border-radius: $radius;
  }
  .chid {
    text-align: center;
    margin-top: $spacing;
  }
}

</style>
