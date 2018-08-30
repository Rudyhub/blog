<template>
  <div class="link-list">
    <h1>{{title}} {{items.length}}</h1>
    <ul ref="list" v-if="items">
      <li v-for="(item, index) of items" :key="index">
        <thumb v-if="item.thumb" :src="item.thumb"/>
        <div><a :href="item.href || 'javascript:void(0)'" target="_blank">{{item.title}}</a></div>
        <time>{{item.date | datemat}} </time>
        <div class="link-item-status" v-if="item.status" v-html="item.status"></div>
      </li>
    </ul>
  </div>
</template>

<script>
import utils from '../../scripts/utils.js'
import thumb from '../../components/thumb'
export default {
  name: 'linklist',
  props: ['items', 'title'],
  components: {thumb},
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
    padding: .5em;
    position: relative;
    box-sizing: border-box;
    line-height: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 1.5em .5em;
    box-shadow: #ccc 0 1px 2px;
  }
  li:hover{
    transition: all .5s;
    background: rgba(200,200,220,0.3);
  }
  .thumb{
    width: 3em;
    height: 3em;
    margin-right: 1em;
    display: block;
    float: left;
  }
  time{
    display: block;
  }
  a{
    text-decoration: none;
  }
  a:link{
    color: #264bb7;
  }
  a:visited{
    color: #553a37;
  }
  .link-item-status{
    font-size: 13px;
    color: #666;
    margin-left: 5.5em;
    padding: 1em 0;
    white-space: normal;
    word-break: break-all;
    line-height: 1.5;
  }
</style>
