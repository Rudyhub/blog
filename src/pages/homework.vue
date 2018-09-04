<template>
  <div class="homework">
    <h1 class="homework-h1 fs20">{{works.title}}</h1>
    <article class="homework-art" v-for="(work, index) of works.items" :key="index">
      <header class="homework-art-header">
        <h2 class="homework-h2">{{(index+1)+'. '+work.title}}</h2>
        <p class="homework-date">{{work.date | datemat}}</p>
      </header>
      <main class="homework-main">
        <figure class="homework-figure" v-for="(item, index) of work.items" :key="index">
          <img class="homework-img" :src="item.img" :alt="item.caption">
          <figcaption class="homework-figcaption">{{item.caption}}</figcaption>
        </figure>
      </main>
    </article>
  </div>
</template>

<script>
import store from '../scripts/store.js'
export default {
  name: 'homework',
  data () {
    return {
      works: store.works.homework
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
  body{
    background: #fff;
  }
  .homework-h1{
    text-align: center;
  }
  .homework-art{
    max-width: 1280px;
    margin: 0 auto 25px;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    box-shadow: #aaa 0 2px 3px;
    padding: 10px;
    box-sizing: border-box;
  }
  .homework-h2{
    text-align: center;
    margin: 0 0 .4em;
  }
  .homework-date{
    color: #888;
    text-align: center;
    margin: 0 0 .5em;
  }
  .homework-figure{
    margin: 0 0 20px;
  }
  .homework-img{
    display: block;
    max-width: 100%;
  }
  .homework-figcaption{
    background: #333;
    color: #fff;
    text-align: center;
    padding: .4em;
    font-weight: bold;
  }
</style>
