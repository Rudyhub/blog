<template>
  <div class="about">
    <div class="about-screen flex">
      <p><img class="about-face" src="/static/face.png" alt="Rudy" draggable="false"></p>
      <p class="fs20">我是谁并不重要，重要的是我能做什么。</p>
      <p class="fs20">It's not important who I am, but what I can do.</p>
    </div>
    <div class="about-screen" ref="skillScroll">
      <div class="fs16 chart-title">技能篇</div>
      <div class="fs10 chart-header">为了避免使用精通、熟练、掌握、了解等这类模糊概念容易词，以图表试展示不仅更直观，结合各项详细描述更能准确评估。知识往深了学，更明白和尊重“精通”二字的神圣。</div>
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
      <div class="bottom-space"></div>
      <div class="chart-detail fs12" ref="chartDetail"></div>
    </div>
    <div class="about-screen">
    </div>
    <div class="about-screen">
    </div>
  </div>
</template>

<script>
import Scrollbar from '../lib/Scrollbar.js'
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
        detail: `前端任意需求，封装库、写框架、写web游戏，可实现ES6和ES5互转。
        陌生框架，扫几眼就能用，并能猜测其大概构架和原理，可修改和优化源码。
        90%的程度值是针对web前端而言的，其余的10%代表冷门、偏门的对象和API。
        然而，如果非把webGL算在内，则降为70%。`
      }, {
        type: 0,
        name: 'html',
        value: 96,
        detail: '常用的都没什么技术含量，除非算上SEO、svg、XML。SEO我虽不深入，但因为尝试过写简单的爬虫，心中有数。svg绘图基本掌握，动画方面稍弱。XML则用得不多。'
      }, {
        type: 0,
        name: 'css',
        value: 94,
        detail: '任意布局均可实现，并且知道多种方法及其性能优劣和兼容性。比如关于浮动、文档流、动画、3D等。'
      }, {
        type: 0,
        name: 'vue',
        value: 79,
        detail: `多种方法实现任意需求，抽象复用组件，可以在不用vuex的情况模拟store功能。
        事实上不止vue，之所以只列出vue，是想以它代表主流框架，比如angular、微信小程序、react等。
        解释一下：vue、angular、微信小程序虽不是一个妈生的，但理念和用法的相似度很高，只要会其中一个，其他的分分钟就能够想得通。
        只有react与其他几个的理念不同，react是函数式创建虚拟DOM输出UI，全程js思维，所以又回到了对js（尤其ES6）的熟悉程度。
        可见，学好原生如同练就一双火眼金睛，框架都是小妖精。`
      }, {
        type: 0,
        name: 'bootstrap',
        value: 86,
        detail: '所有UI框架没有什么难度，如layui、elementUI、amazeUI、mui等亦同理。'
      }, {
        type: 0,
        name: 'nodejs',
        value: 76,
        detail: '写接口，IO处理，数据库增删改查，WebSockect图文与视频直播系统，包括结合ffmpeg实现视频切片点播和直播。'
      }, {
        type: 0,
        name: 'php',
        value: 78,
        detail: '写接口，封装常用类，数据库操作等。我认为是最容易上手和理解的后端语言，我怀疑ES6似乎就是模仿php。'
      }, {
        type: 0,
        name: 'mysql',
        value: 81,
        detail: '数据库语句并不多，因它不需要也不宜处理过多或过于复杂的逻辑，所以几乎所有的语法都会，此外，看了Oracle，感觉语法都几乎一样，其他的数据库估计相差不远。'
      }, {
        type: 0,
        name: 'java',
        value: 68,
        detail: `java是标准而舒服的面向对象编程的语言，掌握得差不多了，包括内存机制。
        java对js的面向对象编程方面帮助极大，尤其关于类的三大特性以及静态属性/方法、原型链属性/方法、私有属性/方法等方面的关系和内存机制。
        再加上看过C++的入门，对内存有更深的了解，还有所谓的指针，其实就是一串16进制的地址，这就更容易明白java或js甚至其他语言的指针和对象实体的存在关系。
        由于缺少java方面更多的实战，68%我觉得行。`
      }, {
        type: 0,
        name: 'node-webkit',
        value: 66,
        detail: `会nodejs、js、html、css基本也就会node-webkit（其简称是nwjs）了，另有比较多人用的electron也一样，都是这些组合，只是构建APP的方式不同而已。
        用它完全是为了结合ffmpeg命令写一个媒体处理软件，就是作品中的RMedia。
        对于写软件尤其移动平台软件，不建议用，因为nwjs、electron打包都很大，而用QT最适合。`
      }, {
        type: 0,
        name: 'actionscript',
        value: 87,
        detail: '被淘汰的基于flash的脚本语言，是我最早掌握的语言，刚学完，html5时代就来了。不过，针对IE6、7、8的兼容性，曾用到它来处理播放器以及批量上传功能。'
      }, {
        type: 1,
        name: 'photoshop',
        value: 98,
        detail: `夸张点说，即使失忆也不会忘记PS如何使用，任意需求必能满足，并且可以全程脱离工具栏、菜单栏而直接快捷键操作，一种效果至少可以用三种方式实现。
        其实本想直接给100%的程度值，最后还是留2%作为退路。
        如果只单纯谈使用，还不足以如此自信，但涉及容差、阈值、色相原理、填充和透明度的区别、混合模式中的各种算法、色彩通道等，
        我敢说几乎没有UI设计师真正的通透明白，大多数都是凭感觉调试和使用，达到目的即止。`
      }, {
        type: 1,
        name: 'AE',
        value: 68,
        detail: 'AE功能太多，而且大多数都是基于插件的运用。68%是对基本动画实现、表达式的书写、图形动画、过渡等功能和一些常用抠像、骨骼、灯光、粒子系统、仿真系统等插件的掌握的评估值。'
      }, {
        type: 1,
        name: 'AI',
        value: 49,
        detail: '曾经很熟，但时隔多年，只能评估为49%了，基本的绘图还是毫无压力的。'
      }, {
        type: 1,
        name: 'CDr',
        value: 52,
        detail: '掌握程度与AI一样。'
      }, {
        type: 1,
        name: 'CAD',
        value: 88,
        detail: '读的景观设计专业，CAD是必修软件，不用多说。'
      }, {
        type: 1,
        name: '3Dmax',
        value: 89,
        detail: '除了较为复杂的异形比较难（有些可能不会）之外，基本想要做什么模型都可以完成。动画方面会，只是很少用，因为它对电脑要求高，而且效果并不太好，一般都是结合AE来完成动画。'
      }, {
        type: 1,
        name: 'sketchup',
        value: 92,
        detail: '虽然景观专业课程里没有它，但它依然是必修的软件，快速建模，效率极高。'
      }, {
        type: 1,
        name: 'vary',
        value: 82,
        detail: '其实就是灯光和材质的运用，以及对一些光子传递的理解。'
      }, {
        type: 1,
        name: 'lumion',
        value: 65,
        detail: '做建筑场景的镜头动画和调节材质其实没有难度，基本上就靠素材库和素材的质量。'
      }, {
        type: 1,
        name: 'flash',
        value: 87,
        detail: '这是最早学的动画软件，如果抛开脚本代码(actionscript)，就非常简单。然而，会用代码了其实也简单。'
      }, {
        type: 2,
        name: '绘画',
        value: 38,
        detail: '无法跟专业的比，还是能看出一点功底，毕竟是自学成才。'
      }, {
        type: 2,
        name: '吉他',
        value: 36,
        detail: '会弹唱，指弹（即独奏）方面很弱。'
      }, {
        type: 2,
        name: '编曲',
        value: 12,
        detail: '知道原理，能玩简单的。'
      }, {
        type: 2,
        name: 'FLstudio',
        value: 58,
        detail: '到是不难，长时间不玩而已。'
      }, {
        type: 2,
        name: 'cubase',
        value: 26,
        detail: '比FLstudio难一些，玩得少。'
      }]
    }
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
    function down (e) {
      startX = e.clientX
      speeds[0] = speeds[1] = 0
      el.addEventListener('mousemove', move)
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
    transform-origin: left;
    border: 3px solid #2e6881;
    padding: .5em;
    box-sizing: border-box;
    overflow: hidden;
  }
  .about-screen:nth-child(1){
    transform: translateZ(-20vh) rotateY(0);
    z-index: 4;
  }
  .about-screen:nth-child(2){
    transform: translateZ(-20vh) rotateY(90deg);
    z-index: 3;
  }
  .about-screen:nth-child(3){
    transform: translateZ(-20vh) rotateY(180deg);
    z-index: 2;
  }
  .about-screen:nth-child(4){
    transform: translateZ(-20vh) rotateY(270deg);
    z-index: 1;
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
    opacity: 0;
  }
  .chart-detail-show{
    display: block;
    animation: fade-in .5s .5s forwards;
  }
  .chart-detail-title{
    font-weight: bold;
    text-align: center;
    padding-bottom: .4em;
  }
  .chart-detail-content{
    text-indent: 2em;
  }
  .bottom-space{
    padding: 3.6% 0;
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
