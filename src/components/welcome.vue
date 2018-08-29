<template>
  <div class="welcome">
    <span class="welcome-char" v-for="(char, index) of chars" :key="index">{{char}}</span>
  </div>
</template>

<script>
export default {
  name: 'welcome',
  data () {
    return {
      chars: 'Welcome Rudy\'s Zone'.split('')
    }
  },
  mounted () {
    this.$parent.welcomeShow = (fn) => {
      let _this, children, len, last
      _this = this
      children = _this.$el.children
      len = children.length
      last = children[len - 1]
      for (let i = 0; i < len; i++) {
        let timer = setTimeout(function () {
          clearTimeout(timer)
          children[i].classList.add('welcome-in')
        }, 100 * i)
      }
      last.addEventListener('animationend', animateEnd, false)
      function animateEnd (e) {
        last.removeEventListener(e.type, animateEnd, false)
        if (fn) fn('welcome', e.animationName)
      }
    }
  }
}
</script>

<style>
  .welcome{
    font-size: 2.8vw;
    text-align: center;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: absolute;
  }
  .welcome-char{
    min-width: .5em;
    opacity: 0;
    transform: translateX(100%);
  }
  .welcome-in{
    animation: char-animate 5s;
  }
  @keyframes char-animate {
    0%{
      transform: translateX(100%);
      opacity: 0;
    }
    20%{
      transform: translateX(0);
      opacity: 1;
    }
    40%{
      transform: translateX(0) rotateX(60deg);
    }
    60%{
      transform: translateX(0) rotateX(0);
    }
    80%{
      transform: translateX(0);
      opacity: 1;
    }
    100%{
      transform: translateX(-100%);
      opacity: 0;
    }
  }
</style>
