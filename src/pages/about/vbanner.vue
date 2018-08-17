<template>
  <canvas class="v-banner"></canvas>
</template>

<script>
import StackBlur from '../../lib/StackBlur.js'
export default {
  name: 'vbanner',
  props: {
    width: {
      type: [Number],
      default: 1280
    },
    height: {
      type: [Number],
      default: 720
    }
  },
  data () {
    return {
      ctx: null,
      video: document.createElement('video'),
      originWidth: 0,
      originHeight: 0
    }
  },
  mounted () {
    let _this, timer
    _this = this
    this.ctx = _this.$el.getContext('2d')

    function meta () {
      _this.$el.width = _this.originWidth = this.videoWidth
      _this.$el.height = _this.originHeight = this.videoHeight
    }

    function draw () {
      _this.ctx.drawImage(_this.video, 0, 0, _this.originWidth, _this.originHeight)
      timer = requestAnimationFrame(draw)
    }

    function onpause () {
      cancelAnimationFrame(timer)
    }

    function onplay () {
      _this.video.play()
    }

    _this.video.addEventListener('loadedmetadata', meta, false)
    _this.video.addEventListener('play', draw, false)
    _this.video.addEventListener('pause', onpause, false)
    _this.video.addEventListener('canplay', onplay, false)
    _this.src('./static/001.mp4')
  },
  methods: {
    src (src) {
      this.video.src = src
    },
    blur (val) {
      StackBlur.canvasRGB(this.$el, 0, 0, this.originWidth, this.originHeight, val)
    },
    text (txt) {
      let ctx = this.ctx
      ctx.font = '40px "Source Sans Pro","Helvetica Neue",Arial,"Microsoft YaHei",sans-serif'
      ctx.fillStyle = '#fff'
      ctx.fillText(txt, 5, 45)
    }
  }
}
</script>

<style>
  .v-banner{
    width: 100%;
    height: 100%;
    background: #000;
  }
</style>
