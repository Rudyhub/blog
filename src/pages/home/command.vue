<template>
    <div class="command fs9">
      <div class="command-answer">
        欢迎进入本rudy长老的个人系统，进入其他页面须输入指令。输入“?” 或 “帮助”，然后Enter，可查看所有指令。<br>
      </div>
      <template v-for="(line, i) of lines">
        <div v-if="line.ask" class="command-ask" :key="'ask'+i">
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
    let data = {
      AI: [],
      ask: '',
      lines: [],
      historyIndex: 0
    }
    utils.ajax({
      url: '/static/ai.json'
    }).then(res => {
      res.forEach((item, i) => {
        let ask, g
        ask = item.ask.replace(/(?:^\/)|(?:\/([ig]*)$)/g, ($0, $1) => {
          if ($1) {
            g = $1
          }
          return ''
        })
        item.ask = new RegExp(ask, g ? g + '' : '')
        data.AI[i] = item
      })
    }, err => {
      console.log(err)
    })
    return data
  },
  mounted () {
    let _this = this
    utils.scroll(_this.$el)
    music.on('error', err => {
      if (err.playError === 1) {
        _this.lines.push({
          answer: '音乐自动播放失败，可输入“播放音乐”。'
        })
      }
    })
    if (!window.Rsong.el.src || window.Rsong.el.paused) {
      music.search()
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
    autoLine () {
      let name = music.getName()
      this.lines.push({
        ask: '听 ' + name,
        answer: '正在播放：' + name
      })
      this.updateLine()
    },
    pushLine (html) {
      let _this = this
      _this.historyIndex = 0
      _this.lines.push({
        ask: _this.ask,
        answer: html
      })
      this.updateLine()
    },
    updateLine () {
      this.ask = ''
      window.requestAnimationFrame(() => (this.$el.scrollTop = this.$el.scrollHeight - this.$el.offsetHeight))
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
              _this.ask = ''
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
                _this.pushLine('播放：' + music.getName())
              } else {
                _this.pushLine('歌曲：“' + music.getName() + '”已在播放')
              }
              return
            case 'songStop':
              music.stop()
              _this.pushLine('已停止音乐')
              return
            case 'songLoop':
              _this.pushLine('已' + (music.toggleLoop() ? '开启' : '关闭') + '循环')
              return
            case 'songNum':
              music.search(parseInt(val))
              return
            case 'songList':
              _this.pushLine(_this.musicList())
              return
            case 'songName':
              _this.autoLine()
              return
            case 'songNext':
              music.next(() => {
                _this.pushLine('歌曲：“' + music.getName() + '”已在播放')
              })
              return
            case 'songPrev':
              music.prev(() => {
                _this.pushLine('歌曲：“' + music.getName() + '”已在播放')
              })
              return
          }
        }
      }
      for (len = _this.AI.length; i < len; i++) {
        if (_this.AI[i].ask.test(val)) {
          let sysLen = _this.AI[i].answer.length
          let index = Math.round(Math.random() * sysLen - 0.5)
          _this.pushLine(_this.AI[i].answer[index])
          return
        }
      }
      _this.pushLine('你说啥？书读得少，听不懂。')
    },
    musicList () {
      let html, list
      list = music.getList()
      if (list && list.length) {
        html = '<dl class="command-dl">'
        if (list.length > 1) {
          html += '<dd class="command-answer-title command-dd">搜到歌曲：（输入对应序号即听）</dd>'
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
  @media (min-width: 1600px) {
    .command{
      font-size: 14px;
    }
  }
  .command-ask{
    white-space: nowrap;
    overflow: hidden;
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
  .command-fc0{
    border-bottom: 1px dashed;
  }
  .command-answer-title{
    color: #b9231f;
    margin-top: .5em;
    font-weight: bolder;
  }
  .command-p{
    margin: .5em 0;
    text-indent: 2em;
  }
</style>
