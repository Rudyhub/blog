<template>
  <div class="effects">
    <worksheader :title="title" :active="active" @activeChange="activeFn"/>
    <div ref="body" class="effects-body">
      <imglist :items="items" :times="active"/>
    </div>
  </div>
</template>

<script>
import utils from '../scripts/utils.js'
import store from '../scripts/store.js'
import worksheader from './works/worksheader'
import imglist from './works/imglist'
export default {
  name: 'effects',
  components: {worksheader, imglist},
  data () {
    return {
      title: store.works.effects.title,
      items: store.works.effects.items[0].items,
      active: 2
    }
  },
  mounted () {
    utils.scroll(this.$refs.body)
  },
  methods: {
    activeFn (i) {
      this.active = i
    }
  }
}
</script>

<style>
  .effects{
    height: 100%;
    overflow: hidden;
    background: #fff;
  }
  .effects-body{
    margin-top: .05rem;
    height: calc(100% - 1rem);
    overflow: hidden;
    position: relative;
  }
</style>
