<template>
  <div class="resume">
    <div class="resume-face">
      <!--<img src="../../../static/face.jpg" alt="">-->
      <p>我是谁并不重要，重要的是我能做什么。</p>
      <p>It's not important who I am, but what I can do.</p>
    </div>
  </div>
</template>

<script>
import drawrect from './drawrect'
export default {
  name: 'resume',
  components: {drawrect},
  data () {
    return {
      text: ['', '', '', '', '']
    }
  }
}
</script>

<style>
  .resume{
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    align-items: center;
    height: 100%;
    color: #fff;
    text-align: center;
    position: relative;
  }
  .resume-face{
    width: 100%;
  }
  .resume-face img{
    border-radius: 50%;
    width: 12vw;
    height: 12vw;
    max-width: 160px;
    max-height: 160px;
    display: block;
    margin: 0 auto;
  }
  .resume-l{
    font-size: 24px;
    margin: .5em 0;
  }
  .resume-m{
    font-size: 14px;
  }
  .draw-rect-1{
    top: 10px;
    left: 0;
  }
  .draw-rect-2{
    top: 10px;
    right: 0;
  }
  .draw-rect-3{
    right: 0;
    bottom: 0;
  }
  .draw-rect-4{
    left: 0;
    bottom: 0;
  }
</style>
