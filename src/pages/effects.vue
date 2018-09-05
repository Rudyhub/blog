<template>
  <div class="effects">
    <imglist :items="items"/>
  </div>
</template>

<script>
import utils from '../scripts/utils.js'
import store from '../scripts/store.js'
import imglist from './works/imglist'
export default {
  name: 'effects',
  components: {imglist},
  data () {
    return {
      items: store.works.effects.items[0].items
    }
  },
  mounted () {
    utils.scroll(this.$el)
  }
}
</script>

<style>
.effects{
  height: 100%;
  overflow: hidden;
  background: #fff;
}
</style>
