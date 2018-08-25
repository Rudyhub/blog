<template>
  <div class="help">
    <div class="help-text">
      <p>注意到没有，敲击键盘的时候，下方的键盘会发光，是不是很酷？</p>
      <p>如何访问其他页面？敲击Enter可以进入命令行模式互动系统，然后</p>
    </div>
    <div class="help-item" v-for="(item,index) of nav" :key="index" v-html="navFilter(item)"></div>
  </div>
</template>

<script>
import store from '../scripts/store.js'

export default {
  name: 'help',
  data () {
    return {
      nav: store.nav
    }
  },
  mounted () {
    this.animateIn()
  },
  methods: {
    toggleAnimate (cls, oldCls, fn) {
      let _this, children, len
      _this = this
      children = this.$el.children
      len = children.length
      children[len - 1].addEventListener('animationend', animateEnd, false)
      for (let i = 0; i < len; i++) {
        let timer = setTimeout(() => {
          clearTimeout(timer)
          if (oldCls) children[i].classList.remove(oldCls)
          children[i].classList.add(cls)
        }, 200 * i)
      }

      function animateEnd (e) {
        this.removeEventListener(e.type, animateEnd, false)
        if (fn) fn('help', e.animationName)
        if (cls === 'animate-in') {
          _this.$emit('animate-in-end', 'help', e.animationName)
        } else {
          _this.$emit('animate-out-end', 'help', e.animationName)
        }
      }
    },
    animateIn (fn) {
      this.toggleAnimate('animate-in', 'animate-out', fn)
    },
    animateOut (fn) {
      this.toggleAnimate('animate-out', 'animate-in', fn)
    },
    navFilter (val) {
      return val[0] + '： 可输入“' + val.join('”、“') + '”'
    }
  }
}
</script>

<style>
  .help{
    font-size: 15px;
    padding: 1em;
    height: 100%;
    overflow: hidden;
    box-sizing: border-box;
    color: #92a3b1;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    max-width: 800px;
    margin: 0 auto;
  }
  @media all and (max-width: 1079px) {
    .help {
      font-size: 1.4vw;
    }
  }
  .help-text,
  .help-item{
    opacity: 0;
    padding: 1em;
  }
  .help-item{
    text-indent: 2em;
    color: #b26821;
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
