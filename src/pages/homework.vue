<template>
  <div class="homework">
    <h1>{{book.title}}</h1>
    <img v-for="(item, index) of book.items[0].items" :src="item.img" :key="index" alt="">
  </div>
</template>

<script>
import store from '../scripts/store.js'
export default {
  name: 'homework',
  data () {
    return {
      book: store.works[5]
    }
  }
}
</script>

<style>
body{
  background: #fff;
}
</style>
