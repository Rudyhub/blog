<template>
  <div class="link-list">
    <h1>{{title}}</h1>
    <div class="link-info">总数：{{items.length}} | 老夫推荐：<span v-for="(r,rindex) of recommend" :key="rindex">{{r}}</span></div>
    <ul ref="list" v-if="items">
      <li v-for="(item, index) of items" :key="index">
        <thumb v-if="item.thumb" :src="item.thumb"/>
        <h2>{{item.title}}
          <sup class="link-not-online" v-if="item.online === 0">未上线</sup>
          <sup class="link-recommend" v-if="item.level === 1">推荐</sup>
        </h2>
        <div class="link-href">
          <time>{{item.date | datemat}} </time>
          <a class="link-href-item" v-if="item.href" v-for="(href, hIndex) of item.href" :key="'href'+hIndex" :href="href" target="_blank">
            <span class="link-favhd">体验</span><img class="link-favicon" :src="getFavicon(href)"/>
          </a>
          <a class="link-source-item" v-if="item.source" v-for="(source, sIndex) of item.source" :key="'source'+sIndex" :href="source" target="_blank">
            <span class="link-favhd">源码</span><img class="link-favicon" :src="getFavicon(source)"/>
          </a>
        </div>
        <div class="link-desc" v-if="item.desc" v-html="item.desc"></div>
      </li>
    </ul>
  </div>
</template>

<script>
import utils from '../../scripts/utils.js'
import thumb from '../../components/thumb'
const siteReg = {
  'http://wenweipo.com': /wenweipo\.com/,
  'https://rudyhub.github.io': /rudyhub\.github\.io/,
  'https://gitserv.wenweipo.com': /gitserv\.wenweipo\.com/,
  'https://github.com': /github\.com/,
  'https://wii-c.com': /wii-c\.com/
}
export default {
  name: 'linklist',
  props: ['items', 'title'],
  components: {thumb},
  data () {
    return {
      recommend: []
    }
  },
  filters: {
    datemat (date) {
      if (!date) return ''
      let str = date.toString()
      return str.slice(0, 4) + '-' + str.slice(4, 6) + '-' + str.slice(6)
    }
  },
  mounted () {
    utils.scroll(this.$refs.list)
  },
  methods: {
    getFavicon (href) {
      if (href) {
        for (let site in siteReg) {
          if (siteReg[site].test(href)) {
            return site + '/favicon.ico'
          }
        }
      }
    }
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
  h2{
    font-size: 16px;
    margin-top: 0;
    margin-bottom: 1em;
    font-weight: normal;
  }
  sup{
    border-radius: 1em;
    line-height: 1;
    padding: .1em .5em;
    color: #fff;
    font-weight: normal;
    font-size: 12px;
  }
  .link-not-online{
    background: #787677;
  }
  .link-recommend{
    background: #308846;
  }
  ul{
    list-style: none;
    text-align: left;
    margin: 1.5em 2em;
    padding: 0;
    height: calc(100% - 150px);
    overflow: hidden;
    box-sizing: border-box;
  }
  li{
    font-size: 15px;
    padding: 1em .5em;
    position: relative;
    box-sizing: border-box;
    line-height: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0 .5em 1.5em;
    box-shadow: #ccc 0 1px 2px;
    background: #fff;
  }
  li:hover{
    transition: all .5s;
    box-shadow: #aaa 0 1px 4px;
  }
  .thumb{
    width: 3em;
    height: 3em;
    margin-right: 1em;
    display: block;
    float: left;
  }
  time{
    display: inline-block;
    vertical-align: middle;
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
  .link-href-item,
  .link-source-item{
    display: inline-block;
    font-size: 12px;
    background: #f0f0f0;
    vertical-align: middle;
    margin: 0 .3em;
    border-radius: 6px;
    overflow: hidden;
    border: 1px solid;
  }
  .link-href-item{
    border-color: #6f4940;
  }
  .link-source-item{
    border-color: #477a4d;
  }
  .link-favicon{
    height: 1.2em;
    vertical-align: middle;
    margin: 0 .3em;
  }
  .link-favhd{
    color: #fff;
    display: inline-block;
    vertical-align: middle;
    padding: .2em;
  }
  .link-href-item .link-favhd{
    background: #6f4940;
  }
  .link-source-item .link-favhd{
    background: #477a4d;
  }
  .link-desc{
    font-size: 13px;
    color: #666;
    margin-top: .5em;
    padding: .5em 0;
    white-space: normal;
    word-break: break-all;
    line-height: 1.5;
    text-indent: 2em;
    border-top: #eee solid 1px;
  }
</style>
