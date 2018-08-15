<template>
  <div class="about">
    <div id="about-left" class="about-left">
      <div class="about-face">
        <img src="/static/logo.png" alt="">
        <time>2018</time>
      </div>
      <div class="about-face">
        <img src="/static/logo.png" alt="">
        <time>2017</time>
      </div>
      <div class="about-face">
        <img src="/static/logo.png" alt="">
        <time>2016</time>
      </div>
      <div class="about-face">
        <img src="/static/logo.png" alt="">
        <time>2015</time>
      </div>
    </div>
    <div class="about-right"></div>
  </div>
</template>

<script>
export default {
  name: 'about',
  mounted () {
  }
}
</script>

<style>
  .about{
    height: 100vh;
    position: relative;
  }
  .about-left{
    width: 30%;
    height: 100%;
    max-width: 320px;
    min-width: 180px;
    float: left;
    background: #eee;
    position: relative;
    overflow: hidden;
  }
  .about-right{
    width: 70%;
    height: 100%;
    float: right;
  }
  .about-face{
    width: 90%;
    max-width: 180px;
    margin: 15px auto;
    border: 1px solid #eee;
    border-radius: 6px;
    box-shadow: #555 0 5px 10px;
    box-sizing: border-box;
    position: relative;
  }
  .about-face img{
    width: 100%;
    display: block;
  }
  .about-face time{
    position: absolute;
    bottom: 5px;
    right: 5px;
  }
</style>
