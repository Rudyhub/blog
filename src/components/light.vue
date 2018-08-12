<template>
    <div class="light">
      <div class="light-item"></div>
      <div class="light-item"></div>
      <div class="light-item"></div>
    </div>
</template>

<script>
let children, len
export default {
  name: 'light',
  mounted () {
    if (!children) {
      children = this.$el.children
      len = children.length
    }
    let scale
    for (let i = 0; i < len; i++) {
      scale = Math.round(Math.random() * 10 + 10) + 'vw'
      children[i].style.width = children[i].style.height = scale
    }
  }
}
</script>

<style scoped>
.light{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.light-item{
  border-radius: 50%;
  -webkit-filter: brightness(3);
  filter: brightness(3) blur(3px);
  background: #282823;
  mix-blend-mode: color-dodge;
  position: absolute;
  pointer-events: none;
}
.light-item:first-child{
  animation: light-1 10s linear infinite alternate;
}
.light-item:nth-child(2){
  animation: light-2 8s linear infinite alternate;
}
.light-item:nth-child(3){
  animation: light-3 8s linear infinite alternate;
}
@keyframes light-1 {
  0%{
    transform: translate(0, 0);
  }
  50%{
    transform: translate(50vw, 40vh);
  }
  100%{
    transform: translate(100vw, 20vh);
  }
}
@keyframes light-2 {
  0%{
    transform: translate(80vw, 30vh);
  }
  50%{
    transform: translate(45vw, 10vh);
  }
  100%{
    transform: translate(10vw, 60vh);
  }
}
@keyframes light-3 {
  0%{
    transform: translate(30vw, 40vh);
  }
  50%{
    transform: translate(45vw, 50vh);
  }
  100%{
    transform: translate(60vw, 40vh);
  }
}
</style>
