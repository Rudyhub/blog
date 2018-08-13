<template>
  <div class="help">
    <p>敲击Enter，然后输入你想要访问的页面：</p>
    <p>-h / -? / 帮助</p>
    <p>home / 主页</p>
    <p>works / 作品</p>
    <p>blog / 博客</p>
    <p>album / 相册</p>
    <p>开始各种骚操作吧！</p>
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
.help p:first-child,
.help p:last-child{
  width: 100%;
  padding: 0;
  text-align: center;
}
.help p{
  opacity: 0;
  padding: 0 1em;
}

.help-animate{
  animation: help-up 1.5s forwards alternate;
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
