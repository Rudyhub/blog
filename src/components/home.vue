<template>
  <div class="main">
    <div class="blackboard">
      <div :is="scene" @animate-in-end="animateInEnd"></div>
    </div>
    <div :is="keyboard" @animate-in-end="animateInEnd"></div>
  </div>
</template>

<script>
import welcome from './welcome'
import keyboard from './keyboard'
import help from './help'
import command from './command'

let pages, pagesLen
pages = [/^((-[h?])|帮助)$/, /^(home|主页)$/, /^(works|作品)$/, /^(blog|博客)$/, /^(album|相册)$/]
pagesLen = pages.length
export default {
  name: 'home',
  mounted () {
    this.scene = welcome
  },
  data () {
    return {
      scene: null,
      keyboard: null
    }
  },
  methods: {
    animateInEnd (name, animate) {
      let _this = this
      switch (name) {
        case 'welcome':
          this.keyboard = keyboard
          break
        case 'keyboard':
          this.scene = help
          document.addEventListener('keydown', function enterCommand (e) {
            if (e.key === 'Enter') {
              document.removeEventListener('keydown', enterCommand, false)
              _this.scene = command
            }
          }, false)
          break
      }
    },
    commandAddLine (callback) {
      let _this, lines, preline
      _this = this
      lines = _this.$children[1].lines
      preline = lines.pop()
      lines.push(preline)
      if (preline.trim() === '') {
        lines.push('')
        callback()
      } else {
        for (let i = 0; i < pagesLen; i++) {
          if (pages[i].test(preline.trim())) {
            lines.push(['找到' + preline + '，正在跳转...'], '')
            callback()
            return
          }
        }
        lines.push(['花了几毫秒没找着~~'], '')
        callback()
      }
      _this.$children[1].$el.scrollTop = _this.$children[1].$el.scrollHeight
    },
    commandAddChar (char) {
      let lines = this.$children[1].lines
      lines.pop()
      lines.push(char)
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
