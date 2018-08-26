<template>
  <div class="home">
    <div class="computer">
      <div class="computer-logo"><img class="logo" src="../../static/face.png" alt=""></div>
      <div class="computer-cover">
        <div class="computer-screen">
          <commad></commad>
        </div>
      </div>
      <div class="computer-keyboard">
        <keyboard></keyboard>
      </div>
    </div>
  </div>
</template>

<script>
import commad from './home/command'
import keyboard from './home/keyboard'
export default {
  name: 'home',
  components: {commad, keyboard}
}
</script>

<style>
  body{
    background: #111;
  }
  .home{
    perspective: 150vh;
    width: 150vh;
    height: 100vh;
    margin: 0 auto;
    overflow: hidden;
  }
  .logo{
    width: 10%;
  }
  .computer{
    transform-style: preserve-3d;
    transform: translateY(10vh);
    width: 88vh;
    height: 120vh;
    margin: 0 auto;
  }
  .computer-cover,
  .computer-keyboard,
  .computer-logo{
    height: 50vh;
    width: 88vh;
    position: absolute;
    left: 0;
    box-sizing: border-box;
    box-shadow: inset 0 0 0.2vh #8a8583;
    overflow: hidden;
  }
  .computer-logo{
    background: linear-gradient(#333, #272224);
    transform: rotateX(-108.8deg);
    transform-origin: bottom;
    animation: computer-cover-in 3s 1s forwards;
    border-radius: 6px 6px 0 0;
    top: 0;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
  }
  .computer-cover{
    background: linear-gradient(#333, #272224);
    transform: rotateX(-109deg);
    transform-origin: bottom;
    top: 0;
    border-radius: 6px 6px 0 0;
    animation: computer-cover-in 3s 1s forwards;
  }
  .computer-keyboard{
    background: linear-gradient(135deg, #222, #17151c);
    transform: rotateX(70deg);
    top: 50vh;
    transform-origin: top;
    border-radius: 0 0 6px 6px;
  }
  .computer-keyboard:after{
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    border-bottom: 1vh solid;
  }
  .computer-screen{
    width: 98%;
    height: 97%;
    margin: 1% 1% 2%;
    background: #111;
    color: #fff;
    backface-visibility: hidden;
    position: absolute;
  }
  @keyframes computer-cover-in {
    0%{
      transform: rotateX(-109deg);
    }
    100%{
      transform: rotateX(0);
    }
  }
</style>
