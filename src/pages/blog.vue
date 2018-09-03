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
  body{
    background: #fff;
  }
</style>
