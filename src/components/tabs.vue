<template>
  <div class="tabs">
    <div class="tab" v-for="(tab, index) of items" :class="classNameFn(index)" :key="index" v-html="tab" @click="tabFn($event, index)"></div>
  </div>
</template>

<script>
export default {
  name: 'tabs',
  props: {
    items: {
      type: [Array, Object],
      default () {
        return ['Tab1', 'Tab2', 'Tab3']
      }
    }
  },
  data () {
    let len = this.items.length
    return {
      active: 0,
      tabsLen: len
    }
  },
  methods: {
    tabFn (e, index) {
      this.active = index
      this.$parent.$emit('tab', e, index)
    },
    classNameFn (index) {
      if (this.active - index === 1) {
        return 'tab-prev'
      }
      if (this.active - index === -1 && this.tabsLen - index > 0) {
        return 'tab-next'
      }
      if (this.active === index) {
        return 'tab-active'
      }
      return ''
    }
  }
}
</script>

<style>
  .tabs{
    white-space: nowrap;
    margin-top: .8em;
    border-bottom: 1px solid #ddd;
  }
  .tab{
    background: #eee;
    display: inline-block;
    border-radius: 4px 4px 0 0;
    border: 1px solid #bbb;
    padding: .4em .8em;
    line-height: 1;
    cursor: pointer;
    margin-bottom: -1px;
    margin-left: -1px;
    color: #aaa;
  }
  .tab:first-child{
    margin-left: 0;
  }
  .tab:hover{
    background: #ddd;
    color: #888;
  }
  .tab-active,
  .tab-active:hover{
    background: #ccc;
    color: #333;
  }
</style>
