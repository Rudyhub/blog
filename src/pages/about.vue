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
        90%的程度值是针对web前端而言的，其余的10%代表几乎用不到的冷门、偏门的对象和API。
        然而，如果把canvas的2d/webGL算在内，那得降为70%。所以，试问，何谓精通？`
      }, {
        type: 0,
        name: 'html',
        value: 96,
        detail: '无需。'
      }, {
        type: 0,
        name: 'css',
        value: 94,
        detail: '无需。'
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
        detail: '所有UI框架都一样的简单，如layui、amazeUI、mui等亦同理。'
      }, {
        type: 0,
        name: 'nodejs',
        value: 76,
        detail: '无压力写前端接口，文件IO处理，数据库增删改查，WebSockect直播图文与视频的直播系统的实现，包括结合ffmpeg实现视频切片点播和直播。'
      }, {
        type: 0,
        name: 'php',
        value: 78,
        detail: '针对web接口的实现，数据库操作，常用类的封装等。我认为是最容易上手和理解的后端语言，我怀疑ES6似乎就是模仿php。'
      }, {
        type: 0,
        name: 'mysql',
        value: 81,
        detail: '数据库语句并不多，因它不需要也不宜处理过多或过于复杂的逻辑，所以几乎所有的语法都会，此外，看了Oracle，感觉语法都几乎一样，其他的数据库估计相差不远。'
      }, {
        type: 0,
        name: 'java',
        value: 68,
        detail: `完全理解类的三大特性以及抽象类、接口、内存机制等。
        java是标准而舒服的面向对象编程的语言，通过它，还帮助我更深入理解了js，
        特别是关于类的继承以及静态属性/方法、原型链属性/方法、私有属性/方法等的关系和内存机制，
        当然，也特别明白java与js存在的区别。
        对java只是缺少更多实战，68%我觉得行。`
      }, {
        type: 0,
        name: 'node-webkit',
        value: 66,
        detail: `会nodejs、js、html、css基本也就会node-webkit（也即nwjs）了，当然electron也一样。用它完全是为了结合ffmpeg命令写一个媒体处理软件，就是作品中的RMedia。
        对于写软件尤其移动平台软件，建议用QT，因为无论nwjs还是electron打包很大，要把node和nw一起打包。`
      }, {
        type: 0,
        name: 'actionscript',
        value: 87,
        detail: '被淘汰的基于flash的脚本语言，是我最早学的语言，刚学完，html5时代就来了。不过，针对IE6、7、8的兼容性曾用到它来处理播放器以及批量上传功能。'
      }, {
        type: 1,
        name: 'photoshop',
        value: 98,
        detail: `夸张点说，即使失忆也不会忘记PS如何使用，任意需求必能满足，并且可以全程脱离工具栏菜单栏而直接快捷键操作，一种结果至少可以用三种方式达到。
        其实本想直接评估100%的程度值，但一想还是留2%作为退路。
        之所以敢这么说，是因为最先学的软件除了office系列之外，ps是第一个，也是用得最多的一个，而且还专职用了一年多的ps。
        还有，如果只单纯谈使用，还不足以如此自信，我的ps知识包括了色相原理、填充和透明度的区别、混合模式、色彩通道等一些一般UI设计都可能不知道的知识。`
      }, {
        type: 1,
        name: 'AE',
        value: 68,
        detail: '其实AE功能太多了，而且大多数都是基于插件的运用。68%是对基本动画实现、表达式的书写、图形动画、过渡等功能的掌握和一些常用抠像、骨骼、灯光、粒子系统、仿真系统等插件的掌握的评估值。'
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
