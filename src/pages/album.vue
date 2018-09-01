<template>
  <div class="album">
    <div class="bk" ref="bk">
      <!--<div class="paper bk-p" v-for="(item, index) of items" :key="index" :style="{transform: 'translateZ('+(-index)+'px) rotateY(0)'}" @transitionend="transEnd($event, index)">-->
        <!--<div class="paper-front" v-html="'page'+(item[0]+1)" @click="pageClick($event, 0)">正面</div>-->
        <!--<div class="paper-back" v-html="item[1]+1" @click="pageClick($event, 1)">背面</div>-->
      <!--</div>-->
      <div class="paper" @transitionend="transEnd($event, 0)">
        <div class="paper-front" @click="pageClick($event, 0)">正面1</div>
        <div class="paper-back" @click="pageClick($event, 1)">背面2</div>
      </div>
      <div class="paper" @transitionend="transEnd($event, 1)" style="transform: translateZ(-1px)">
        <div class="paper-front" @click="pageClick($event, 0)">正面3</div>
        <div class="paper-back" @click="pageClick($event, 1)">背面4</div>
      </div>
      <div class="paper" @transitionend="transEnd($event, 2)" style="transform: translateZ(-2px)">
        <div class="paper-front" @click="pageClick($event, 0)">正面5</div>
        <div class="paper-back" @click="pageClick($event, 1)">背面6</div>
      </div>
      <div class="paper" @transitionend="transEnd($event, 3)" style="transform: translateZ(-3px)">
        <div class="paper-front" @click="pageClick($event, 0)">正面7</div>
        <div class="paper-back" @click="pageClick($event, 1)">背面8</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'album',
  data () {
    let items = []
    for (let i = 0; i < 8; i += 2) {
      items.push([i, i + 1])
    }
    return {
      items,
      total: items.length
    }
  },
  methods: {
    pageClick (e, n) {
      e.currentTarget.parentNode.style.transition = 'transform 1s'
      e.currentTarget.parentNode.style.transform = 'rotateY(' + (n ? 0 : -179.99) + 'deg)'
    },
    transEnd (e, n) {
      let children = this.$refs.bk.children
      e.currentTarget.style.transition = 'none'
      if (n > 0) children[n - 1].style.transform = 'translateZ(-2px) rotateY(-179.99deg)'
      if (children[n + 1]) children[n + 1].style.transform = 'rotateY(0)'
      if (n > 1) children[0].style.transform = ''
    }
  }
}
</script>

<style>
  .album{
    width: 100%;
    perspective: 10rem;
    height: 10rem;
    /*overflow: hidden;*/
  }
  .bk{
    transform-style: preserve-3d;
    transform: rotateX(-60deg);
    width: 100%;
    height: 100%;
  }
  .bk-p{
    /*transition: transform 1s;*/
  }
  .paper{
    transform-style: preserve-3d;
    width: 50%;
    height: 100%;
    transform-origin: left top;
    position: absolute;
    left: 50%;
    top: 0;
    border: 1px solid #00bcff;
    box-sizing: border-box;
  }
  .paper-front,
  .paper-back{
    background: linear-gradient(90deg, #bbd5ee, #888888);
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    transform-style: preserve-3d;
    line-height: 10rem;
    text-align: center;
  }
  .paper-front{
    text-align: left;
  }
  .paper-back{
    transform: scaleX(-1) translateZ(-1px);
    text-align: right;
  }
</style>
