<template>
  <div class="help">
    <div class="help-lead">敲击Enter，进入命令行模式，输入页面中文/英文：</div>
    <div class="help-item" v-for="(item,index) of nav" :key="index" v-html="item.slice(0,2).join(' / ')" :title="'可输入：'+item.join('、')"></div>
    <div class="help-start">开始各种骚操作吧！</div>
  </div>
</template>

<script>
import store from '../scripts/store.js'

export default {
  name: 'help',
  data () {
    return {
      nav: []
    }
  },
  created () {
    for (let k in store.nav) {
      if (/^[^_]/.test(k)) {
        this.nav.push(store.nav[k])
      }
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
    }
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
    color: #cb0101;
    font-weight: bold;
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
