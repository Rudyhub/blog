<template>
  <header class="worksheader">
    <h1 class="worksheader-h1 fs20">{{title}}</h1>
    <div class="worksheader-tools">
      <span class="worksheader-tool" v-for="i of 3" :key="'tool'+i" :class="{active: i===active}" @click="toolFn(i)">x{{i}}</span>
    </div>
  </header>
</template>

<script>
export default {
  name: 'worksheader',
  props: {
    title: [String],
    active: {
      type: [Number],
      default: 2
    }
  },
  methods: {
    toolFn (i) {
      this.$emit('activeChange', i)
    }
  }
}
</script>

<style>
  .worksheader{
    position: relative;
    border-bottom: 1px solid #ddd;
  }
  .worksheader-h1{
    text-align: center;
    margin: 0;
    height: .9rem;
    line-height: .9rem;
  }
  .worksheader-tools{
    position: absolute;
    right: 10px;
    bottom: 0;
  }
  .worksheader-tool{
    display: inline-block;
    width: 2em;
    text-align: center;
    border: 3px double;
    user-select: none;
    color: #ddd;
    cursor: pointer;
    background: #aaa;
  }
  .worksheader-tool.active{
    background: #318642;
  }
</style>
