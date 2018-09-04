<template>
  <div class="homework">
    <header class="homework-header">
      <h1 class="homework-h1 fs20">{{works.title}}</h1>
      <div class="homework-tools">
        <span class="homework-tool" v-for="i of 3" :key="'tool'+i" :class="{active: i===toolActive}" @click="toolFn(i)">x{{i}}</span>
      </div>
    </header>
    <section class="homework-body">
      <article class="homework-art" v-for="(work, index) of works.items" :key="index">
        <header class="homework-art-header">
          <h2 class="homework-h2 fs14">{{(index+1)+'. '+work.title}}</h2>
          <p class="homework-date fs12">{{work.date | datemat}}</p>
        </header>
        <main ref="mainElem" class="homework-main">
          <figure ref="figure" class="homework-figure" v-for="(item, index) of work.items" :key="index">
            <img class="homework-img" :src="item.img" :alt="item.caption" @load="imgLoaded" draggable="false">
            <figcaption class="homework-figcaption"><span class="fs12">{{item.caption}}</span></figcaption>
          </figure>
        </main>
      </article>
    </section>
  </div>
</template>

<script>
import store from '../scripts/store.js'
export default {
  name: 'homework',
  data () {
    return {
      works: store.works.homework,
      toolActive: 1,
      figureLen: 0
    }
  },
  methods: {
    toolFn (index) {
      let figures, vw, h, s1, s2, s3, i
      figures = this.$refs.figure
      vw = this.$refs.mainElem[0].offsetWidth
      this.toolActive = index
      switch (index) {
        case 3:
          for (i = 0; i < this.figureLen; i += 3) {
            if (figures[i + 1] && figures[i + 2]) {
              s1 = parseFloat(figures[i].getAttribute('data-scale'))
              s2 = parseFloat(figures[i + 1].getAttribute('data-scale'))
              s3 = parseFloat(figures[i + 2].getAttribute('data-scale'))
              h = (vw * s1 * s2 * s3) / (s1 * s2 + s2 * s3 + s1 * s3)
              figures[i].style.width = h / s1 + 'px'
              figures[i + 1].style.width = h / s2 + 'px'
              figures[i + 2].style.width = h / s3 + 'px'
            } else {
              figures[i].style.width = '33%'
            }
          }
          break
        case 2:
          for (i = 0; i < this.figureLen; i += 2) {
            if (figures[i + 1]) {
              s1 = parseFloat(figures[i].getAttribute('data-scale'))
              s2 = parseFloat(figures[i + 1].getAttribute('data-scale'))
              h = (vw * s1 * s2) / (s1 + s2)
              figures[i].style.width = h / s1 + 'px'
              figures[i + 1].style.width = h / s2 + 'px'
            } else {
              figures[i].style.width = '50%'
            }
          }
          break
        default:
          for (i = 0; i < this.figureLen; i++) {
            figures[i].style.width = '100%'
          }
      }
    },
    imgLoaded (e) {
      e.currentTarget.parentNode.setAttribute('data-scale', e.currentTarget.height / e.currentTarget.width)
      this.figureLen++
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
    overflow: auto;
  }
  .homework-art{
    margin: 0 auto 25px;
    padding: 10px;
    box-sizing: border-box;
  }
  .homework-h2{
    margin: 0 0 .4em;
  }
  .homework-date{
    color: #888;
    margin: 0 0 .5em;
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
  }
  .homework-figcaption span{
    display: inline-block;
    padding: .4em;
    border-bottom: 3px double;
    text-align: left;
  }
</style>
