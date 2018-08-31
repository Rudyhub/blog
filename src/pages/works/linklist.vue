<template>
  <div class="link-list">
    <h1>{{title}}</h1>
    <div class="link-info">
      特别推荐：
      <span v-for="(rec, rindex) of recommend" :key="rindex">{{rec}}</span>
    </div>
    <ul ref="list" v-if="items">
      <li v-for="(item, index) of items" :key="index" v-if="index >= start && index < end">
        <div class="link-num">{{index+1}} / {{total}}</div>
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
  'https://github.com': /github\.com/,
  'https://wii-c.com': /wii-c\.com/
}
export default {
  name: 'linklist',
  props: ['items', 'title', 'apart'],
  components: {thumb},
  data () {
    let len, recommend, start, end
    recommend = []
    if (this.items) {
      this.items.forEach((item, index) => {
        if (item.level === 1) recommend.push(index + 1)
      })
    }
    if (recommend.length < 1) {
      recommend.push('无，没有一个能入我的眼。')
    }
    len = this.items.length
    if (this.apart === 'left') {
      start = 0
      end = Math.round(len / 2)
    } else {
      start = Math.round(len / 2)
      end = len
    }
    return {
      recommend,
      total: len,
      start,
      end
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
    text-align: center;
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
  .link-info{
    font-size: 14px;
    text-align: left;
    margin: 0 3em;
  }
  .link-info span{
    display: inline-block;
    vertical-align: top;
    margin: 0 .4em;
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
  .link-num{
    position: absolute;
    right: 0;
    top: 0;
    padding: .2em .4em;
    line-height: 1;
    background: #dae9f7;
    border-bottom-left-radius: .4em;
    color: #111;
  }
  .thumb{
    width: 3.6em;
    height: 3.6em;
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
    vertical-align: middle;
    margin: 0 .3em;
    border-radius: 6px;
    overflow: hidden;
    opacity: .8;
    box-sizing: border-box;
  }
  .link-href-item:hover,
  .link-source-item:hover{
    transition: opacity .3s;
    opacity: 1;
  }
  .link-href-item{
    background: linear-gradient(90deg, #6f4940 60%, #eee 60%);
  }
  .link-source-item{
    background: linear-gradient(90deg, #477a4d 60%, #eee 60%);
  }
  .link-favicon,
  .link-favhd{
    display: inline-block;
    vertical-align: middle;
    margin: .3em;
    color: #fff;
  }
  .link-favicon{
    height: 1.2em;
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
