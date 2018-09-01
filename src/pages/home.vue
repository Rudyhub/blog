<template>
  <div class="home">
    <div class="computer">
      <transition name="computer-cover" @afterEnter="coverAfterEnd">
        <div v-show="show" class="computer-cover">
          <div class="computer-back-cover flex-column">
            <img class="computer-logo" src="../../static/face.png" alt="">
            <p>RUDY</p>
          </div>
          <div class="computer-screen">
            <welcome v-if="!commandShow"/>
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
import welcome from '../components/welcome'
import command from './home/command'
import keyboard from './home/keyboard'
export default {
  name: 'home',
  components: {welcome, command, keyboard},
  data () {
    return {
      show: false,
      commandShow: false
    }
  },
  mounted () {
    this.show = true
  },
  methods: {
    coverAfterEnd () {
      this.welcomeShow(() => {
        this.commandShow = true
      })
    }
  }
}
</script>

<style>
  .home{
    perspective: 15rem;
    width: 15rem;
    height: 10rem;
    margin: 0 auto;
    overflow: hidden;
  }
  .computer-logo{
    width: 10%;
    opacity: .5;
  }
  .computer{
    transform-style: preserve-3d;
    transform: translateY(1rem);
    width: 8.8rem;
    height: 12rem;
    margin: 0 auto;
  }
  .computer-cover,
  .computer-keyboard,
  .computer-back-cover{
    height: 5rem;
    width: 8.8rem;
    position: absolute;
    left: 0;
    box-sizing: border-box;
    box-shadow: inset 0 0 .02rem #8a8583;
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
    border-radius: .1rem .1rem 0 0;
  }
  .computer-cover-enter-active,
  .computer-cover-leave-active{
    transition: transform 2s .3s;
  }
  .computer-cover-enter,
  .computer-leave-to{
    transform: rotateX(-109deg);
  }
  .computer-keyboard{
    background: linear-gradient(135deg, #222, #17151c);
    transform: rotateX(70deg);
    top: 5rem;
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
    border-bottom: .1rem solid;
    box-shadow: inset 0 -.01rem .02rem #686361;
  }
  .computer-keyboard, .computer-keyboard:after{
    border-radius: 0 0 .25rem .25rem;
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
