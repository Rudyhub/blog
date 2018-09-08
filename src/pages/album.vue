<template>
  <section class="album">
    <headerbar isName="album"/>
    <div style="text-align: center">啥都木有</div>
  </section>
</template>

<script>
import headerbar from './common/headerbar'
export default {
  name: 'ablum',
  components: {headerbar}
}
</script>
<style>
  .album{
    background: #fff;
    height: 100%;
  }
</style>
