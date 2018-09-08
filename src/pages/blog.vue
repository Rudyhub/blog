<template>
  <section class="blog">
    <headerbar isName="blog"/>
    <article class="blog-art">
      <h2>我没话说...</h2>
    </article>
  </section>
</template>

<script>
import headerbar from './common/headerbar'
export default {
  name: 'blog',
  components: {headerbar}
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
