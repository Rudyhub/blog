<template>
  <div class="main">
    <div class="blackboard" ref="blackboard">
      <div :is="scene"></div>
    </div>
    <div :is="keyboard"></div>
  </div>
</template>

<script>
import Welcome from './welcome'
import Help from './help'
import Light from './light'
import Keyboard from './keyboard'
let scenes = {
  Keyboard,
  Help
}
export default {
  name: 'home',
  components: {Light},
  mounted () {
    this.scene = Welcome
  },
  data () {
    return {
      curSceneName: '',
      scene: null,
      keyboard: null
    }
  },
  methods: {
    animateEnd (sceneName) {
      if (scenes[sceneName]) {
        if (sceneName === 'Keyboard') {
          this.keyboard = Keyboard
        } else {
          this.scene = scenes[sceneName]
        }
      }
      this.curSceneName = sceneName
    }
  }
}
</script>
<style>
  .main{
    height: 100vh;
    background: #333;
  }
  .blackboard{
    height: 70vh;
    overflow: hidden;
    position: relative;
    color: #bbcfed;
    box-sizing: border-box;
  }
  .blackboard:after{
    content: '';
    position: absolute;
    width: 100%;
    height: 10vh;
    background: linear-gradient(to top, #333, transparent);
    bottom: 0;
    left: 0;
  }
  .command{
    font-size: 12px;
    padding: 1em;
  }
  .command-line:before{
    content: '[Guest ~]:';
    display: inline-block;
    vertical-align: middle;
    padding-right: .5em;
  }
  .command-line:after{
    content: '|';
    display: inline-block;
    vertical-align: middle;
    animation: flicker 1s infinite;
  }
  @keyframes flicker {
    0%{
      opacity: 0;
    }
    20%{
      opacity: 1;
    }
    80%{
      opacity: 1;
    }
    100%{
      opacity: 0;
    }
  }
</style>
