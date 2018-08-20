<template>
  <div class="draw-rect">
    <div class="draw-rect-line draw-rect-line-top"></div>
    <div class="draw-rect-line draw-rect-line-right"></div>
    <div class="draw-rect-line draw-rect-line-bottom"></div>
    <div class="draw-rect-line draw-rect-line-left"></div>
    <div class="draw-rect-slot"><slot></slot></div>
  </div>
</template>

<script>
export default {
  name: 'drawrect',
  props: ['text']
}
</script>

<style>
  .draw-rect{
    width: 20vw;
    height: 12vw;
    position: absolute;
    overflow: hidden;
    border-radius: 6px;
  }
  .draw-rect-line{
    background: #fff;
    position: absolute;
    opacity: .5;
  }
  .draw-rect-line-top,
  .draw-rect-line-bottom{
    height: .2em;
    width: 100%;
    left: 0;
    transform: scaleX(0);
  }
  .draw-rect-line-left,
  .draw-rect-line-right{
    height: 100%;
    width: .2em;
    top: 0;
    transform: scaleY(0);
  }
  .draw-rect-line-top{
    top: 0;
    transform-origin: left;
  }
  .draw-rect-line-bottom{
    transform-origin: right;
    bottom: 0;
  }
  .draw-rect-line-left{
    left: 0;
    transform-origin: bottom;
  }
  .draw-rect-line-right{
    transform-origin: top;
    right: 0;
  }
  .on .draw-rect-line-top{
    animation: draw-x .2s ease-in forwards;
  }
  .on .draw-rect-line-right{
    animation: draw-y .2s .2s linear forwards;
  }
  .on .draw-rect-line-bottom{
    animation: draw-x .2s .4s linear forwards;
  }
  .on .draw-rect-line-left{
    animation: draw-y .2s .6s ease-out forwards;
  }
  .draw-rect-slot{
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  @keyframes draw-x {
    0%{
      transform: scaleX(0);
    }
    100%{
      transform: scaleX(1);
    }
  }
  @keyframes draw-y {
    0%{
      transform: scaleY(0);
    }
    100%{
      transform: scaleY(1);
    }
  }
</style>
