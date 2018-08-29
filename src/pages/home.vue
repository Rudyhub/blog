<template>
  <div class="home">
    <div class="computer">
      <transition name="computer-cover" @afterEnter="commandShow = true">
        <div v-show="show" class="computer-cover">
          <div class="computer-back-cover flex-column">
            <img class="computer-logo" src="../../static/face.png" alt="">
            <p>RUDY</p>
          </div>
          <div class="computer-screen">
            <command :show="commandShow"/>
          </div>
        </div>
      </transition>
      <div class="computer-keyboard">
        <keyboard/>
      </div>
    </div>
  </div>
</template>

<script>
import command from './home/command'
import keyboard from './home/keyboard'
export default {
  name: 'home',
  components: {command, keyboard},
  data () {
    return {
      show: false,
      commandShow: false
    }
  },
  mounted () {
    this.show = true
  }
}
</script>

<style>
  .home{
    perspective: 150vh;
    width: 150vh;
    height: 100vh;
    margin: 0 auto;
    overflow: hidden;
  }
  .computer-logo{
    width: 10%;
    opacity: .5;
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
  .computer-back-cover{
    height: 50vh;
    width: 88vh;
    position: absolute;
    left: 0;
    box-sizing: border-box;
    box-shadow: inset 0 0 0.2vh #8a8583;
    transform-style: preserve-3d;
  }
  .computer-back-cover{
    background: linear-gradient(#333, #272224);
    top: 0;
    color: #888;
    transform: scaleX(-1);
  }
  .computer-cover{
    background: linear-gradient(#333, #272224);
    transform: rotateX(0);
    transform-origin: bottom;
    top: 0;
  }
  .computer-back-cover, .computer-cover{
    border-radius: 1vh 1vh 0 0;
  }
  .computer-cover-enter-active,
  .computer-cover-leave-active{
    transition: transform 3s 1s;
  }
  .computer-cover-enter,
  .computer-leave-to{
    transform: rotateX(-109deg);
  }
  .computer-keyboard{
    background: linear-gradient(135deg, #222, #17151c);
    transform: rotateX(70deg);
    top: 50vh;
    transform-origin: top;
  }
  .computer-keyboard:after{
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-bottom: 1vh solid;
    box-shadow: inset 0 -0.1vh 0.2vh #686361;
  }
  .computer-keyboard, .computer-keyboard:after{
    border-radius: 0 0 2.5vh 2.5vh;
  }
  .computer-screen{
    width: 98%;
    height: 97%;
    margin: 1% 1% 2%;
    background: #111;
    color: #fff;
    position: absolute;
    z-index: 1;
    transform: translate3d(0,0,1px);
  }
</style>
