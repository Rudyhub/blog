<template>
  <ul class="tree">
    <li class="tree-item" v-for="(item, index) in tree" v-bind:key="index">
      <div class="tree-name" v-html="item.name" v-bind:data-name="item.id"></div>
      <tree v-if="item.tree" :tree="item.tree"></tree>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'tree',
  props: ['tree']
}
</script>

<style>
  .tree{
    padding-left: 2em;
  }
  .tree-name{
    cursor: pointer;
    outline: none;
  }
  .tree-name:hover{
    background: #eee;
  }
</style>
