<template>
  <div>
    <canvasplayer v-if="book.video" :src="book.video" :autoplay="true" :loop="true" class="cover-img"></canvasplayer>
    <img class="cover-img" :src="book.cover" draggable="false">
    <h1>{{book.title}}</h1>
    <p class="cover-text">{{book.subtitle}}</p>
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
