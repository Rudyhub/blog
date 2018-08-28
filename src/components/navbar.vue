<template>
  <nav class="nav" ref="nav">
    <router-link class="nav-item" v-for="(navItem, name) of nav" :key="name" :to="'/'+name" tag="a">{{navItem[0]}}</router-link>
    <a class="nav-item" href="javascript:void(0)" @click="toggleHelp">指南</a>
  </nav>
</template>

<script>
import store from '../scripts/store.js'
export default {
  name: 'navbar',
  data () {
    let nav = {}
    for (let key in store.nav) {
      if (key !== 'help' && key !== 'clear') {
        nav[key] = store.nav[key]
      }
    }
    return {
      nav
    }
  },
  methods: {
    toggleHelp () {
      this.$parent.toggleHelp()
    },
    fadeIn () {
      this.$el.classList.add('nav-show')
    }
  }
}
</script>

<style scoped>
  .nav{
    text-align: right;
    position: fixed;
    top: 0;
    right: 2em;
    width: 0;
    height: 100%;
    color: #888;
    z-index: 99;
    perspective: 50vw;
    opacity: 0;
  }
  .nav-show{
    animation: fade-in 1s forwards;
  }
  .nav-item{
    background: rgba(200, 240, 255, 0.3);
    color: #ccc;
    border-radius: 4px;
    display: block;
    padding: .5em;
    line-height: 1;
    cursor: pointer;
    white-space: nowrap;
    width: 2.5em;
    text-decoration: none;
    border: 1px solid #2e6881;
    transition: transform .5s;
    transform-origin: right;
    margin: .2em 0;
  }
  .nav-item:hover{
    background: rgba(200, 240, 255, 0.5);
    transform: rotateY(-10deg);
  }
</style>
