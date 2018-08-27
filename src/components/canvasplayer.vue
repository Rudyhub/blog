<template>
   <canvas></canvas>
</template>

<script>
export default {
  name: 'canvasplayer',
  props: {
    src: [String],
    autoplay: {
      type: [Boolean],
      default: false
    },
    loop: {
      type: [Boolean],
      default: false
    },
    onplay: {
      type: [Function],
      default: function () {}
    },
    onpause: {
      type: [Function],
      default: function () {}
    }
  },
  beforeCreate () {
    this.$video = document.createElement('video')
  },
  created () {
    this.$video.src = this.src
    this.$video.autoplay = this.autoplay
    this.$video.loop = this.loop
  },
  mounted () {
    let _this, timer, w, h, ctx
    _this = this
    ctx = _this.$el.getContext('2d')
    this.$video.addEventListener('play', play)
    function play (e) {
      cancelAnimationFrame(timer)
      timer = requestAnimationFrame(draw)
      _this.onplay(e)
    }
    function draw () {
      if (!w) {
        w = _this.$video.videoWidth
        _this.$el.width = w
      }
      if (!h) {
        h = _this.$video.videoHeight
        _this.$el.height = h
      }
      ctx.drawImage(_this.$video, 0, 0)
      cancelAnimationFrame(timer)
      timer = requestAnimationFrame(draw)
    }
    this.$video.addEventListener('pause', pause)
    function pause (e) {
      cancelAnimationFrame(timer)
      _this.onpause(e)
    }
  },
  methods: {
    play () {
      this.$video.play()
    },
    pause () {
      this.$video.pause()
    }
  }
}
</script>

<style>

</style>
