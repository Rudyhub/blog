<template>
    <div class="command fs9" @click="input.focus()">
      <div class="command-sys">
        欢迎进入老夫的互动系统，可与老夫进行简单的交流，想进入其他页面必须输入正确的指令。输入“？” 或 “帮助”，然后Enter，可查看关键指令。 <br>
      </div>
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
  data () {
    return {
      input: document.createElement('input')
    }
  },
  mounted () {
    let _this = this
    this.input.className = 'command-input'
    document.addEventListener('keydown', function (e) {
      switch (e.key) {
        case 'Enter': _this.respone(_this.input.value); break
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
    _this.addLine()
    if (music.paused) {
      music.play()
    }
  },
  methods: {
    addLine (html) {
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
          sysLine.className = 'command-sys'
          sysLine.innerHTML = html || ''
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
    respone (val) {
      let _this, len, i
      _this = this
      val = val.trim().toLowerCase()
      i = 0
      for (let page in store.nav) {
        if (page === val || store.nav[page] === val) {
          _this.$router.push(page)
          return
        }
      }
      for (let aiKey in store.aiKeys) {
        if (store.aiKeys[aiKey].test(val)) {
          switch (aiKey) {
            case 'help':
              _this.addLine(store.help()); break
            case 'clear':
              _this.clear(); break
            case 'song':
              music.play(val.replace(store.aiKeys[aiKey], ''), () => {
                _this.addLine(_this.musicList())
              })
              break
            case 'songPause':
              if (window.Rmusic) {
                window.Rmusic.pause()
                _this.addLine('[系统回复 ~]: 已暂停音乐')
                break
              }
              _this.addLine('[系统回复 ~]: 错误，未找到播放器。')
              break
            case 'songPlay':
              if (window.Rmusic) {
                if (window.Rmusic.paused) {
                  window.Rmusic.play()
                  _this.addLine('[系统回复 ~]: 已继续播放')
                } else {
                  _this.addLine('[系统回复 ~]: 歌曲已在播放')
                }
                break
              }
              _this.addLine('[系统回复 ~]: 错误，未找到播放器。')
              break
            case 'songLoop':
              if (window.Rmusic) {
                window.Rmusic.loop = !window.Rmusic.loop
                _this.addLine('[系统回复 ~]: 已' + (window.Rmusic.loop ? '开启' : '关闭') + '循环')
                break
              }
              _this.addLine('[系统回复 ~]: 错误，未找到播放器。')
              break
            case 'songNum':
              let musicFile = music.list[parseInt(val)]
              if (musicFile) {
                music.url(musicFile.FileHash)
                _this.addLine('正在播放：' + musicFile.FileName)
              } else {
                _this.addLine('木有音乐')
              }
              break
            case 'songList':
              _this.addLine(_this.musicList())
          }
          return
        }
      }
      for (len = store.AI.length; i < len; i++) {
        if (store.AI[i].user.test(val)) {
          let sysLen = store.AI[i].sys.length
          let index = Math.round(Math.random() * sysLen - 0.5)
          _this.addLine('[令狐长老]: ' + store.AI[i].sys[index])
          return
        }
      }
      _this.addLine('[系统回复 ~]: 你说啥？')
    },
    clear () {
      lines = []
      lineIndex = 0
      this.$el.innerHTML = ''
      this.addLine()
    },
    musicList () {
      let html, list
      list = music.list
      if (list && list.length) {
        html = '<dl class="command-dl"><dt>正在播放：' + list[0].FileName + '</dt>'
        if (list.length > 1) {
          html += '<dd class="command-b command-dd">更多相关歌曲：（输入对应序号即听）</dd>'
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
    word-spacing: .2em;
    letter-spacing: .06em;
    text-align: justify;
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
  .command-highlight{
    color: #5f7fb9;
  }
  .command-b{
    display: inline-block;
    color: #b9231f;
    margin-top: .5em;
  }
</style>
