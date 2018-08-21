<template>
  <div class="about">
    <!--<canvas class="about-cv" ref="canvas"></canvas>-->
    <div class="about-screen">
      <!--<p>我是谁并不重要，重要的是我能做什么。</p>-->
      <!--<p>It's not important who I am, but what I can do.</p>-->
    </div>
    <div class="about-screen">
      <!--<p>我是谁并不重要，重要的是我能做什么。</p>-->
      <!--<p>It's not important who I am, but what I can do.</p>-->
    </div>
    <div class="about-screen">
      <!--<p>我是谁并不重要，重要的是我能做什么。</p>-->
      <!--<p>It's not important who I am, but what I can do.</p>-->
    </div>
    <div class="about-screen">
      <!--<p>我是谁并不重要，重要的是我能做什么。</p>-->
      <!--<p>It's not important who I am, but what I can do.....</p>-->
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
    let _this, el, children, startY, angle, curangle, speeds, speed, timer
    _this = this
    el = _this.$el
    children = _this.$el.children
    angle = 0
    curangle = 0
    speeds = [0, 0]
    el.addEventListener('mousedown', down)
    document.addEventListener('mouseup', end)
    function down (e) {
      startY = e.clientY
      speeds[0] = speeds[1] = 0
      el.addEventListener('mousemove', move)
    }
    function move (e) {
      curangle = angle + (startY - e.clientY) / 10
      speeds.push(e.clientY)
      speeds.shift()
      rotate()
    }
    function end () {
      el.removeEventListener('mousemove', move)
      speed = (speeds[0] - speeds[1]) / 10
      clearInterval(timer)
      timer = setInterval(animteFrame, 16.6)
    }
    function animteFrame () {
      window.cancelAnimationFrame(timer)
      speed *= 0.96
      curangle += speed
      if (Math.abs(speed) < 0.1) {
        clearInterval(timer)
      }
      rotate()
      angle = curangle
    }
    function rotate () {
      children[0].style.transform = 'translateZ(-50vh) rotateX(' + curangle + 'deg)'
      children[1].style.transform = 'translateZ(-50vh) rotateX(' + (curangle + 90) + 'deg)'
      children[2].style.transform = 'translateZ(-50vh) rotateX(' + (curangle + 180) + 'deg)'
      children[3].style.transform = 'translateZ(-50vh) rotateX(' + (curangle + 270) + 'deg)'
    }
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
    perspective: 100vw;
    color: #fff;
    user-select: none;
    -webkit-user-drag: none;
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
    transform: rotateY(45deg);
  }
  .about-main{
    background: rgba(215, 230, 255, 0.3);
    height: 100%;
    overflow: hidden;
    perspective: 100vw;
  }
  .about-main-on{
    animation: rotate-y-in .8s cubic-bezier(.57,.49,.16,1.23) forwards;
  }
  .about-screen{
    background: rgba(200, 240, 255, 0.2);
    position: absolute;
    width: 100%;
    height: 80vh;
    top: 0;
    left: 0;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    transform-origin: bottom;
    border: 3px solid #2e6881;
  }
  .about-screen:nth-child(1){
    transform: translateZ(-50vh) rotateX(0);
  }
  .about-screen:nth-child(2){
    transform: translateZ(-50vh) rotateX(90deg)
  }
  .about-screen:nth-child(3){
    transform: translateZ(-50vh) rotateX(180deg)
  }
  .about-screen:nth-child(4){
    transform: translateZ(-50vh) rotateX(270deg)
  }
</style>
