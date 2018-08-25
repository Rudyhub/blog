<template>
  <div class="about">
    <nav class="nav" ref="nav">
      <router-link class="nav-item" v-for="(navItem, name) of nav" :key="name" :to="'/'+name" tag="a">{{navItem[0]}}</router-link>
      <a class="nav-item" href="javascript:void(0)" @click="toggleHelp">指南</a>
    </nav>
    <popup ref="helpPopup">
      左右拖动可旋转，摁住shift阻止旋转。页面内容溢出时，滚动条虽是隐藏的，但支持上下拖动，也支持滚轮。
    </popup>
    <div class="about-screen about-screen-1">
      <p class="about-p"><img class="about-face" src="/static/face.png" alt="Rudy" draggable="false"></p>
      <p class="fs18 about-p">我是谁并不重要，重要的是我能做什么。</p>
      <p class="fs18 about-p">It's not important who I am, but what I can do.</p>
    </div>
    <div class="about-screen about-screen-2">
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
    <div class="about-screen  about-screen-3">
      <h3 class="about-title">工作经历篇</h3>
      <section class="career">
        <article class="career-item" v-for="(item, index) in career" :key="index">
          <h4><span class="career-date">{{item.date}}</span><span class="career-job">{{item.job}}</span></h4>
          <img v-if="item.logo" class="career-logo" :src="item.logo">
          <div v-else class="career-no-logo">?</div>
          <p class="career-company">{{item.company}}</p>
          <p class="career-harvest">{{item.harvest}}</p>
        </article>
      </section>
    </div>
  </div>
</template>

<script>
import Scrollbar from '../lib/Scrollbar.js'
import aboutStore from './about/aboutStore.js'
import popup from '../components/popup'
export default {
  name: 'about',
  components: {popup},
  data () {
    return aboutStore.data
  },
  created () {
    document.body.appendChild(aboutStore.mask)
  },
  mounted () {
    let _this, el, items, startX, angle, curangle, speeds, speed, timer
    _this = this
    el = _this.$el
    items = _this.$el.querySelectorAll('.about-screen')
    angle = 0
    curangle = 0
    speeds = [0, 0]

    el.classList.add('about-in')
    items[0].addEventListener('animationend', animateEnd, false)
    function animateEnd (e) {
      this.removeEventListener(e.type, animateEnd, false)
      el.classList.remove('about-in')
      rotate()
      document.body.removeChild(aboutStore.mask)
      _this.$refs.nav.classList.add('nav-show')
    }
    el.addEventListener('mousedown', down)
    document.addEventListener('mouseup', end)
    function down (e) {
      if (e.shiftKey) return
      el.classList.remove('about-in')
      startX = e.clientX
      speeds[0] = speeds[1] = 0
      el.addEventListener('mousemove', move)
    }
    function move (e) {
      if (e.shiftKey) return
      curangle = angle + (e.clientX - startX) / 10
      speeds.push(e.clientX)
      speeds.shift()
      rotate()
    }
    function end (e) {
      el.removeEventListener('mousemove', move)
      if (e.shiftKey) return
      clearInterval(timer)
      speed = (speeds[1] - speeds[0]) / 10
      if (speeds[0] > 0 && speeds[1] > 0) {
        timer = setInterval(animteFrame, 16.6)
      }
    }
    function animteFrame () {
      speed *= 0.96
      curangle += speed
      if (Math.abs(speed) < 0.1) {
        clearInterval(timer)
      }
      rotate()
      angle = curangle
    }
    function rotate () {
      items[0].style.transform = 'translateZ(-20vh) rotateY(' + curangle + 'deg)'
      items[1].style.transform = 'translateZ(-20vh) rotateY(' + (curangle + 120) + 'deg)'
      items[2].style.transform = 'translateZ(-20vh) rotateY(' + (curangle + 240) + 'deg)'
    }
    Scrollbar.scroll(items[1])
    Scrollbar.scroll(items[2])
  },
  methods: {
    toggleDetail (e) {
      if (e.shiftKey) return
      e.currentTarget.classList.toggle('chart-detail-show')
    },
    toggleHelp () {
      if (this.$refs.helpPopup.isShow) {
        this.$refs.helpPopup.hide()
      } else {
        this.$refs.helpPopup.show()
      }
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
  .nav{
    text-align: right;
    position: fixed;
    top: 0;
    right: 2em;
    width: 0;
    height: 100%;
    color: #888;
    border: 1px solid #2e6881;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    z-index: 99;
    perspective: 50vw;
    display: flex;
    opacity: 0;
  }
  .nav-show{
    animation: fade-in 1s forwards;
  }
  .nav-item{
    background: rgba(200, 240, 255, 0.3);
    color: #ccc;
    border-radius: 4px;
    display: block;
    padding: .5em;
    line-height: 1;
    cursor: pointer;
    white-space: nowrap;
    width: 2.5em;
    text-decoration: none;
    transform: rotateY(-30deg);
    border: 1px solid #2e6881;
    transition: transform .5s;
  }
  .nav-item:hover{
    background: rgba(200, 240, 255, 0.5);
    transform: rotateY(0);
  }
  .popup{
    color: #333;
  }
  .popup-wrapper{
    max-width: 360px;
    background: rgba(200, 240, 255, 0.8) !important;
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
  .about-screen-1{
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transform: translateZ(-3000vh) rotateY(0);
    z-index: 4;
  }
  .about-screen-2{
    transform: translateZ(-3000vh) rotateY(120deg);
    z-index: 3;
  }
  .about-screen-3{
    transform: translateZ(-3000vh) rotateY(240deg);
    z-index: 2;
  }
  .about-in .about-screen-1{
    animation: rotate-zoom-in-0 5s forwards;
  }
  .about-in .about-screen-2{
    animation: rotate-zoom-in-1 5s forwards;
  }
  .about-in .about-screen-3{
    animation: rotate-zoom-in-2 5s forwards;
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
      transform: translateZ(-20vh) translateX(50vw) rotateY(120deg);
    }
    100%{
      transform: translateZ(-20vh) rotateY(120deg);
    }
  }
  @keyframes rotate-zoom-in-2 {
    0%{
      transform: translateZ(-3000vh) translateX(50vw) rotateY(-180deg);
    }
    80%{
      transform: translateZ(-20vh) translateX(50vw) rotateY(240deg);
    }
    100%{
      transform: translateZ(-20vh) rotateY(240deg);
    }
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
  @keyframes fade-in {
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }
  .chart-more{
    display: table-cell;
    width: 2em;
    vertical-align: middle;
  }
  .chart-detail-show .chart-more-icon{
    display: none;
  }
  .career-item{
    margin: 3% 2em;
    background: rgba(77, 144, 165, 0.3);
    padding: .5em 1em;
    border-radius: 4px;
  }
  .career-date{
    padding-right: 2em;
  }
  .career-logo{
    width: 4%;
    float: left;
  }
  .career-company{
    font-weight: bold;
    color: #aab;
  }
  .career-company,
  .career-harvest{
    margin-left: 6%;
  }
  .career-harvest{
    line-height: 1.6;
    text-align: justify;
    font-size: 14px;
  }
  .career-no-logo{
    width: 4%;
    display: block;
    float: left;
    text-align: center;
  }
</style>
