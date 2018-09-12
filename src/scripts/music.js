export default {
  _lrc: {
    time: [],
    text: [],
    len: 0,
    lrc: ''
  },
  init () {
    let _this, v, start
    _this = this
    v = document.createElement('video')
    _this.songIndex = 0
    window.Rsong = {
      el: v,
      song: null,
      list: null
    }
    v.autoplay = true
    v.addEventListener('canplay', () => {
      v.play()
      setTimeout(() => {
        if (v.paused && _this.autoplayError) _this.autoplayError()
      }, 500)
    })
    v.addEventListener('play', () => {
      start = 0
    })
    v.addEventListener('ended', () => {
      _this.songIndex++
      if (v.loop === false && window.Rsong.list && window.Rsong.list[_this.songIndex]) {
        _this.url(window.Rsong.list[_this.songIndex].FileHash)
      }
    })
    start = 0
    v.addEventListener('timeupdate', () => {
      if (_this.buffer) {
        try {
          _this.buffer((v.buffered.end(v.buffered.length - 1) / v.duration) * 100)
        } catch (e) {}
      }
      if (_this.lrcUpdate) {
        for (let i = start; i < _this._lrc.len; i++) {
          if (Math.abs(_this._lrc.time[i] - v.currentTime) <= 1) {
            if (start !== i) {
              start = i
              _this.lrcUpdate(_this._lrc.text[i])
            }
            break
          }
        }
      }
      if (_this.timeUpdate) _this.timeUpdate(v.currentTime, v.duration)
    })
  },
  search (kw, fn) {
    let _this, songHash, songName, firstTime, list
    _this = this
    list = window.Rsong.list
    if (/^\d+$/.test(kw)) {
      if (list && list[kw]) {
        _this.url(list[kw].FileHash, fn)
      } else if (window.Rsong.song) {
        _this.stop()
        if (fn) fn()
      }
    } else {
      songHash = window.localStorage.getItem('songHash')
      songName = window.localStorage.getItem('songName')
      firstTime = !kw && !songHash
      if (kw || firstTime) {
        kw = firstTime ? '许巍 - 空谷幽兰' : kw
        _this.find(kw, () => {
          list = window.Rsong.list
          if (list && list[0]) {
            _this.songIndex = 0
            _this.url(list[0].FileHash)
          }
          if (fn) fn(kw)
        })
      } else {
        _this.url(songHash)
        if (fn) fn(songName)
      }
    }
  },
  play () {
    window.Rsong.el.play()
  },
  pause () {
    window.Rsong.el.pause()
  },
  paused () {
    return window.Rsong.el.paused
  },
  stop () {
    window.Rsong.el.currentTime = 0
    window.Rsong.el.pause()
  },
  toggleLoop () {
    window.Rsong.el.loop = !window.Rsong.el.loop
    return window.Rsong.el.loop
  },
  getName () {
    return window.Rsong.song ? window.Rsong.song.audio_name : ''
  },
  getList () {
    return window.Rsong.list
  },
  find (songName, fn) {
    let script = document.createElement('script')
    window.musichash = function musichash (res) {
      window.Rsong.list = res.data.lists
      if (fn) fn()
    }
    script.onload = function loaded () {
      document.head.removeChild(script)
      script = script.onload = null
    }
    document.head.appendChild(script)
    script.src = 'http://songsearch.kugou.com/song_search_v2?callback=musichash&keyword=' + songName + '&platform=WebFilter&filter=2'
  },
  url (hash, fn) {
    let _this, Rsong, script
    _this = this
    Rsong = window.Rsong
    script = document.createElement('script')
    window.musicurl = function musicurl (res) {
      Rsong.el.src = res.data.play_url
      Rsong.song = res.data
      _this.lyric()
      window.localStorage.setItem('songHash', res.data.hash)
      window.localStorage.setItem('songName', res.data.audio_name)
      if (_this.srcUpdate) _this.srcUpdate()
      if (fn) fn()
    }
    script.onload = function loaded () {
      document.head.removeChild(script)
      script = script.onload = null
    }
    script.src = 'http://www.kugou.com/yy/index.php?r=play/getdata&hash=' + hash + '&callback=musicurl'
    document.head.appendChild(script)
  },
  lyric () {
    let _this, reg, match, lrc
    _this = this
    reg = /\[([^\]]*?)]([^[]*?)(?=[[\n\u2028\u2029])/g
    lrc = window.Rsong.song.lyrics
    _this._lrc.time = []
    _this._lrc.text = []
    match = reg.exec(lrc)
    while (match) {
      let s = match[1].split(/[:：]+/)
      if (s.length > 2) {
        s = parseInt(s[0]) * 3600 + parseInt(s[1]) * 60 + parseFloat(s[2])
      } else {
        s = parseInt(s[0]) * 60 + parseFloat(s[1])
      }
      _this._lrc.time.push(s)
      _this._lrc.text.push(match[2])
      match = reg.exec(lrc)
    }
    _this._lrc.len = _this._lrc.time.length
  }
}
