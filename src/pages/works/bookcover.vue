<template>
  <div>
    <canvasplayer v-if="book.video" :src="book.video" :autoplay="true" :loop="true" class="cover-img"></canvasplayer>
    <img class="cover-img" :src="book.cover" draggable="false">
    <h1 class="cover-title">{{book.title}}</h1>
    <h2 class="cover-subtitle">{{book.subtitle}}</h2>
  </div>
</template>

<script>
import canvasplayer from '../../components/canvasplayer'
export default {
  name: 'bookcover',
  components: {canvasplayer},
  props: ['book']
}
</script>
<style>
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
    max-height: 40vh;
    max-width: 80%;
  }
</style>
