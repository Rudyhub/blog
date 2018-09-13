<template>
  <section class="blog">
    <header-bar active="blog"/>
    <article class="blog-art">
      <h2>我没话说...</h2>
    </article>
  </section>
</template>

<script>
import headerBar from './common/headerBar'
export default {
  name: 'blog',
  components: {headerBar}
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
