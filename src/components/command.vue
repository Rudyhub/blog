<template>
    <div class="command"></div>
</template>

<script>
import utils from '../scripts/utils.js'
import store from '../scripts/store.js'
export default {
  name: 'command',
  data () {
    return {
      input: document.createElement('input'),
      lines: []
    }
  },
  mounted () {
    let _this = this
    this.input.className = 'command-input'

    function addLine () {
      let line = document.createElement('div')
      let head = document.createElement('span')
      let val = _this.input.value
      line.className = 'command-line-user'
      head.className = 'command-head'
      head.innerText = '[Guest ~]: '
      if (_this.input.parentNode) {
        _this.input.parentNode.insertBefore(document.createTextNode(val), _this.input)
        if (val) {
          let sysLine = document.createElement('div')
          let res = store.respone(val)
          sysLine.className = 'command-sys'
          sysLine.innerHTML = typeof res === 'string' ? res : res[0]
          _this.$el.appendChild(sysLine)
        }
      }
      line.appendChild(head)
      line.appendChild(_this.input)
      _this.$el.appendChild(line)
      _this.input.style.width = (line.offsetWidth - head.offsetWidth - 12) + 'px'
      _this.input.value = ''
      _this.$el.scrollTop = _this.$el.scrollHeight
      _this.input.focus()
    }
    addLine()
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        addLine()
      }
    })
    utils.scroll(this.$el)
  }
}
</script>

<style>
  .command{
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 1em;
    overflow: hidden;
    font-size: 12px;
    box-sizing: border-box;
    line-height: 1.4;
  }
  .command-sys{
    padding: 0.6em 0 0.6em 4em;
  }
  .command-head{
    display: inline-block;
    vertical-align: middle;
    padding-right: .5em;
    box-sizing: border-box;
  }
  .command-input{
    border: none;
    background: transparent;
    color: inherit;
    outline: none;
    box-sizing: border-box;
    vertical-align: middle;
    padding: 0;
  }
  @keyframes flicker {
    0%{
      opacity: 0;
    }
    20%{
      opacity: 1;
    }
    60%{
      opacity: 1;
    }
    100%{
      opacity: 0;
    }
  }
</style>
