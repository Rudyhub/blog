<template>
  <div class="keyboard">
    <div class="keyboard-keys">
      <div class="keyboard-row" v-for="(row, index) of keys" :key="index">
        <template v-for="key of row">
          <div class="keyboard-item" :class="'keyboard-'+key.code" :key="key.code" :data-code="key.code">
            <div class="keyboard-content" v-html="key.html"></div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'keyboard',
  data () {
    return {
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
        [{html: 'Ctrl', code: 'ControlLeft'}, {html: 'Fn', code: 'Fn'}, {html: 'Win', code: 'MetaLeft'}, {html: 'Alt', code: 'AltLeft'},
          {html: 'Space', code: 'Space'}, {html: 'Alt', code: 'AltRight'}, {html: 'PrtSc', code: 'PrintScreen'},
          {html: 'Win', code: 'MetaRight'}, {html: 'Ctrl', code: 'ControlRight'}]
      ]}
  },
  mounted () {
    let items, els, timer
    items = {}
    els = this.$el.querySelectorAll('[data-code]')
    function itemAnimateEnd () {
      this.classList.remove('active')
      this.style.color = ''
    }
    for (let i = 0, len = els.length; i < len; i++) {
      items[els[i].dataset.code] = els[i]
      els[i].addEventListener('animationend', itemAnimateEnd, false)
    }
    els = null
    document.addEventListener('keydown', function (e) {
      if (items[e.code]) {
        items[e.code].classList.remove('active')
        clearTimeout(timer)
        timer = setTimeout(function () {
          clearTimeout(timer)
          items[e.code].classList.add('active')
        }, 20)
      }
    })
    this.animateIn()
  },
  methods: {
    animateIn (fn) {
      let _this = this
      this.$el.classList.add('keyboard-animate')
      this.$el.addEventListener('animationend', animateEnd, false)
      function animateEnd (e) {
        this.removeEventListener(e.type, animateEnd, false)
        if (fn) fn('keyboard', e.animationName)
        _this.$emit('animate-in-end', 'keyboard', e.animationName)
      }
    }
  }
}
</script>

<style>
.keyboard{
  width: 100%;
  height: 35vh;
  position: absolute;
  left: 0;
  bottom: 0;
  perspective: 400px;
  color: #469e36;
}
.keyboard-keys{
  width: 106vh;
  margin: 0 auto;
  padding: .5vh;
  box-sizing: border-box;
  border: 1px solid;
  border-radius: 4px;
  transform-origin: bottom;
  background: linear-gradient(160deg, #464646, #272727);
}
.keyboard-animate .keyboard-keys{
  animation: fall-down 1s cubic-bezier(.77,.22,.98,.81) forwards, fall-later 0.8s cubic-bezier(.77,.22,.98,.81) 1s forwards;
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
  border-radius: 4px;
  padding: .2vh .4vh;
  line-height: 1.2;
  position: relative;
  font-size: 2vh;
}
.keyboard-item.active{
  color: #00bcff;
  animation: bright 1s;
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
.keyboard-content{
  width: 100%;
  height: 100%;
  box-shadow: inset 0 0.1vh 0.3vh #cbc6c4;
  box-sizing: border-box;
  padding: 0 .2em;
  border-radius: 3px;
  border-bottom: .6vh solid #282823;
}
@keyframes bright {
  0%{
    box-shadow: 0 0 .4vh;
  }
  20%{
    box-shadow: 0 0 1.4vh;
  }
  80%{
    box-shadow: 0 0 1.4vh;
  }
  100%{
    box-shadow: 0 0 .4vh;
  }
}
@keyframes fall-down {
  0%{
    transform: translateY(-100vh);
  }
  60%{
    transform: translateY(1vh);
  }
  70%{
    transform: translateY(-3vh);
  }
  80%{
    transform: translateY(0.4vh);
  }
  90%{
    transform: translateY(-1vh);
  }
  100%{
    transform: translateY(0);
  }
}
@keyframes fall-later {
  0%{
    transform: rotateX(0);
  }
  60%{
    transform: rotateX(45deg);
  }
  70%{
    transform: rotateX(40deg);
  }
  80%{
    transform: rotateX(43deg);
  }
  90%{
    transform: rotateX(41deg);
  }
  100%{
    transform: rotateX(42deg);
  }
}
</style>
