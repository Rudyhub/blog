<template>
  <div class="linklist">
    <h1 class="linklist-h1">{{title}}</h1>
    <div class="linklist-info">
      特别推荐：
      <span v-for="(rec, rindex) of recommend" :key="rindex">{{rec}}</span>
    </div>
    <ul class="linklist-ul" ref="list" v-if="items">
      <li class="linklist-li" v-for="(item, index) of items" :key="index" v-if="index >= start && index < end">
        <div class="linklist-num">{{index+1}} / {{total}}</div>
        <thumb class="linklist-thumb" v-if="item.thumb" :src="item.thumb"/>
        <h2 class="linklist-h2">{{item.title}}
          <sup class="linklist-sup linklist-not-online" v-if="item.online === 0">未上线</sup>
          <sup class="linklist-sup linklist-recommend" v-if="item.level === 1">推荐</sup>
        </h2>
        <div class="linklist-list">
          <time class="linklist-time">{{item.date | datemat}} </time>
          <a class="linklist-item linklist-href" v-if="item.href" v-for="(href, hIndex) of item.href" :key="'href'+hIndex" :href="href" target="_blank">
            <span class="linklist-favhd">体验</span><img class="linklist-favicon" :src="getFavicon(href)"/>
          </a>
          <a class="linklist-item linklist-source" v-if="item.source" v-for="(source, sIndex) of item.source" :key="'source'+sIndex" :href="source" target="_blank">
            <span class="linklist-favhd">源码</span><img class="linklist-favicon" :src="getFavicon(source)"/>
          </a>
          <a class="linklist-item linklist-docs" v-if="item.docs" v-for="(doc, dIndex) of item.docs" :key="'docs'+dIndex" :href="doc" target="_blank">
            <span class="linklist-favhd">文档</span><img class="linklist-favicon" :src="getFavicon(doc)"/>
          </a>
        </div>
        <div class="linklist-desc" v-if="item.desc" v-html="item.desc"></div>
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
      recommend.push('无')
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

<style>
  .linklist{
    cursor: auto;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
  .linklist-h1{
    font-size: 22px;
    text-align: center;
  }
  .linklist-h2{
    font-size: 16px;
    margin-top: 0;
    margin-bottom: 1em;
    font-weight: normal;
  }
  .linklist-sup{
    border-radius: 1em;
    line-height: 1;
    padding: .1em .5em;
    color: #fff;
    font-weight: normal;
    font-size: 12px;
  }
  .linklist-info{
    font-size: 14px;
    text-align: left;
    margin: 0 3em;
  }
  .linklist-info span{
    display: inline-block;
    vertical-align: top;
    margin: 0 2px;
    background: #308846;
    color: #fff;
    padding: .2em;
    line-height: 1;
    border-radius: .2em;
    min-width: 1em;
    text-align: center;
  }
  .linklist-not-online{
    background: #787677;
  }
  .linklist-recommend{
    background: #308846;
  }
  .linklist-ul{
    list-style: none;
    text-align: left;
    margin: 1.5em 2em;
    padding: 0;
    height: calc(100% - 150px);
    overflow: hidden;
    box-sizing: border-box;
  }
  .linklist-li{
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
  .linklist-num{
    position: absolute;
    right: 0;
    top: 0;
    padding: .2em .4em;
    line-height: 1;
    background: #dae9f7;
    border-bottom-left-radius: .4em;
    color: #111;
  }
  .linklist-thumb{
    width: 3.6em;
    height: 3.6em;
    margin-right: 1em;
    display: block;
    float: left;
  }
  .linklist-time{
    display: inline-block;
    vertical-align: middle;
  }
  .linklist-item{
    display: inline-block;
    font-size: 12px;
    vertical-align: middle;
    margin: 0 .3em;
    border-radius: 6px;
    overflow: hidden;
    opacity: .8;
    box-sizing: border-box;
    box-shadow: #555 0 0 2px;
  }
  .linklist-item:hover{
    transition: opacity .3s;
    opacity: 1;
  }
  .linklist-href{
    background: linear-gradient(90deg, #6f4940 60%, #eee 60%);
  }
  .linklist-source{
    background: linear-gradient(90deg, #477a4d 60%, #eee 60%);
  }
  .linklist-docs{
    background: linear-gradient(90deg, #7a2850 60%, #eee 60%);
  }
  .linklist-favicon,
  .linklist-favhd{
    display: inline-block;
    vertical-align: middle;
    margin: .3em;
    color: #fff;
  }
  .linklist-favicon{
    height: 1.2em;
  }
  .linklist-desc{
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
