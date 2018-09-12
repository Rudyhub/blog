<template>
    <div class="command fs9">
      <div class="command-answer">
        欢迎进入老夫的互动系统，可与老夫进行简单的交流，想进入其他页面必须输入正确的指令。输入“?” 或 “帮助”，然后Enter，可查看关键指令。<br>
      </div>
      <template v-for="(line, i) of lines">
        <div class="command-ask" :key="'ask'+i">
          <span class="command-ask-name">[You ~]:</span>
          {{line.ask}}
        </div>
        <div class="command-answer" :key="'answer'+i" v-html="line.answer"></div>
      </template>
      <div class="command-ask">
        <span class="command-ask-name">[You ~]:</span>
        <input class="command-input" type="text" v-model="ask" @keydown="onKeydown" :autofocus="true" spellcheck="false" title="输入指令">
      </div>
    </div>
</template>

<script>
import utils from '../../scripts/utils.js'
import store from '../../scripts/store.js'
import music from '../../scripts/music.js'
export default {
  name: 'command',
  data () {
    return {
      ask: '',
      lines: [],
      historyIndex: 0
    }
  },
  mounted () {
    let _this = this
    utils.scroll(_this.$el)
    if (!window.Rsong.el.src || window.Rsong.el.paused) {
      music.search('', kw => {
        _this.lines.push({
          ask: '听 ' + kw,
          answer: '自动播放：' + kw
        })
      })
    }
  },
  methods: {
    onKeydown (e) {
      let len
      switch (e.code) {
        case 'Enter':
          this.respone(e.currentTarget.value)
          break
        case 'ArrowUp':
          len = this.lines.length
          if (len - this.historyIndex > 0) {
            this.historyIndex++
            this.ask = this.lines[len - this.historyIndex].ask
          }
          break
        case 'ArrowDown':
          len = this.lines.length
          if (this.historyIndex > 1) {
            this.historyIndex--
            this.ask = this.lines[len - this.historyIndex].ask
          }
          break
      }
    },
    pushLine (html) {
      let _this = this
      _this.historyIndex = 0
      _this.lines.push({
        ask: _this.ask,
        answer: html
      })
      _this.ask = ''
      setTimeout(() => {
        _this.$el.scrollTop = _this.$el.scrollHeight - _this.$el.offsetHeight
      }, 50)
    },
    respone (val) {
      let _this, len, i
      _this = this
      val = val.trim().toLowerCase()
      i = 0
      if (!val) return
      for (let page in store.nav) {
        if (page === val || store.nav[page] === val) {
          if (val === 'home') {
            _this.pushLine('这就是首页了噻')
          } else {
            music.pause()
            _this.$router.push(page)
          }
          return
        }
      }
      for (let aiKey in store.aiKeys) {
        if (store.aiKeys[aiKey].test(val)) {
          switch (aiKey) {
            case 'help':
              _this.pushLine(store.help())
              return
            case 'clear':
              _this.lines.splice(0, _this.lines.length)
              return
            case 'song':
              music.search(val.replace(store.aiKeys[aiKey], ''), () => {
                _this.pushLine(_this.musicList())
              })
              return
            case 'songPause':
              music.pause()
              _this.pushLine('已暂停音乐')
              return
            case 'songPlay':
              if (music.paused()) {
                music.play()
                _this.pushLine('已继续播放：' + music.getName())
              } else {
                _this.pushLine('歌曲已在播放：' + music.getName())
              }
              return
            case 'songLoop':
              _this.pushLine('已' + (music.toggleLoop() ? '开启' : '关闭') + '循环')
              return
            case 'songNum':
              music.search(parseInt(val), () => {
                _this.pushLine('正在播放：' + music.getName())
              })
              return
            case 'songList':
              _this.pushLine(_this.musicList())
              return
          }
        }
      }
      for (len = store.AI.length; i < len; i++) {
        if (store.AI[i].ask.test(val)) {
          let sysLen = store.AI[i].answer.length
          let index = Math.round(Math.random() * sysLen - 0.5)
          _this.pushLine(store.AI[i].answer[index])
          return
        }
      }
      _this.pushLine('你说啥？书读得少，听不懂。')
    },
    musicList () {
      let html, list
      list = music.getList()
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
        html = '空列表'
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
  .command-ask{
    white-space: nowrap;
    overflow: hidden;
    padding: .4em 0;
    line-height: 1;
  }
  .command-answer{
    padding: 0.3em 0 0.3em 2em;
    color: #b26821;
  }
  .command-ask-name{
    display: block;
    float: left;
    box-sizing: border-box;
    width: 4em;
    overflow: hidden;
  }
  .command-input{
    float: left;
    -webkit-appearance: none;
    border: none;
    background: transparent;
    color: inherit;
    font-size: inherit;
    outline: none;
    box-sizing: border-box;
    padding: 0;
    width: calc(100% - 4em);
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
