<template>
  <div class="about">
    <tabs :items="items"></tabs>
    <div class="about-banner">
      <vbanner ref="vbanner"></vbanner>
    </div>
    <button @click="playBanner">play</button>
    <button @click="pauseBanner">pause</button>
    <keep-alive>
      <div :is="aboutMain"></div>
    </keep-alive>
  </div>
</template>

<script>
// import Scrollbar from '../lib/Scrollbar.js'
import vbanner from './about/vbanner'
import popup from '../components/popup'
import tabs from '../components/tabs'
import resume from './about/resume'
import timeline from './about/timeline'
export default {
  name: 'about',
  components: {vbanner, popup, tabs},
  data () {
    return {
      aboutMain: null,
      items: ['普通', '时间轴', '事件']
    }
  },
  mounted () {
    this.aboutMain = resume
    this.$on('tab', this.onTabChange)
  },
  methods: {
    modeFn (mode) {
      switch (mode) {
        case 1: console.log(1); break
        case 2: console.log(2); break
        default: console.log(mode)
      }
      this.$refs.popup.hide()
    },
    popupFn () {
      let popup
      popup = this.$refs.popup
      popup.show()
    },
    onTabChange (e, index) {
      if (index === 0) {
        this.aboutMain = resume
      } else {
        this.aboutMain = timeline
      }
    },
    playBanner (e) {
      this.$refs.vbanner.video.play()
    },
    pauseBanner () {
      // this.$refs.vbanner.video.pause()
      this.$refs.vbanner.blur(4)
    }
  }
}
</script>

<style>
  .about{
    height: 100vh;
    position: relative;
  }
</style>
