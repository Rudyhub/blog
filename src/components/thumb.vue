<template>
  <div class="thumb" :style="{background: 'url('+src+') no-repeat center', backgroundSize: (size || 'cover')}">
    <img class="thumb-img" :src="src" :alt="alt" :title="title">
  </div>
</template>

<script>
export default {
  name: 'thumb',
  props: ['scale', 'src', 'alt', 'title', 'size'],
  mounted () {
    if (typeof this.scale === 'number') this.$el.style.height = this.scale * this.$el.offsetWidth + 'px'
  }
}
</script>

<style>
  .thumb{
    overflow: hidden;
  }
  .thumb-img{
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>
