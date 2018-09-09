export default {
  list: [],
  play (kw, fn) {
    let _this, list
    _this = this
    list = window.localStorage.getItem('musiclist')
    if (!list) {
      list = '["蓝莲花"]'
      window.localStorage.setItem('musiclist', list)
    }
    list = JSON.parse(list)
    if (kw && !list.includes(kw)) {
      list.unshift(kw)
      if (list.length > 5) {
        list.pop()
      }
      window.localStorage.setItem('musiclist', JSON.stringify(list))
    }
    _this.find(list[0], () => {
      if (fn) fn()
      if (_this.list && _this.list[0]) {
        _this.url(_this.list[0].FileHash)
      }
    })
  },
  find (songName, fn) {
    let _this = this
    let script = document.createElement('script')
    window.musichash = function musichash (res) {
      _this.list = res.data.lists
      if (fn) fn()
      window.musichash = null
    }
    script.onload = function loaded () {
      document.head.removeChild(script)
      script = script.onload = null
    }
    document.head.appendChild(script)
    script.src = 'http://songsearch.kugou.com/song_search_v2?callback=musichash&keyword=' + songName + '&platform=WebFilter&filter=2'
  },
  url (hash) {
    let script = document.createElement('script')
    window.musicurl = function musicurl (res) {
      window.Rmusic.src = res.data.play_url
      window.musicurl = null
    }
    script.onload = function loaded () {
      document.head.removeChild(script)
      script = script.onload = null
    }
    script.src = 'http://www.kugou.com/yy/index.php?r=play/getdata&hash=' + hash + '&callback=musicurl'
    document.head.appendChild(script)
  }
}
