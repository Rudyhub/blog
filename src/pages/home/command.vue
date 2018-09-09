<template>
    <div class="command fs8" @click="input.focus()">
      <transition name="fade" @afterEnter="input.focus()">
        <div v-show="show" class="command-sys">
          欢迎进入老夫的互动系统，可与老夫进行简单的交流，想进入其他页面必须输入正确的指令。<br>
          查看全部指令可输入：<span v-html="helpText"></span><br>
          举个例：输入“帮助”后Enter。 来试一哈 <br>
          <b>音乐模块：</b><br>
          听歌可输入：听 + 空格 + 歌曲名 &nbsp; &nbsp; 如：听 蓝莲花 <br>
          关闭可输入：关闭音乐、安静、嘘、静音 <br>
          单曲循环可输入：单曲循环 （注意：再次输入，即可关闭单曲循环）<br>
          继续播放可输入：继续音乐、歌曲继续...
        </div>
      </transition>
    </div>
</template>

<script>
import utils from '../../scripts/utils.js'
import store from '../../scripts/store.js'
import music from '../../scripts/music.js'
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
      if (e) {
        _this.addLine()
        music.play()
      }
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
              case 'music':
                music.play(res[1], () => {
                  sysLine.innerHTML = _this.musicList()
                })
                break
              case 'music-num':
                let musicFile = music.list[res[1]]
                if (musicFile) {
                  music.url(musicFile.FileHash)
                  sysLine.innerHTML = '正在播放：' + musicFile.FileName
                } else {
                  sysLine.innerHTML = '木有音乐'
                }
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
    },
    musicList () {
      let html, list
      list = music.list
      if (list && list.length) {
        html = '<dl class="command-dl"><dt>正在播放：' + list[0].FileName + '</dt>'
        if (list.length > 1) {
          html += '<dd class="command-more-music command-dd">更多相关歌曲：（输入对应序号即听）</dd>'
          list.forEach((file, index) => {
            html += '<dd class="command-dd">' + index + '：' + file.FileName + '</dd>'
          })
        }
        html += '</dl>'
      } else {
        html = '木有音乐~'
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
    box-sizing: border-box;
    line-height: 1.4;
  }
  .command-sys{
    padding: 0.3em 0 0.3em 2em;
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
  .command-dl,
  .command-dd{
    margin: 0;
  }
  .command-more-music{
    color: #911;
    margin-top: .5em;
  }
</style>
