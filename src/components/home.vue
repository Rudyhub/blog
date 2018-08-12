<template>
  <div class="main">
    <div class="blackboard" ref="blackboard">
      <div :is="scene"></div>
    </div>
    <light></light>
    <div class="keyboard">
      <div class="keyboard-keys">
        <div class="keyboard-row" v-for="(row, index) of keys" :key="index">
          <template v-for="(key, rindex) of row">
            <div class="keyboard-item" :class="'keyboard-'+key.code" v-bind:key="rindex">
              <div class="keyboard-content" v-html="key.html"></div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Welcome from './welcome'
import Help from './help'
import Light from './light'
export default {
  name: 'home',
  components: {Light},
  created () {
    let items = {}
    // let _this = this
    let item
    document.onkeydown = function (e) {
      if (!items[e.code]) {
        item = document.querySelector('.keyboard-' + e.code)
        if (item) items[e.code] = item
      }
      if (items[e.code]) {
        items[e.code].classList.remove('active')
        let timer = setTimeout(function () {
          clearTimeout(timer)
          items[e.code].classList.add('active')
        }, 20)
        if (e.code === 'Enter') {}
      }
    }
  },
  mounted () {
    this.scene = this.scenes[0]
  },
  data () {
    return {
      sceneIndex: 0,
      scene: null,
      scenes: [Welcome, Help],
      keys: [
        [{html: '~<br>`', code: 'Backquote'}, {html: '!<br>1', code: 'Digit1'}, {html: '@<br>2', code: 'Digit2'}, {html: '#<br>3', code: 'Digit3'},
          {html: '$<br>4', code: 'Digit4'}, {html: '%<br>5', code: 'Digit5'}, {html: '^<br>6', code: 'Digit6'}, {html: '&<br>7', code: 'Digit7'},
          {html: '*<br>8', code: 'Digit8'}, {html: '(<br>9', code: 'Digit9'}, {html: ')<br>0', code: 'Digit0'}, {html: '—<br>-', code: 'Minus'},
          {html: '+<br>=', code: 'Equal'}, {html: 'Backspace', code: 'Backspace'}],
        [{html: 'Tab', code: 'Tab'}, {html: 'Q', code: 'KeyQ'}, {html: 'W', code: 'KeyW'}, {html: 'E', code: 'KeyE'},
          {html: 'R', code: 'KeyR'}, {html: 'T', code: 'KeyT'}, {html: 'Y', code: 'KeyY'}, {html: 'U', code: 'KeyU'}, {html: 'I', code: 'KeyI'},
          {html: 'O', code: 'KeyO'}, {html: 'P', code: 'KeyP'}, {html: '{<br>[', code: 'BracketLeft'}, {html: '}<br>]', code: 'BracketRight'},
          {html: '|<br>\\', code: 'Backslash'}],
        [{html: 'CapsLock', code: 'CapsLock'}, {html: 'A', code: 'KeyA'}, {html: 'S', code: 'KeyS'}, {html: 'D', code: 'KeyD'},
          {html: 'F', code: 'KeyF'}, {html: 'G', code: 'KeyG'}, {html: 'H', code: 'KeyH'}, {html: 'J', code: 'KeyJ'}, {html: 'K', code: 'KeyK'},
          {html: 'L', code: 'KeyL'}, {html: ':<br>;', code: 'Semicolon'}, {html: '"<br>\'', code: 'Quote'}, {html: 'Enter', code: 'Enter'}],
        [{html: 'Shift', code: 'ShiftLeft'}, {html: 'Z', code: 'KeyZ'}, {html: 'X', code: 'KeyX'}, {html: 'C', code: 'KeyC'},
          {html: 'V', code: 'KeyV'}, {html: 'B', code: 'KeyB'}, {html: 'N', code: 'KeyN'}, {html: 'M', code: 'KeyM'}, {html: '&lt;<br>,', code: 'Comma'},
          {html: '&gt;<br>.', code: 'Period'}, {html: '?<br>/', code: 'Slash'}, {html: 'Shift', code: 'ShiftRight'}],
        [{html: 'Ctrl', code: 'ControlLeft'}, {html: 'Fn', code: ''}, {html: 'Win', code: 'MetaLeft'}, {html: 'Alt', code: 'AltLeft'},
          {html: 'Space', code: 'Space'}, {html: 'Alt', code: 'AltRight'}, {html: 'PrtSc', code: 'PrintScreen'},
          {html: 'Win', code: 'MetaRight'}, {html: 'Ctrl', code: 'ControlRight'}]
      ]
    }
  },
  methods: {
    animateEnd () {
      this.sceneIndex++
      if (this.scenes[this.sceneIndex]) {
        this.scene = this.scenes[this.sceneIndex]
      }
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
    overflow: auto;
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
  .keyboard{
    width: 100%;
    height: 35vh;
    position: fixed;
    bottom: 0;
    perspective: 400px;
    color: #cb0101;
  }
  .keyboard-keys{
    width: 106vh;
    margin: 0 auto;
    padding: .5vh;
    box-sizing: border-box;
    transform: rotateX(42deg);
    border: 1px solid;
    border-radius: 4px;
  }
  .keyboard-row{
    height: 6vh;
    margin: .5vh 0;
  }
  .keyboard-item{
    box-sizing: border-box;
    float: left;
    width: 6vh;
    height: 6vh;
    margin:0 .5vh;
    vertical-align: middle;
    border: .1vh solid;
    overflow: hidden;
    border-radius: 4px;
    padding: .2vh .4vh;
    line-height: 1.2;
    position: relative;
  }
  .keyboard-item:after{
    content: '';
    position: absolute;
    border-bottom: solid .3vh;
    width: 100%;
    height: 0;
    bottom: 0;
    left: 0;
    border-radius: 4px;
  }
  .keyboard-item.active{
    animation: bright-a 3s;
  }
  .keyboard-Backspace{
    width: 12vh;
    font-size: 2vh;
    text-align: center;
  }
  .keyboard-Tab,
  .keyboard-Backslash{
    width: 9vh;
  }
  .keyboard-CapsLock,
  .keyboard-Enter{
    width: 12.5vh;
    line-height: 5vh;
  }
  .keyboard-ShiftLeft,
  .keyboard-ShiftRight{
    width: 16vh;
    line-height: 5vh;
  }
  .keyboard-ControlLeft,
  .keyboard-ControlRight{
    width: 8vh;
  }
  .keyboard-Space{
    width: 38vh;
  }
  .keyboard-PrintScreen{
    width: 11vh;
  }
  .keyboard-Backspace,
  .keyboard-Tab,
  .keyboard-CapsLock,
  .keyboard-Enter,
  .keyboard-ShiftLeft,
  .keyboard-ShiftRight,
  .keyboard-row:last-child .keyboard-item{
    line-height: 5vh;
    text-align: center;
  }
  @keyframes bright-a {
    0%{
      color: inherit;
      box-shadow: 0 0 5px;
    }
    20%{
      color: #00bcff;
      box-shadow: 0 0 10px;
    }
    80%{
      color: #00bcff;
      box-shadow: 0 0 10px;
    }
    100%{
      color: inherit;
      box-shadow: 0 0 5px;
    }
  }
  @keyframes bright-b {
    0%{
      color: inherit;
      box-shadow: 0 0 5px;
    }
    20%{
      color: #68dd00;
      box-shadow: 0 0 10px;
    }
    80%{
      color: #68dd00;
      box-shadow: 0 0 10px;
    }
    100%{
      color: inherit;
      box-shadow: 0 0 5px;
    }
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
