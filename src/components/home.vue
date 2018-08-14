<template>
  <div class="main">
    <div class="blackboard">
      <div :is="scene"></div>
    </div>
    <div :is="keyboard"></div>
  </div>
</template>

<script>
import welcome from './welcome'
import help from './help'
import Light from './light'
import keyboard from './keyboard'
import command from './command'
let scenes = {
  keyboard,
  help,
  command
}
let pages, pagesLen
pages = [/^((-[h?])|帮助)$/, /^(home|主页)$/, /^(works|作品)$/, /^(blog|博客)$/, /^(album|相册)$/]
pagesLen = pages.length
export default {
  name: 'home',
  components: {Light},
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
    sceneTo (sceneName) {
      switch (sceneName) {
        case 'keyboard':
          this.keyboard = scenes[sceneName]; break
        default:
          this.scene = scenes[sceneName]
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
        lines.push('...')
        for (let i = 0; i < pagesLen; i++) {
          if (pages[i].test(preline.trim())) {
            lines.push('找到' + preline + '，正在跳转...')
            callback()
            return
          }
        }
        lines.push('未找到')
        callback()
      }
      _this.$children[1].$el.scrollTop = _this.$children[1].$el.scrollHeight
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
