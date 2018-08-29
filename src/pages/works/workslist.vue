<template>
  <div class="works-list">
    <h1>{{title}}</h1>
    <ul>
      <li v-for="(item, index) of list" :key="index">
        <a :href="item.url">{{item.text}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'workslist',
  props: ['title', 'list']
}
</script>

<style scoped>

</style>
