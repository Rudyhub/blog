<template>
  <div class="homework">
    <header class="homework-header">
      <h1 class="homework-h1 fs20">{{works.title}}</h1>
      <div class="homework-tools">
        <span class="homework-tool" v-for="i of 3" :key="'tool'+i" :class="{active: i===toolActive}" @click="toolFn(i)">x{{i}}</span>
      </div>
    </header>
    <section ref="body" class="homework-body">
      <article class="homework-art" v-for="(work, index) of works.items" :key="'w'+index">
        <header class="homework-art-header">
          <h2 class="homework-h2 fs14">{{(index+1)+'. '+work.title}}</h2>
          <p class="homework-date fs12">{{work.date | datemat}}</p>
        </header>
        <main class="homework-main">
          <figure class="homework-figure" v-for="(item, index) of work.items" :key="'i'+index" :style="{width: calcWidth(item.zoom)}">
            <img class="homework-img" :src="item.img" :alt="item.caption" draggable="false">
            <figcaption class="homework-figcaption"><span class="fs12">{{item.caption}}</span></figcaption>
          </figure>
        </main>
      </article>
    </section>
  </div>
</template>

<script>
import utils from '../scripts/utils.js'
import store from '../scripts/store.js'
export default {
  name: 'homework',
  data () {
    let works, wlen, items, ilen, n, i, s1, s2, s3
    works = store.works.homework.items
    wlen = works.length
    for (n = 0; n < wlen; n++) {
      items = works[n].items
      ilen = items.length
      for (i = 0; i < ilen; i++) {
        items[i].zoom = [0, 0]
      }
      for (i = 0; i < ilen; i += 2) {
        if (i + 1 < ilen) {
          s1 = items[i].scale[1] / items[i].scale[0]
          s2 = items[i + 1].scale[1] / items[i + 1].scale[0]
          items[i].zoom[0] = s2 / (s1 + s2)
          items[i + 1].zoom[0] = s1 / (s1 + s2)
        }
      }
      for (i = 0; i < ilen; i += 3) {
        if (i + 2 < ilen) {
          s1 = items[i].scale[1] / items[i].scale[0]
          s2 = items[i + 1].scale[1] / items[i + 1].scale[0]
          s3 = items[i + 2].scale[1] / items[i + 2].scale[0]
          items[i].zoom[1] = (s2 * s3) / (s1 * s2 + s2 * s3 + s1 * s3)
          items[i + 1].zoom[1] = (s1 * s3) / (s1 * s2 + s2 * s3 + s1 * s3)
          items[i + 2].zoom[1] = (s1 * s2) / (s1 * s2 + s2 * s3 + s1 * s3)
        }
      }
    }
    return {
      works: store.works.homework,
      toolActive: 2
    }
  },
  mounted () {
    utils.scroll(this.$refs.body)
  },
  methods: {
    toolFn (index) {
      this.toolActive = index
    },
    calcWidth (zoom) {
      if (zoom[this.toolActive - 2]) {
        return Math.floor(zoom[this.toolActive - 2] * 100) + '%'
      } else {
        return 100 / this.toolActive + '%'
      }
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
