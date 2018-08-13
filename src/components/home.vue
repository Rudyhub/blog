<template>
  <div class="main">
    <div class="blackboard">
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
import Command from './commad'
let scenes = {
  Keyboard,
  Help,
  Command
}
let enterPageTimer
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
      keyboard: null,
      pages: [/^((-[h?])|帮助)$/, /^(home|主页)$/, /^(works|作品)$/, /^(blog|博客)$/, /^(album|相册)$/]
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
    },
    commandAddLine () {
      let _this, lines, preline
      _this = this
      lines = _this.$children[1].lines
      preline = lines.pop()
      lines.push(preline, '')
      _this.$children[1].$el.scrollTop = _this.$children[1].$el.scrollHeight
      if (enterPageTimer) clearTimeout(enterPageTimer)
      enterPageTimer = setTimeout(function () {
        clearTimeout(enterPageTimer)
        if (_this.pages[0].test(preline.trim())) {
          _this.animateEnd('Help')
        }
        console.log(preline)
      }, 200)
    },
    commandAddChar (char) {
      let lines, last
      lines = this.$children[1].lines
      last = lines.pop() + char
      lines.push(last)
    },
    commandRemoveChar () {
      let lines, last
      lines = this.$children[1].lines
      last = lines.pop()
      if (last.length > 0) {
        last = last.slice(0, -1)
        lines.push(last)
      } else {
        lines.push('')
      }
    }
  }
}
</script>
<style>
  .main{
    height: 100vh;
    min-width: 109vh;
    background: #333;
    overflow: hidden;
    position: relative;
  }
  .blackboard{
    height: 70vh;
    overflow: hidden;
    position: relative;
    color: #bbcfed;
    box-sizing: border-box;
  }
</style>
