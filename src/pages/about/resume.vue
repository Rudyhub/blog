<template>
  <div class="resume">
    <div class="resume-face">
      <img src="../../../static/face.jpg" alt="">
      <p class="resume-l">我是谁？</p>
      <p class="resume-l">卢晋曲</p>
      <p class="resume-l">一个不只做前端的前端</p>
    </div>
    <drawrect class="draw-rect-1">一个前端开发工程师？</drawrect>
    <drawrect class="draw-rect-2">一个景观设计师？</drawrect>
    <drawrect class="draw-rect-3">一个后期绘图师？</drawrect>
    <drawrect class="draw-rect-4">一位疯狂求知的青年？</drawrect>
  </div>
</template>

<script>
import drawrect from './drawrect'
export default {
  name: 'resume',
  components: {drawrect}
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
    top: 0;
    left: 0;
  }
  .draw-rect-2{
    top: 0;
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
