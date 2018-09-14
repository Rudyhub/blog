<template>
  <section class="blog">
    <header-bar active="blog"/>
    <article class="blog-art" v-for="(art, index) of arts" :key="index">
      <h2>{{art.title}}</h2>
      <div>{{art.date}}</div>
      <div v-html="art.content"></div>
    </article>
  </section>
</template>

<script>
import headerBar from './common/headerBar'
import utils from '../scripts/utils'
export default {
  name: 'blog',
  components: {headerBar},
  data () {
    let arts = []
    utils.ajax({
      url: '/static/blog.json'
    }).then(res => {
      res.forEach((item, i) => {
        this.$set(this.arts, i, item)
      })
    }, err => {
      console.error(err)
    })
    return {
      arts
    }
  },
  mounted () {
  }
}
</script>
<style>
  .blog{
    background: #fff;
    height: 100%;
  }
  .blog-art{
    padding: 10px;
  }
</style>
