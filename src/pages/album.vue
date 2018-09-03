<template>
  <div class="album">
    <bookinner ref="bookinner" :pages="createHtml()" class="papers" @pageClick="pageClickFn" @toEnd="toEnd"/>
  </div>
</template>

<script>
import bookinner from '../components/bookinner'
import store from '../scripts/store.js'
export default {
  name: 'album',
  components: {bookinner},
  data () {
    return {
      pages: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  },
  mounted () {
  },
  methods: {
    pageClickFn () {
      this.$refs.bookinner[this.$refs.bookinner.$turn]()
    },
    toEnd () {
      console.log(this.$refs.bookinner.paperIndex)
    },
    createHtml () {
      const siteReg = {
        'http://wenweipo.com': /wenweipo\.com/,
        'https://rudyhub.github.io': /rudyhub\.github\.io/,
        'https://github.com': /github\.com/,
        'https://wii-c.com': /wii-c\.com/
      }
      let book, items, html, listHtml, pages, recommend, total
      book = store.works[1]
      items = book.items
      pages = []
      recommend = []
      total = items.length
      html = `<div class="linklist">
        <h1 class="linklist-h1">${book.title}</h1>
        <div class="linklist-info">
          特别推荐：`
      if (this.items) {
        items.forEach((item, index) => {
          if (item.level === 1) recommend.push(index + 1)
        })
      }
      if (recommend.length < 1) {
        recommend.push('无')
      }
      recommend.forEach(num => {
        html += '<span>' + num + '</span>'
      })
      html += '</div><ul class="linklist-ul">'
      listHtml = ''
      for (let i = 0; i < total; i++) {
        let item = items[i]
        listHtml += `<li class="linklist-li">
              <div class="linklist-num">${(i + 1) + '/' + total}</div>
              <div class="thumb linklist-thumb" style="background: url(${item.thumb}) no-repeat center; background-size: cover">
                <img class="thumb-img" :src="src" :alt="alt" :title="title" draggable="false">
              </div>
              <h2 class="linklist-h2">
              ${item.title +
                (item.online === 0 ? '<sup class="linklist-sup linklist-not-online">未上线</sup>' : '') +
                (item.level === 1 ? '<sup class="linklist-sup linklist-recommend">推荐</sup>' : '')}
              </h2>
              <div class="linklist-list">
                <time class="linklist-time">${item.date} </time>
                ${getLinks(item)}
              </div>
              <div class="linklist-desc">${item.desc || ''}</div>
            </li>`
        if ((i + 1) % 3 === 0) {
          pages.push(html + listHtml + '</ul></div>')
          listHtml = ''
        }
      }
      function getLinks (item) {
        let h = ''
        if (item.href) {
          item.href.forEach(href => {
            h += `<a class="linklist-item linklist-href" href="${href}" target="_blank">
              <span class="linklist-favhd">体验</span><img class="linklist-favicon" src="${getFavicon(href)}"/>
              </a>`
          })
        }
        if (item.source) {
          item.source.forEach(href => {
            h += `<a class="linklist-item linklist-source" href="${href}" target="_blank">
              <span class="linklist-favhd">源码</span><img class="linklist-favicon" src="${getFavicon(href)}"/>
              </a>`
          })
        }
        if (item.docs) {
          item.docs.forEach(href => {
            h += `<a class="linklist-item linklist-docs" href="${href}" target="_blank">
              <span class="linklist-favhd">文档</span><img class="linklist-favicon" src="${getFavicon(href)}"/>
              </a>`
          })
        }
        return h
      }
      function getFavicon (href) {
        if (href) {
          for (let site in siteReg) {
            if (siteReg[site].test(href)) {
              return site + '/favicon.ico'
            }
          }
        }
      }
      return pages
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
  .papers{
    transform-style: preserve-3d;
    /*transform: rotateX(-55deg);*/
    width: 100%;
    height: 100%;
  }
  .thumb{
    overflow: hidden;
    position: relative;
  }
  .thumb-img{
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
  }
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
    white-space: nowrap;
    position: relative;
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
    overflow: hidden;
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
    margin: .1em .3em;
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
  .linklist-desc p{
    margin: 0;
  }
  @media (max-width: 767px) {
    .linklist-h1{
      font-size: 20px;
    }
    .linklist-h2{
      font-size: 14px;
    }
    .linklist-li {
      font-size: 13px;
    }
  }
</style>
