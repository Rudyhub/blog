export default {
  nav: Object.freeze({
    home: '首页',
    about: '个人',
    works: '作品',
    blog: '博客',
    album: '相册'
  }),
  aiKeys: Object.freeze({
    help: /^(帮助|help|-h|-?[?？]|查看指令)$/,
    clear: /^(cls|clear|清除|清屏)$/,
    song: /^听\s+/,
    songPause: /^((-m|music)\s+(off|pause|puase)|暂停音乐|安静|嘘|静音)\s*$/,
    songPlay: /^((-m|music)\s+(on|play)|播放(音乐|歌曲))\s*$/,
    songStop: /^((-m|music)\s+stop|停止(播放|音乐))\s*$/,
    songLoop: /^((-m|music)\s+loop|单曲循环)\s*$/,
    songNum: /^\d+$/,
    songList: /^((-m|music)\s+list|查看歌单|歌单|歌曲列表)\s*$/,
    songName: /^((-m|music)\s+name|(查看)?歌名)\s*$/,
    songNext: /^((-m|music)\s+next|下一首)\s*$/,
    songPrev: /^((-m|music)\s+prev|上一首)\s*$/
  }),
  help () {
    let html = '<div class="command-answer-title">访问页面：</div><div class="command-answer-detail fs8">'
    for (let k in this.nav) {
      if (k === 'home') continue
      html += '<span class="command-fc0">访问' + this.nav[k] + '</span>：可输入的指令有“' + this.nav[k] + '”、“' + k + '”<br>'
    }
    html += `</div>
      <div class="command-answer-title">听音乐：</div>
      <div class="command-answer-detail fs8">
        <span class="command-fc0">听歌搜歌</span>：可输入“听 + 空格 + 关键词（歌曲或歌星）”，如：听 蓝莲花，又如：听 许巍<br/>
        <span class="command-fc0">暂停音乐</span>：可输入指令有“-m off”、“music off”、“暂停音乐”、“安静”、“嘘”、“静音”<br/>
        <span class="command-fc0">播放音乐</span>：可输入指令有“-m on”、“music on”、“播放音乐”、“播放歌曲”<br/>
        <span class="command-fc0">停止音乐</span>：可输入指令有“-m stop”、“music stop”、“停止音乐”、“停止播放”<br/>
        <span class="command-fc0">单曲循环</span>：可输入指令有“-m loop”、“music loop”、“单曲循环”，注：关闭单曲循环同用<br/>
        <span class="command-fc0">查看歌单</span>：可输入指令有“-m list”、“music list”、“歌单”、“歌曲列表”，注：列出的只是上一次的搜索结果<br/>
        <span class="command-fc0">查看歌名</span>：可输入指令有“-m name”、“music name”、“歌名”、“查看歌名”<br/>
        <span class="command-fc0">下 一 首</span>：可输入指令有“-m next”、“music next”、“下一首”<br/>
        <span class="command-fc0">上 一 首</span>：可输入指令有“-m prev”、“music prev”、“上一首”
      </div>
      <div class="command-answer-title">其他指令：</div>
      <div class="command-answer-detail fs8">
        <span class="command-fc0">查看指令</span>：可输入指令有“？”、“-h”、“help”、“帮助”、“查看指令”<br/>
        <span class="command-fc0">清空屏幕</span>：可输入指令有“cls”、“clear”、“清屏”、“清除”
      </div>
      <div class="command-answer-title">问答系统：</div>
      <div class="command-answer-detail fs8">
        以上指令之外的事情，都交给本问答系统吧。当前系统只是个非常小的静态数据，纯属娱乐同时装一下X，能回复的问题不多，而且态度基本很傲娇，很皮。
        以后，砸家想开发为一个具有人工智能的问答学习系统，不仅会回答码农的问题，还会回答九年义务教育的课程问题甚至各行业的专业问题。期待吧~
      </div>`
    return html
  }
}
