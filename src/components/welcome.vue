<template>
    <div class="welcome">
      <span class="welcome-char" v-for="(char, index) of content" :key="index">{{char}}</span>
    </div>
</template>

<script>
let children, len
export default {
  name: 'welcome',
  mounted () {
    let _this = this
    if (!children) {
      children = _this.$el.children
      len = children.length
    }
    function onEnd (e) {
      children[len - 1].removeEventListener(e.type, onEnd, false)
      _this.$parent.animateEnd()
    }
    children[len - 1].addEventListener('webkitAnimationEnd', onEnd, false)
    children[len - 1].addEventListener('animationend', onEnd, false)
    for (let i = 0; i < len; i++) {
      let timer = setTimeout(function () {
        clearTimeout(timer)
        children[i].classList.add('welcome-animate')
      }, 100 * i)
    }
  },
  data () {
    return {
      content: 'Welcome Rudy\'s Zone'.split('')
    }
  }
}
</script>

<style scoped>
  .welcome{
    font-size: 2.8vw;
    text-align: center;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .welcome-char{
    min-width: .5em;
    opacity: 0;
  }
  .welcome-animate{
    animation: char-animate 5s forwards;
  }
  @keyframes char-animate {
    0%{
      transform: translateX(50vw);
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
      transform: translateX(-50vw);
      opacity: 0;
    }
  }
</style>
