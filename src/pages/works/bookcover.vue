<template>
  <div @transitionend="transitionEnd">
    <canvasplayer v-if="book.video" :src="book.video" :autoplay="true" :loop="true" class="bookcover-img"></canvasplayer>
    <img class="bookcover-img" :src="book.cover" draggable="false">
    <h1 class="bookcover-title">{{book.title}}</h1>
    <h2 class="bookcover-subtitle">{{book.subtitle}}</h2>
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
<style>
  .bookcover-title{
    font-size: .6rem;
    line-height: 1;
    padding: .5em;
    border-bottom: 1px solid;
  }
  .bookcover-subtitle{
    text-transform: uppercase;
    font-size: .5rem;
    margin: 0;
  }
  .bookcover-img{
    width: 80%;
    border-radius: 6px;
  }
</style>
