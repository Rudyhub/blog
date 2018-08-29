<template>
  <div class="works-list">
    <h1>{{title}}</h1>
    <ul v-if="list">
      <li v-for="(item, index) of list" :key="index">
        <span>{{item.date | datemat}}</span> :
        <a :href="item.href" target="_blank">{{item.title}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import store from '../../scripts/store.js'
export default {
  name: 'workslist',
  props: ['name', 'title'],
  data () {
    return {
      list: store.works[this.name]
    }
  },
  filters: {
    datemat (date) {
      if (!date) return ''
      let str = date.toString()
      return str.slice(0, 4) + '-' + str.slice(4, 6) + '-' + str.slice(6)
    }
  }
}
</script>

<style scoped>
  .works-list{
    cursor: auto;
  }
  h1{
    font-size: 22px;
  }
  ul{
    list-style: none;
    text-align: left;
    margin: 1.5em 2em;
    padding: 0;
  }
  li{
    font-size: 16px;
    border-left: 2px solid #ccc;
    margin: 1em 0;
    padding-left: .5em;
  }
  a{
    text-decoration: none;
    display: inline-block;
    position: relative;
  }
  a:link{
    color: #264bb7;
  }
  a:visited{
    color: #888;
  }
  a:after{
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    border-bottom: 1px solid;
    left: 0;
    bottom: -2px;
    z-index: -1;
    transform: scaleX(0);
  }
  a:hover:after{
    transition: all .5s;
    transform: scaleX(1);
  }
</style>
