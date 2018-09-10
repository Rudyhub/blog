<template>
  <section class="album">
    <header-bar isName="album"/>
    <div style="text-align: center">啥都木有</div>
  </section>
</template>

<script>
import headerBar from './common/headerBar'
export default {
  name: 'ablum',
  components: {headerBar}
}
</script>
<style>
  .album{
    background: #fff;
    height: 100%;
  }
</style>
