<template>
  <div class="homework">
    <worksheader :title="title" :active="active" @activeChange="activeFn"/>
    <section ref="body" class="homework-body">
      <article class="homework-art" v-for="(work, index) of items" :key="'w'+index">
        <header class="homework-art-header">
          <h2 class="homework-h2 fs14">{{(index+1)+'. '+work.title}}</h2>
          <p class="homework-date fs12">{{work.date | datemat}}</p>
        </header>
        <imglist :items="work.items" :times="active"/>
      </article>
    </section>
  </div>
</template>

<script>
import utils from '../scripts/utils.js'
import store from '../scripts/store.js'
import worksheader from './works/worksheader'
import imglist from './works/imglist'
export default {
  name: 'homework',
  components: {worksheader, imglist},
  data () {
    return {
      title: store.works.homework.title,
      items: store.works.homework.items,
      active: 2
    }
  },
  mounted () {
    utils.scroll(this.$refs.body)
  },
  methods: {
    activeFn (index) {
      this.active = index
    }
  },
  filters: {
    datemat (date) {
      date = date.toString()
      return date.slice(0, 4) + '-' + date.slice(4, 6) + '-' + date.slice(6)
    }
  }
}
</script>

<style>
  .homework{
    height: 100%;
    background: #fff;
    overflow: hidden;
  }
  .homework-body{
    margin-top: .05rem;
    height: calc(100% - 1rem);
    overflow: hidden;
    position: relative;
  }
  .homework-art{
    margin: 0 auto 25px;
    box-sizing: border-box;
  }
  .homework-h2{
    background: #333;
    color: #fff;
    display: inline-block;
    padding: .5em;
    margin: 0;
    border-radius: 0 .2em .2em 0;
  }
  .homework-date{
    color: #888;
    margin: 0;
    padding-left: 1em;
  }
</style>
