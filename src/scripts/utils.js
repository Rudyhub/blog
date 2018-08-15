export default {
  scroll (el) {
    let scrollTop, startY, endY, prevY, speed, timer

    el.addEventListener('wheel', function (e) {
      e.preventDefault()
      this.scrollTop += e.deltaY
    }, {passive: false})

    el.addEventListener('touchstart', startFn, false)

    function startFn (e) {
      startY = e.targetTouches[0].clientY
      endY = startY
      prevY = startY
      scrollTop = el.scrollTop
      el.addEventListener('touchmove', moveFn, false)
      document.addEventListener('touchend', endFn, false)
    }

    function moveFn (e) {
      endY = e.targetTouches[0].clientY
      el.scrollTop = scrollTop + startY - endY
      speed = endY - prevY
      prevY = endY
    }

    function endFn () {
      el.removeEventListener('touchmove', moveFn, false)
      document.removeEventListener('touchend', endFn, false)
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
  }
}
