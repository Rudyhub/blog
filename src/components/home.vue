<template>
  <div>
    <div class="logo-box">
      <img class="logo" src="/static/logo.png" alt="logo">
    </div>
    <div class="home-links">
      <router-link to="/rmedia">rmedia</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>
<style>
  .logo-box{
    text-align: center;
  }
  .logo{
    max-width: 64px;
    margin: 64px auto;
    display: block;
  }
  .home-links{
    text-align: center;
  }
</style>
