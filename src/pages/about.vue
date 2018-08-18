<template>
  <div class="about">
    <canvas class="about-cv" ref="canvas"></canvas>
    <div ref="main" class="about-main">
      <tabs :items="items"></tabs>
      <div class="tab-body">
        <keep-alive>
          <div :is="aboutMain"></div>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import tabs from '../components/tabs'
import resume from './about/resume'
export default {
  name: 'about',
  components: {tabs},
  data () {
    return {
      aboutMain: resume,
      items: ['普通', '时间轴', '事件']
    }
  },
  mounted () {
    let _this, cv, ctx, video, timer
    _this = this
    cv = _this.$refs.canvas
    ctx = cv.getContext('2d')
    video = document.createElement('video')
    video.muted = true

    cv.width = _this.$el.offsetWidth
    cv.height = _this.$el.offsetHeight

    function draw () {
      ctx.drawImage(video, 0, 0, cv.width, cv.height)
      timer = requestAnimationFrame(draw)
    }
    function onpause () {
      cancelAnimationFrame(timer)
      _this.$refs.main.classList.add('about-main-on')
    }
    function mainAnimateEnd () {
      cv.classList.add('about-blur')
    }
    video.addEventListener('play', draw)
    video.addEventListener('pause', onpause)
    video.src = './static/001.mp4'
    video.play()
    _this.$refs.main.addEventListener('animationend', mainAnimateEnd)
  },
  methods: {}
}
</script>

<style>
  .about{
    height: 100vh;
    position: relative;
    overflow: hidden;
    background: #07080d;
    perspective: 800px;
  }
  .about-cv{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(100vw * 800 / 1920);
    display: flex;
    margin: auto;
  }
  .about-blur{
    animation: blur-out 1s forwards;
  }
  .about-main{
    background: rgba(215, 230, 255, 0.3);
    transform: rotateY(90deg);
    transform-origin: left;
    width: 90%;
    max-width: 1000px;
    height: 80%;
    margin: auto;
    opacity: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    border-radius: 4px;
    padding: 10px;
    box-sizing: border-box;
  }
  .about-main-on{
    animation: rotate-y-in .8s cubic-bezier(.57,.49,.16,1.23) forwards;
  }
  .tab{
    font-size: 16px;
  }
  .tab-body{
    height: calc(100% - 36px);
    margin-top: 1px;
  }
  @keyframes blur-out {
    0%{
      filter: blur(0);
    }
    100%{
      filter: blur(4px);
    }
  }
  @keyframes rotate-y-in {
    0%{
      transform: rotateY(90deg);
      opacity: 0;
    }
    100%{
      transform: rotateY(0);
      opacity: 1;
    }
  }
</style>
