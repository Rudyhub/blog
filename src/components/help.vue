<template>
  <div class="help">
    <p>按Enter进入命令行模式，输入要访问的页面名称，然后再Enter即可，命令如下：</p>
    <p>-h / -? / 帮助</p>
    <p>home / 主页</p>
    <p>works / 作品</p>
    <p>blog / 博客</p>
    <p>album / 相册</p>
  </div>
</template>

<script>
let children, len
export default {
  name: 'help',
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
        children[i].classList.add('help-animate')
      }, 200 * i)
    }
  }
}
</script>

<style scoped>
.help{
  max-width: 1000px;
  margin: 0 auto;
  font-size: 1.4vw;
  padding: 1em;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  text-align: center;
  color: #92a3b1;
}
.help p{
  opacity: 0;
}
.help-animate{
  animation: help-up 1.5s forwards;
}
@keyframes help-up {
  0%{
    opacity: 0;
    transform: translateY(50vh);
  }
  100%{
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
