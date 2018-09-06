<template>
  <div @transitionend="transitionEnd">
    <video v-if="book.video" class="bookcover-img" :src="book.video" autoplay loop></video>
    <img v-else class="bookcover-img" :src="book.cover" draggable="false">
    <h1 class="bookcover-title">{{book.title}}</h1>
    <h2 class="bookcover-subtitle">{{book.subtitle}}</h2>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'bookcover',
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
