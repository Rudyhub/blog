<template>
  <section class="blog">
    <headerbar isName="blog"/>
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
</style>
