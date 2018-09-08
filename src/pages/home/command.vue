<template>
    <div class="command" @click="input.focus()">
      <transition name="fade" @afterEnter="input.focus()">
        <div v-show="show" class="command-sys">
          欢迎进入老夫的互动系统，可与老夫进行简单的交流，想进入其他页面必须输入正确的指令。<br><br>
          查看全部指令可输入：<span v-html="helpText"></span><br><br>
          注意：不是输入上面的一整串，而是竖线之间所有单词的任意一个。<br>
          举个例：输入“帮助”后Enter。 来试一哈 <br>
          ctrl + m：打开/关闭背景音乐
        </div>
      </transition>
    </div>
</template>

<script>
import utils from '../../scripts/utils.js'
import store from '../../scripts/store.js'

let lines, lineIndex
lines = []
lineIndex = 0

export default {
  name: 'command',
  props: {
    show: {
      type: [Boolean],
      default: false
    }
  },
  data () {
    return {
      helpText: store.nav.help.join(' &nbsp; |  &nbsp; '),
      input: document.createElement('input')
    }
  },
  mounted () {
    let _this = this
    this.input.className = 'command-input'
    document.addEventListener('keydown', function (e) {
      switch (e.key) {
        case 'Enter': _this.addLine(); break
        case 'ArrowUp':
          if (lineIndex > 0) lineIndex--
          _this.input.value = lines[lineIndex]
          break
        case 'ArrowDown':
          if (lines[lineIndex + 1]) {
            _this.input.value = lines[++lineIndex]
          }
          break
      }
    })
    utils.scroll(this.$el)
    _this.$el.addEventListener('click', () => {
      _this.input.focus()
    })
    _this.$watch('show', (e) => {
      if (e) _this.addLine()
    })
  },
  methods: {
    addLine () {
      let _this, line, head, val
      _this = this
      line = document.createElement('div')
      head = document.createElement('span')
      val = _this.input.value

      line.className = 'command-line-user'
      head.className = 'command-head'
      head.innerText = '[Guest ~]: '

      if (_this.input.parentNode) {
        _this.input.parentNode.insertBefore(document.createTextNode(val), _this.input)
        if (val) {
          let sysLine = document.createElement('div')
          let res = store.respone(val)
          sysLine.className = 'command-sys'
          if (typeof res === 'object') {
            switch (res[0]) {
              case 'help':
                sysLine.innerHTML = _this.help()
                break
              case 'clear':
                _this.clear()
                break
              default:
                _this.$router.push(res[0])
            }
          } else {
            sysLine.innerHTML = res
          }
          _this.$el.appendChild(sysLine)
          if (!lines.includes(val)) {
            lines.push(val)
            lineIndex = lines.length - 1
          }
        }
      }
      line.appendChild(head)
      line.appendChild(_this.input)
      _this.$el.appendChild(line)
      _this.input.style.width = (line.offsetWidth - head.offsetWidth - 12) + 'px'
      _this.input.value = ''
      _this.$el.scrollTop = _this.$el.scrollHeight
      _this.input.focus()
    },
    clear () {
      lines = []
      lineIndex = 0
      this.$el.innerHTML = ''
    },
    help () {
      let html = ''
      for (let page in store.nav) {
        html += store.nav[page][0] + '：' + store.nav[page].join('  &nbsp; |  &nbsp; ') + '<br>'
      }
      return html
    }
  }
}
</script>

<style>
  .command{
    height: 100%;
    margin: 0 auto;
    padding: 1em;
    overflow: hidden;
    font-size: 13px;
    box-sizing: border-box;
    line-height: 1.4;
  }
  .command-sys{
    padding: 0.3em 0 0.3em 4em;
    color: #b26821;
  }
  .command-head{
    display: inline-block;
    vertical-align: baseline;
    padding-right: .5em;
    box-sizing: border-box;
    line-height: 1;
  }
  .command-input{
    border: none;
    background: transparent;
    color: inherit;
    font-size: inherit;
    outline: none;
    box-sizing: border-box;
    vertical-align: middle;
    padding: 0;
  }
</style>
