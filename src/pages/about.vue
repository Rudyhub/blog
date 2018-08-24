<template>
  <div class="about">
    <div class="about-screen flex">
      <p class="about-p"><img class="about-face" src="/static/face.png" alt="Rudy" draggable="false"></p>
      <p class="fs18 about-p">我是谁并不重要，重要的是我能做什么。</p>
      <p class="fs18 about-p">It's not important who I am, but what I can do.</p>
    </div>
    <div class="about-screen" ref="skillScroll">
      <h3 class="fs16 about-title">技能篇</h3>
      <div class="fs10 chart-header">为了避免使用精通、熟练、掌握、了解等这类模糊概念容易词，以图表试展示不仅更直观，而且结合各项详细描述的话更能准确评估。知识往深了学，便不敢轻易使用“精通”二字。</div>
      <div class="chart fs9">
        <div class="chart-line" v-for="(skill, index) of skills" :key="index" @click="toggleDetail">
          <div class="chart-hd">{{skill.name}}</div>
          <div class="chart-td">
            <span class="chart-progress" :title="skill.name">
              <i class="chart-progress-value" :style="'width:' + skill.value + '%;background:'+chartColor[skill.type].color">{{skill.value}}%</i>
            </span>
            <div class="chart-detail fs10" v-html="skill.detail"></div>
          </div>
          <div class="fs18 chart-more"><b class="chart-more-icon">&#187;</b></div>
        </div>
      </div>
      <div class="chart-legendbar fs10">
        <div class="chart-legend" v-for="(item, index) of chartColor" :key="index">
          <i class="chart-legend-color" :style="'background:'+item.color" :title="item.text"></i>
          <span class="chart-legend-text">{{item.text}}</span>
        </div>
      </div>
    </div>
    <div class="about-screen">
      <h3 class="about-title">工作经历篇</h3>
      <div class="about-career">
        <div class="about-career-item" v-for="(item, index) in career" :key="index">
          <div><img :src="item.logo" style="max-height: 8vh;"></div>
          <div class="about-career-date">{{item.date}} {{item.company}} {{item.job}}</div>
          <div class="about-career-harvest">{{item.harvest}}</div>
        </div>
      </div>
    </div>
    <div class="about-screen">
    </div>
  </div>
</template>

<script>
import Scrollbar from '../lib/Scrollbar.js'
import aboutStore from './about/aboutStore.js'
export default {
  name: 'about',
  data () {
    return aboutStore.data
  },
  mounted () {
    let _this, el, children, startX, angle, curangle, speeds, speed, timer
    _this = this
    el = _this.$el
    children = _this.$el.children
    angle = 0
    curangle = 0
    speeds = [0, 0]
    el.addEventListener('mousedown', down)
    document.addEventListener('mouseup', end)
    el.classList.add('about-in')
    function down (e) {
      el.classList.remove('about-in')
      startX = e.clientX
      speeds[0] = speeds[1] = 0
      el.addEventListener('mousemove', move)
      rotate()
    }
    function move (e) {
      curangle = angle + (e.clientX - startX) / 10
      speeds.push(e.clientX)
      speeds.shift()
      rotate()
    }
    function end () {
      el.removeEventListener('mousemove', move)
      clearInterval(timer)
      speed = (speeds[1] - speeds[0]) / 10
      if (speeds[0] > 0 && speeds[1] > 0) {
        timer = setInterval(animteFrame, 16.6)
      }
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
      children[0].style.transform = 'translateZ(-20vh) rotateY(' + curangle + 'deg)'
      children[1].style.transform = 'translateZ(-20vh) rotateY(' + (curangle + 90) + 'deg)'
      children[2].style.transform = 'translateZ(-20vh) rotateY(' + (curangle + 180) + 'deg)'
      children[3].style.transform = 'translateZ(-20vh) rotateY(' + (curangle + 270) + 'deg)'
    }
    Scrollbar.scroll(this.$refs.skillScroll)
  },
  methods: {
    toggleDetail (e) {
      e.currentTarget.classList.toggle('chart-detail-show')
    }
  }
}
</script>

