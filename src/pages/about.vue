<template>
  <div class="about">
    <div class="about-screen flex">
      <p><img class="about-face" src="/static/face.png" alt="Rudy" draggable="false"></p>
      <p class="fs20">我是谁并不重要，重要的是我能做什么。</p>
      <p class="fs20">It's not important who I am, but what I can do.</p>
    </div>
    <div class="about-screen">
      <div class="fs20">技能：</div>
      <p class="fs12">
        关于技能的掌握程度描述，常见的容易词如“精通”、“熟练”、“掌握”和“了解”，其实是自欺欺人的文字游戏，学得越多越不敢相信“精通”仅止于此。
        说非要用这些词，也只是以我自身各项技能为参照的评估，或许我的“了解”比大多数人的“熟练”更深入。
      </p>
      <!--<p class="fs14">-->
        <!--以Photoshop为参照，任意要求都可以，并且全程快捷键操作，并且同一个结果随意想出至少三种以上的方法来达到，以此视为精通，程度值为100%，则各技能程度值如下：-->
      <!--</p>-->
      <div class="fs12">
        <div class="about-item">
          <span class="about-item-name">js(es5、es6、es7) 、 html5 、 css3:</span>
          <span class="progress">
            <i class="progress-value" style="width: 80%;">80%</i>
          </span> <br>
          <small class="about-small">程度描述：
            前端范畴任意需求都可以实现，封装库、写框架、写游戏皆可。
            相关流行的框架如vue最熟，其次还有react、angular、bootstrap，流行的和不流行的框架拿来就用，并非因为所有的都用过，而是一看API便猜出大概。
            相关工具webpack、gulp、grunt等在我眼里与框架无异，也都是拿来就用，并且只需要花一点点时间就可以知道其内部原理。
            然而，仍有些前端几乎用不到的偏门对象或API不熟悉，还有svg以及基于canvas的2d/webGL没有深入。
          </small>
        </div>
        <div class="about-item">
          <span class="about-item-name">nodeJs:</span>
          <span class="progress">
            <i class="progress-value" style="width: 70%;">70%</i>
          </span> <br>
          <small class="about-small">程度描述：实现前端接口绰绰有余，此外也可写软件（node-webkit/electron）。但大概20%的API没有用过。</small>
        </div>
        <div class="about-item">
          <span class="about-item-name">php+mysql:</span>
          <span class="progress">
            <i class="progress-value" style="width: 70%;">70%</i>
          </span> <br>
          <small class="about-small">程度描述：实现前端接口绰绰有余，增、删、改、查不在话下，sql语法也几乎完全掌握。只是仍有一些函数没有用过，以及相关框架也未用过。</small>
        </div>
        <div class="about-item">
          <span class="about-item-name">as3.0:</span>
          <span class="progress">
            <i class="progress-value" style="width: 70%;">80%</i>
          </span> <br>
          <small class="about-small">程度描述：这是我最先学会的现已被淘汰的语言，起初是用它作动画，后来学习html5后，曾用as3.0来处理文件上传、播放器等的IE678的兼容。</small>
        </div>
      </div>
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
    height: 80vh;
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
  .about-item{
    border-bottom: 1px dotted #ccd;
    margin: 1em 0;
  }
  .about-item-name{
    line-height: 1;
    vertical-align: middle;
    display: inline-block;
  }
  .progress{
    display: inline-block;
    width: calc(100% - 40em);
    background: rgba(255,255,255,.2);
    position: relative;
    border-radius: 1em;
    line-height: 1;
    overflow: hidden;
    vertical-align: middle;
    margin: 0 1em;
  }
  .progress-value{
    display: inline-block;
    background: rgba(111,174,9,.5);
    border-radius: 1em;
    text-align: center;
  }
  .about-small{
    padding: .5em 0;
    display: inline-block;
  }
</style>
