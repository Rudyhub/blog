<template>
  <div class="landscape">
    <worksheader :title="title" :active="active" @activeChange="activeFn"/>
    <section ref="body" class="landscape-body">
      <article class="landscape-art" v-for="(work, index) of items" :key="'w'+index">
        <header class="landscape-art-header">
          <h2 class="landscape-h2 fs14">{{(index+1)+'. '+work.title}}</h2>
          <p class="landscape-date fs12">{{work.date | datemat}}</p>
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
  name: 'landscape',
  components: {worksheader, imglist},
  data () {
    return {
      title: store.works.landscape.title,
      items: store.works.landscape.items,
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
  .landscape{
    height: 100%;
    background: #fff;
    overflow: hidden;
  }
  .landscape-body{
    margin-top: .05rem;
    height: calc(100% - 1rem);
    overflow: hidden;
    position: relative;
  }
  .landscape-art{
    margin: 0 auto 25px;
    box-sizing: border-box;
  }
  .landscape-h2{
    background: #333;
    color: #fff;
    display: inline-block;
    padding: .5em;
    margin: 0;
    border-radius: 0 .2em .2em 0;
  }
  .landscape-date{
    color: #888;
    margin: 0;
    padding-left: 1em;
  }
</style>