<style>
  .about{
    height: 100vh;
    position: relative;
    overflow: hidden;
    background: #07080d;
    perspective: 100vw;
    color: #ccd;
    user-select: none;
  }
  .flex{
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .about-screen{
    background: rgba(200, 240, 255, 0.2);
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    transform-origin: left;
    border: 3px solid #2e6881;
    padding: .5em;
    box-sizing: border-box;
    overflow: hidden;
  }
  .about-screen:nth-child(1){
    transform: translateZ(-3000vh) rotateY(0);
    z-index: 4;
  }
  .about-screen:nth-child(2){
    transform: translateZ(-3000vh) rotateY(90deg);
    z-index: 3;
  }
  .about-screen:nth-child(3){
    transform: translateZ(-3000vh) rotateY(180deg);
    z-index: 2;
  }
  .about-screen:nth-child(4){
    transform: translateZ(-3000vh) rotateY(270deg);
    z-index: 1;
  }
  .about-in .about-screen:nth-child(1){
    animation: rotate-zoom-in-0 5s forwards;
  }
  .about-in .about-screen:nth-child(2){
    animation: rotate-zoom-in-1 5s forwards;
  }
  .about-in .about-screen:nth-child(3){
    animation: rotate-zoom-in-2 5s forwards;
  }
  .about-in .about-screen:nth-child(4){
    animation: rotate-zoom-in-3 5s forwards;
  }
  .about-face{
    width: 50%;
    border-radius: 50%;
    margin: 0 auto;
    display: block;
  }
  .about-p{
    margin: .3em 0;
  }
  .fs20{
    font-size: 2vw;
  }
  .fs18{
    font-size: 1.8vw;
  }
  .fs16{
    font-size: 1.6vw;
  }
  .fs14{
    font-size: 1.4vw;
  }
  .fs12{
    font-size: 1.2vw;
  }
  .fs10{
    font-size: 1vw;
  }
  .fs9{
    font-size: .9vw;
  }
  .fs8{
    font-size: .8vw;
  }
  .about-title{
    text-align: center;
    margin: .5em 0;
  }
  .chart-header{
    margin-left: 6em;
    text-indent: 2em;
    padding: .5em 0;
  }
  .chart{
    display: table;
    width: 100%;
  }
  .chart-line{
    display: table-row;
  }
  .chart-line:hover,
  .chart-detail-show{
    background-color: rgba(255,255,255,.1);
  }
  .chart-separation .chart-hd{
    border-bottom: 1px dotted;
  }
  .chart-hd{
    display: table-cell;
    width: 10em;
    text-align: right;
    vertical-align: middle;
    border-right: 1px solid;
    box-sizing: border-box;
    padding: .4em;
  }
  .chart-td{
    display: table-cell;
    vertical-align: middle;
    box-sizing: border-box;
  }
  .chart-progress{
    display: inline-block;
    width: calc(100% - 2em);
    background: rgba(255,255,255,.2);
    position: relative;
    border-radius: 1em;
    line-height: 1;
    overflow: hidden;
    vertical-align: middle;
    margin: 0 1em;
  }
  .chart-progress-value{
    display: inline-block;
    background: rgba(111,174,9,.5);
    border-radius: 1em;
    text-indent: 1em;
  }
  .chart-legendbar{
    padding: .5em 0 6%;
    text-align: center;
  }
  .chart-legend{
    display: inline-block;
    padding: 0 1em;
  }
  .chart-legend-color{
    display: inline-block;
    width: 1em;
    height: 1em;
    vertical-align: middle;
    margin-right: .6em;
  }
  .chart-legend-color{
    display: inline-block;
    vertical-align: middle;
  }
  .chart-detail{
    margin: .5em 1em;
    line-height: 1.5;
    display: none;
    opacity: 0;
    text-indent: 2em;
  }
  .chart-detail-show .chart-detail{
    display: block;
    animation: fade-in .5s forwards;
  }
  .chart-more{
    display: table-cell;
    width: 2em;
    vertical-align: middle;
  }
  .chart-detail-show .chart-more-icon{
    display: none;
  }
  @keyframes fade-in {
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }
  @keyframes rotate-zoom-in-0 {
    0%{
      transform: translateZ(-3000vh) translateX(50vw) rotateY(-360deg);
    }
    80%{
      transform: translateZ(-20vh) translateX(50vw) rotateY(0);
    }
    100%{
      transform: translateZ(-20vh) rotateY(0);
    }
  }
  @keyframes rotate-zoom-in-1 {
    0%{
      transform: translateZ(-3000vh) translateX(50vw) rotateY(-270deg);
    }
    80%{
      transform: translateZ(-20vh) translateX(50vw) rotateY(90deg);
    }
    100%{
      transform: translateZ(-20vh) rotateY(90deg);
    }
  }
  @keyframes rotate-zoom-in-2 {
    0%{
      transform: translateZ(-3000vh) translateX(50vw) rotateY(-180deg);
    }
    80%{
      transform: translateZ(-20vh) translateX(50vw) rotateY(180deg);
    }
    100%{
      transform: translateZ(-20vh) rotateY(180deg);
    }
  }
  @keyframes rotate-zoom-in-3 {
    0%{
      transform: translateZ(-3000vh) translateX(50vw) rotateY(-90deg);
    }
    80%{
      transform: translateZ(-20vh) translateX(50vw) rotateY(270deg);
    }
    100%{
      transform: translateZ(-20vh) rotateY(270deg);
    }
  }
</style>
