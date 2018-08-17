<template>
  <canvas class="v-banner"></canvas>
</template>

<script>
export default {
  name: 'vbanner',
  props: {
    src: {
      type: [String],
      default: './static/001.mp4'
    },
    width: {
      type: [Number, String],
      default: 1280
    },
    height: {
      type: [Number, String],
      default: 720
    }
  },
  data () {
    return {
      originWidth: 0,
      originHeight: 0
    }
  },
  mounted () {
    let _this, v
    _this = this
    v = document.createElement('video')
    v.addEventListener('loadedmetadata', function metaFn () {
      this.removeEventListener('loadedmetadata', metaFn, false)
      _this.originWidth = this.videoWidth
      _this.originHeight = this.videoHeight
    }, false)
    v.src = this.src
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
