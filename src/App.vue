<template>
    <router-view/>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body{
  margin: 0;
}
.float-l {
  float: left;
}

.float-r {
  float: right;
}

.margin-r {
  margin-right: 2em;
}

.margin-l {
  margin-left: 2em;
}

.clear {
  clear: both;
}

article {
  padding: 0 2em 2em;
  overflow: hidden;
}

section {
  overflow: hidden;
}
</style>
