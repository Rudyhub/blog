<template>
  <div class="help">
    <div class="help-lead">敲击Enter，然后输入你想要访问的页面：</div>
    <div class="help-item" v-for="(item,index) in nav" :key="index" v-html="item.slice(0,2).join('/')"></div>
    <div class="help-start">开始各种骚操作吧！</div>
  </div>
</template>

<script>
import store from '../scripts/store.js'
let children, len, callbacks
callbacks = new Map()
function onEnd (e) {
  this.removeEventListener(e.type, onEnd, false)
  callbacks.forEach(fn => {
    if (typeof fn === 'function') fn()
  })
}
function addAnimate (cls, oldCls) {
  for (let i = 0; i < len; i++) {
    let timer = setTimeout(function () {
      clearTimeout(timer)
      if (oldCls) children[i].classList.remove(oldCls)
      children[i].classList.add(cls)
    }, 200 * i)
  }
}

export default {
  name: 'help',
  created () {
    callbacks.clear()
  },
  data () {
    return {
      nav: store.nav
    }
  },
  mounted () {
    children = this.$el.children
    len = children.length
    children[len - 1].addEventListener('webkitAnimationEnd', onEnd, false)
    children[len - 1].addEventListener('animationend', onEnd, false)
    addAnimate('animate-in', 'animate-out')
  },
  animateIn (callback) {
    callbacks.set('animateIn', callback)
  },
  animateOut (callback) {
    callbacks.set('animateOut', callback)
    addAnimate('animate-out', 'animate-in')
  }
}
</script>

<style scoped>
  .help{
    font-size: 15px;
    padding: 1em;
    height: 100%;
    overflow: hidden;
    box-sizing: border-box;
    color: #92a3b1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    align-content: center;
  }
  @media all and (max-width: 1079px) {
    .help {
      font-size: 1.4vw;
    }
  }
  .help-lead,
  .help-start{
    width: 100%;
    text-align: center;
    opacity: 0;
    padding: 1em;
  }
  .help-item{
    opacity: 0;
    padding: 1em;
  }

  .animate-in{
    animation: help-in 1.5s forwards;
  }
  .animate-out{
    animation: help-out 1.5s forwards;
  }
  @keyframes help-in {
    0%{
      opacity: 0;
      transform: translateY(50vh);
    }
    100%{
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes help-out {
    0%{
      opacity: 1;
      transform: translateY(0);
    }
    100%{
      opacity: 0;
      transform: translateY(50vh);
    }
  }
</style>
