<template>
  <div class="about">
    <div id="about-left" class="about-left">
      <div class="about-face" @click="popupFn">
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
    <div class="about-right">
    </div>
    <popup ref="popup">
      <div class="mode">
        <button @click="modeFn(0)" class="btn-red">正常模式</button>
        <button @click="modeFn(1)" class="btn-red">时间模式</button>
        <button @click="modeFn(2)" class="btn-red">事件模式</button>
      </div>
    </popup>
  </div>
</template>

<script>
import Scrollbar from '../lib/Scrollbar.js'
import popup from '../components/popup'
export default {
  name: 'about',
  components: {popup},
  mounted () {
    Scrollbar.scroll(document.getElementById('about-left'))
  },
  methods: {
    modeFn (mode) {
      switch (mode) {
        case 1: console.log(1); break
        case 2: console.log(2); break
        default: console.log(mode)
      }
      this.$refs.popup.hide()
    },
    popupFn () {
      let popup
      popup = this.$refs.popup
      popup.show()
    }
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
    overflow: hidden;
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
  .btn-red{
    border-radius: .4em;
    background: linear-gradient(0, #9e0000, #e24545);
    border: 1px solid #ddd;
    color: #fff;
    padding: .5em 1em;
    margin: .5em auto;
    display: block;
    outline: none;
    cursor: pointer;
  }
  .btn-red:hover{
    background: linear-gradient(0, #bf4040, #8a0000);
  }
</style>
