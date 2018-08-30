<template>
  <div class="link-list">
    <h1>{{title}} {{items.length}}</h1>
    <ul ref="list" v-if="items">
      <li v-for="(item, index) of items" :key="index" :class="item.thumb ? 'has-thumb' : ''">
        <img class="thumb" v-if="item.thumb" :src="item.thumb" alt="">
        <time>{{item.date | datemat}} :</time>
        <a :href="item.href || 'javascript:void(0)'" target="_blank">{{item.title}}</a>
        <div class="other-info" v-if="item.status" v-html="item.status"></div>
      </li>
    </ul>
  </div>
</template>

<script>
import utils from '../../scripts/utils.js'
export default {
  name: 'linklist',
  props: ['items', 'title'],
  filters: {
    datemat (date) {
      if (!date) return ''
      let str = date.toString()
      return str.slice(0, 4) + '-' + str.slice(4, 6) + '-' + str.slice(6)
    }
  },
  mounted () {
    utils.scroll(this.$refs.list)
  }
}
</script>

<style scoped>
  .link-list{
    cursor: auto;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
  h1{
    font-size: 22px;
  }
  ul{
    list-style: none;
    text-align: left;
    margin: 1.5em 2em;
    padding: 0;
    height: calc(100% - 100px);
    overflow: hidden;
    box-sizing: border-box;
  }
  li{
    font-size: 16px;
    padding: .5em 0;
    position: relative;
    box-sizing: border-box;
    line-height: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  li:hover{
    transition: all .5s;
    background: rgba(200,200,220,0.3);
  }
  li.has-thumb{
    line-height: 1.6;
  }
  li.has-thumb time{
    display: block;
  }
  .thumb{
    height: 3em;
    margin-right: 1em;
    display: block;
    float: left;
  }
  time{
    padding: 0 0.5em;
  }
  a{
    text-decoration: none;
    position: relative;
  }
  a:link{
    color: #264bb7;
  }
  a:visited{
    color: #553a37;
  }
  a:after{
    content: '';
    position: absolute;
    width: 100%;
    bottom: -1px;
    left: 0;
    transform: scaleX(0);
    border-bottom: 1px solid;
    opacity: 0.5;
  }
  a:hover:after{
    transition: all .5s;
    transform: scaleX(1);
  }
  .other-info{
    font-size: 13px;
    color: #666;
    margin-left: 5.5em;
    padding: 1em 0;
    white-space: normal;
    word-break: break-all;
    line-height: 1.5;
  }
</style>
