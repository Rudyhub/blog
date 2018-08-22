<template>
  <div class="about">
    <div class="about-screen flex">
      <!--<p><img class="about-face" src="/static/face.png" alt="Rudy" draggable="false"></p>-->
      <!--<p class="fs20">我是谁并不重要，重要的是我能做什么。</p>-->
      <!--<p class="fs20">It's not important who I am, but what I can do.</p>-->
    </div>
    <div class="about-screen">
      <div class="fs16 chart-title">技能篇</div>
      <div class="fs10 chart-header">为避免文字游戏，故不用精通、熟练、掌握、了解等这类文学界的程度容易词来表述能力，而用图表以自身各项技能相对的程度值（百分比）为参照来展现，这个值只是评估值，建议细读每一项的描述，以便准确的判断这个值所代表的能力。学得越多越不敢说自己精通，因为即便现有能力应对日常工作绰绰有余、毫无难度，但却一直发现有新的领域并未触及。</div>
      <div class="chart fs9" @mouseleave="chartLeaveFn">
        <div class="chart-line" v-for="(skill, index) of skills" :key="index" @mouseenter="chartEnterFn(index, $event)">
          <div class="chart-hd">{{skill.name}}</div>
          <div class="chart-td">
            <span class="chart-progress" :title="skill.name">
              <i class="chart-progress-value" :style="'width:' + skill.value + '%;background:'+chartColor[skill.type].color">{{skill.value}}%</i>
            </span>
          </div>
        </div>
      </div>
      <div class="chart-legendbar fs10">
        <div class="chart-legend" v-for="(item, index) of chartColor" :key="index">
          <i class="chart-legend-color" :style="'background:'+item.color" :title="item.text"></i>
          <span class="chart-legend-text">{{item.text}}</span>
        </div>
      </div>
      <div class="chart-detail fs12" ref="chartDetail"></div>
    </div>
    <div class="about-screen">
    </div>
    <div class="about-screen">
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      chartColor: [
        {color: 'rgba(111,174,9,.5)', text: '程序编程语言及框架'},
        {color: 'rgba(211, 108, 16, 0.5)', text: 'UI、工程设计及动画软件应用'},
        {color: 'rgba(96, 43, 161, 0.5)', text: '业余爱好'}],
      skills: [{
        type: 0,
        name: 'javascript',
        value: 90,
        detail: `轻松处理前端任意需求，能封装库、写框架、写web游戏，可脱离jquery而用原生。
        相关框架一看便知其所以然，直白的说，随便给个框架，扫几眼就能用，并能猜测其大概的实现原理，
        遇到报错很快明白其原因，给点时间就可以修改源码，包括优化框架的某些写法。
        对ES6掌握程度为可轻松实现ES6和ES5互转。
        90%的能力值是针对web前端而言的，其余的10%代表几乎用不到的冷门、偏门的对象和API。
        然而，如果把canvas的2d/webGL算在内，那得降为70%。所以，试问，何谓精通？`
      }, {
        type: 0,
        name: 'html',
        value: 97,
        detail: 'html没什么可说的，除非把SEO也包括进来，那还可以聊几句。'
      }, {
        type: 0,
        name: 'css',
        value: 94,
        detail: 'css除了令人惊喜的3D动画引擎值说之外，其他的都是与html一样，属于无脑针线活，繁琐，需耐心。'
      }, {
        type: 0,
        name: 'vue',
        value: 79,
        detail: `可以实现任意需求，抽象复用组件，可以在不用vuex的情况模拟store功能。
        事实上我掌握的框架不止vue，之所以只列出vue，是想用它代表主流框架，比如angular、微信小程序、react等啥的。
        解释一下：vue、angular、微信小程序虽不是一个妈生的，但理念和用法的相似度很高，只要会其中一个，其他的分分钟就能够想得通。
        其中react其他几个的理念不同，但整个一看就是函数式创建虚拟DOM输出UI，就是全程js思维，所以其难度又回到了原生js（尤其ES6）的能力。
        所以总结就是，学好原生如同练就一双火眼金睛，框架都是小妖精。`
      }, {
        type: 0,
        name: 'bootstrap',
        value: 86,
        detail: '勉强用它来代表一下响应式UI界，低难度，js部分基于jquery这我就不太喜欢了。除了它，还有很多优秀的前端UI框架，如layui、amazeUI、mui等。尤其当下流行的layui，然而，难度都差不多。'
      }, {
        type: 0,
        name: 'nodejs',
        value: 76,
        detail: '无压力写前端接口，文件IO处理，数据库增删除改查，WebSockect直播图文与视频的直播系统的实现，包括结合ffmpeg实现视频切片点播和直播。'
      }, {
        type: 0,
        name: 'php',
        value: 78,
        detail: ''
      }, {
        type: 0,
        name: 'mysql',
        value: 81,
        detail: ''
      }, {
        type: 0,
        name: 'java',
        value: 68,
        detail: ''
      }, {
        type: 0,
        name: 'node-webkit',
        value: 66,
        detail: ''
      }, {
        type: 0,
        name: 'actionscript',
        value: 87,
        detail: ''
      }, {
        type: 1,
        name: 'photoshop',
        value: 98,
        detail: ''
      }, {
        type: 1,
        name: 'AE',
        value: 68,
        detail: ''
      }, {
        type: 1,
        name: 'AI',
        value: 49,
        detail: ''
      }, {
        type: 1,
        name: 'CDr',
        value: 52,
        detail: ''
      }, {
        type: 1,
        name: 'CAD',
        value: 88,
        detail: ''
      }, {
        type: 1,
        name: '3Dmax',
        value: 89,
        detail: ''
      }, {
        type: 1,
        name: 'sketchup',
        value: 92,
        detail: ''
      }, {
        type: 1,
        name: 'vary',
        value: 82,
        detail: ''
      }, {
        type: 1,
        name: 'lumion',
        value: 65,
        detail: ''
      }, {
        type: 1,
        name: 'flash',
        value: 87,
        detail: ''
      }, {
        type: 2,
        name: '绘画',
        value: 38,
        detail: ''
      }, {
        type: 2,
        name: '吉他',
        value: 36,
        detail: ''
      }, {
        type: 2,
        name: '编曲',
        value: 12,
        detail: ''
      }, {
        type: 2,
        name: 'FLstudio',
        value: 58,
        detail: ''
      }, {
        type: 2,
        name: 'cubase',
        value: 26,
        detail: ''
      }]
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
      clearInterval(timer)
      speed = (speeds[0] - speeds[1]) / 10
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
      children[0].style.transform = 'translateZ(-50vh) rotateX(' + curangle + 'deg)'
      children[1].style.transform = 'translateZ(-50vh) rotateX(' + (curangle + 90) + 'deg)'
      children[2].style.transform = 'translateZ(-50vh) rotateX(' + (curangle + 180) + 'deg)'
      children[3].style.transform = 'translateZ(-50vh) rotateX(' + (curangle + 270) + 'deg)'
    }
  },
  methods: {
    chartEnterFn (index, e) {
      let el = this.$refs.chartDetail
      el.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight + 'px'
      el.innerHTML = '<div class="fs12 chart-detail-title">' + this.skills[index].name + '掌握程度</div><div class="chart-detail-content">' + this.skills[index].detail + '</div>'
      el.classList.add('chart-detail-show')
    },
    chartLeaveFn () {
      this.$refs.chartDetail.classList.remove('chart-detail-show')
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
    transform-origin: bottom;
    border: 3px solid #2e6881;
    padding: .5em;
    box-sizing: border-box;
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
  .about-face{
    width: 50%;
    border-radius: 50%;
    margin: 0 auto;
    display: block;
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
  .chart-title{
    text-align: center;
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
  .chart-line:hover{
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
    padding: .5em 0;
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
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 1em 0 10em;
    padding: 1em;
    background: #fff;
    border-radius: .4em;
    color: #333;
    line-height: 1.5;
    display: none;
  }
  .chart-detail-show{
    display: block;
    animation: fade-in .5s forwards;
  }
  .chart-detail-title{
    font-weight: bold;
    text-align: center;
    padding-bottom: .4em;
  }
  .chart-detail-content{
    text-indent: 2em;
  }
  @keyframes fade-in {
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }
</style>
