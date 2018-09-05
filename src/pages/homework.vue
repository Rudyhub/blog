<template>
  <div class="homework">
    <header class="homework-header">
      <h1 class="homework-h1 fs20">{{title}}</h1>
      <div class="homework-tools">
        <span class="homework-tool" v-for="i of 3" :key="'tool'+i" :class="{active: i===toolActive}" @click="toolFn(i)">x{{i}}</span>
      </div>
    </header>
    <section ref="body" class="homework-body">
      <article class="homework-art" v-for="(work, index) of items" :key="'w'+index">
        <header class="homework-art-header">
          <h2 class="homework-h2 fs14">{{(index+1)+'. '+work.title}}</h2>
          <p class="homework-date fs12">{{work.date | datemat}}</p>
        </header>
        <imglist :items="work.items" :times="toolActive"/>
      </article>
    </section>
  </div>
</template>

<script>
import utils from '../scripts/utils.js'
import store from '../scripts/store.js'
import imglist from './works/imglist'
export default {
  name: 'homework',
  components: {imglist},
  data () {
    return {
      title: store.works.homework.title,
      items: store.works.homework.items,
      toolActive: 2
    }
  },
  mounted () {
    utils.scroll(this.$refs.body)
  },
  methods: {
    toolFn (index) {
      this.toolActive = index
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
  .homework-header{
    position: relative;
    border-bottom: 1px solid #ddd;
  }
  .homework-h1{
    text-align: center;
    margin: 0;
    height: .9rem;
    line-height: .9rem;
  }
  .homework-tools{
    position: absolute;
    right: 10px;
    bottom: 0;
  }
  .homework-tool{
    display: inline-block;
    width: 2em;
    text-align: center;
    border: 3px double;
    user-select: none;
    color: #ddd;
    cursor: pointer;
    background: #aaa;
  }
  .homework-tool.active{
    background: #318642;
  }
  .homework-body{
    margin-top: .05rem;
    height: calc(100% - 1rem);
    overflow: hidden;
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
  .homework-main{
    font-size: 0;
    text-align: center;
    text-align-last: left;
  }
  .homework-figure{
    margin: 0 0 20px;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: bottom;
    padding: 5px;
  }
  .homework-img{
    display: block;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
  }
  .homework-figcaption{
    text-align: center;
    text-align-last: auto;
    font-weight: bold;
    background: #fff;
    padding-bottom: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .homework-figcaption span{
    display: inline-block;
    padding: .4em;
    border-bottom: 3px double;
    text-align: left;
  }
</style>
