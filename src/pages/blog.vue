<template>
  <section class="blog">
    <header class="blog-header flex-center">
      <img class="face" src="/static/logo.png" alt="">
      <form class="blog-form" action="">
        <input class="blog-search-input" type="text" value="keyword" title="输入搜索的关键词">
      </form>
      <nav class="blog-nav">
        <a class="blog-nav-item" v-for="(item, name) of nav" :key="name" :class="name==='blog' ? 'active' : ''" :href="'/'+name">{{item[0]}}</a>
      </nav>
    </header>
  </section>
</template>

<script>
import store from '../scripts/store.js'
export default {
  name: 'blog',
  data () {
    return {
      nav: store.nav
    }
  }
}
</script>
<style>
  body{
    background: #fff;
  }
  .blog-header{
    margin: 0 auto;
    padding: 1em 0;
    border-bottom: 1px solid #ddd;
  }
  .face{
    width: .5rem;
    min-width: 24px;
    max-width: 36px;
    border-radius: 50%;
  }
  .blog-form{
    box-sizing: border-box;
    width: 100%;
    max-width: 300px;
    min-width: 120px;
    padding: 0 1em;
  }
  .blog-search-input{
    border: 1px solid #ddd;
    padding: .2em .4em;
    line-height: 1;
    border-radius: 1em;
    width: 100%;
    box-sizing: border-box;
  }
  .blog-search-input:focus{
    outline: none;
    border-color: #4787e2;
    box-shadow: #4787e2 0 0 4px;
  }
  .blog-nav{
    white-space: nowrap;
  }
  a.blog-nav-item{
    text-decoration: none;
    display: inline-block;
    margin: 0 .1em;
    padding: .2em .4em;
    color: #477a4d;
    border-radius: 4px;
    line-height: 1;
  }
  a.blog-nav-item.active,
  a.blog-nav-item:hover{
    background: #eee;
  }
  @media (max-width: 480px) {
    .blog-nav{
      white-space: normal;
      height: 1.5em;
      overflow: hidden;
    }
    .blog-nav:before{
      content: '=';
      color: #555;
      font-weight: bolder;
      text-align: center;
      display: block;
      width: 1em;
      height: .8em;
      border-top: 2px solid;
      border-bottom: 2px solid;
      line-height: .8;
      margin: .2em auto;
      cursor: pointer;
    }
    .blog-nav:hover{
      background: #eee;
    }
    a.blog-nav-item{
      display: block;
    }
  }
</style>
