<template>
  <div @transitionend="transitionEnd">
    <canvasplayer v-if="book.video" :src="book.video" :autoplay="true" :loop="true" class="cover-img"></canvasplayer>
    <img class="cover-img" :src="book.cover" draggable="false">
    <h1 class="cover-title">{{book.title}}</h1>
    <h2 class="cover-subtitle">{{book.subtitle}}</h2>
    <slot></slot>
  </div>
</template>

<script>
import canvasplayer from '../../components/canvasplayer'
export default {
  name: 'bookcover',
  components: {canvasplayer},
  props: ['book'],
  methods: {
    transitionEnd (e) {
      this.$emit('transitionend', e)
    }
  }
}
</script>
<style scoped>
  .cover-title{
    font-size: 6vh;
    line-height: 1;
    padding: .5em;
    border-bottom: 1px solid;
  }
  .cover-subtitle{
    text-transform: uppercase;
    font-size: 5vh;
    margin: 0;
  }
  .cover-img{
    width: 80%;
    border-radius: 6px;
  }
</style>
