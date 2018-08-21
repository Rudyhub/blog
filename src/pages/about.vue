<template>
  <div class="about">
    <div class="about-screen flex">
      <p><img class="about-face" src="/static/face.png" alt="Rudy" draggable="false"></p>
      <p class="fs20">我是谁并不重要，重要的是我能做什么。</p>
      <p class="fs20">It's not important who I am, but what I can do.</p>
    </div>
    <div class="about-screen">
      <div class="fs20">技能：</div>
      <p class="fs14">
        先说关于“精通”、“熟练”、“掌握”和“了解”几个常用程度容易词，其实是文字游戏，没有参照物，任意水平都可以分出几个程度级别，自欺欺人。
        所以，必须定一个参照。
      </p>
      <p class="fs14">
        以Photoshop为参照，任意要求都可以，并且全程快捷键操作，并且同一个结果随意想出至少三种以上的方法来达到，以此视为精通，程度值为100%，则各技能程度值如下：
      </p>
      <div class="fs14">
        <div class="about-item">
          <span class="about-item-name">javascript:</span>
          <span class="progress">
            <i class="progress-value" style="width: 80%;">80%</i>
          </span> <br>
          <small class="about-small">描述：</small>
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
  .about-item{
    border-bottom: 1px dotted #ccd;
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
