<template>
    <div class="command">
      <template v-for="(line, index) of lines">
        <div v-if="typeof line === 'object'" class="command-line command-line-system"  :key="index" v-html="'[系统回复]：'+line[0]"></div>
        <div v-else class="command-line-user" :key="index" v-html="line"></div>
      </template>
    </div>
</template>

<script>
export default {
  name: 'command',
  mounted () {
    let isTouch = 'ontouchstart' in document
    let el = this.$el
    let events = isTouch ? ['touchstart', 'touchmove', 'touchend'] : ['mousedown', 'mousemove', 'mouseup']
    let scrollTop, startY, endY, prevY, speed, timer

    el.addEventListener(events[0], startFn, false)
    function startFn (e) {
      el.classList.add('command-unselect')
      startY = isTouch ? e.targetTouches[0].clientY : e.clientY
      endY = startY
      prevY = startY
      scrollTop = el.scrollTop
      el.addEventListener(events[1], moveFn, false)
      document.addEventListener(events[2], endFn, false)
    }
    function moveFn (e) {
      endY = isTouch ? e.targetTouches[0].clientY : e.clientY
      el.scrollTop = scrollTop + startY - endY
      speed = endY - prevY
      prevY = endY
    }
    function endFn () {
      el.removeEventListener(events[1], moveFn, false)
      document.removeEventListener(events[2], endFn, false)
      el.classList.remove('command-unselect')
      let d, dis, dir
      d = Math.abs(speed)
      dis = endY - startY
      dir = dis < 0 ? 1 : -1
      if (Math.abs(dis) > 5) {
        if (timer) clearInterval(timer)
        timer = setInterval(function () {
          d *= 0.8
          if (d < 1) clearInterval(timer)
          el.scrollTop += d * dir
        }, 16.6)
      }
    }
    el.addEventListener('wheel', function (e) {
      e.preventDefault()
      this.scrollTop += e.deltaY
    }, {passive: false})
  },
  data () {
    return {
      lines: ['']
    }
  }
}
</script>

<style scoped>
  .command{
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2em 0;
    overflow: hidden;
    font-size: 12px;
    box-sizing: border-box;
  }
  .command-unselect{
    user-select: none;
  }
  .command-line-user:before{
    content: '[Guest ~]:';
    display: inline-block;
    vertical-align: middle;
    padding-right: .5em;
  }
  .command-line-user:last-child:after{
    content: '|';
    display: inline-block;
    vertical-align: middle;
    animation: flicker 1s infinite;
  }
  .command-line-system{
    margin-left: 4em;
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
