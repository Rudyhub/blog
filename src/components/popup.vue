<template>
  <div class="popup" :style="maskStyle" @click="onclick">
    <div class="popup-wrapper" :style="wrapperStyle">
      <b class="popup-close fs18">&times;</b>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'popup',
  props: ['maskStyle', 'wrapperStyle'],
  methods: {
    onclick (e) {
      if (e.target === e.currentTarget || e.target.classList.contains('popup-close')) {
        this.$parent.popupShow = false
      }
      this.$emit('click', e)
    }
  }
}
</script>

<style>
  .popup{
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    align-content: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    display: flex;
    color: #eef;
    text-shadow: #1b3651 0 0 2px;
    background: rgba(0,0,0,0.6);
  }
  .popup-wrapper{
    border-radius: 6px;
    border: 2px solid #2e6881;
    padding: 10px;
    min-width: 120px;
    min-height: 60px;
    position: relative;
    max-width: 360px;
    background: rgba(200, 240, 255, 0.4);
    line-height: 1.6;
  }
  .popup-close{
    position: absolute;
    line-height: 0.5;
    padding: .2em;
    right: 0;
    top: 0;
    cursor: pointer;
  }
  .popup-fs18{
    font-size: 18px;
  }
  .popup-fs16{
    font-size: 16px;
  }
  .popup-fs14{
    font-size: 14px;
  }
  .popup-fs12{
    font-size: 12px;
  }
  .popup-color-1{
    color: #b26821;
    display: inline-block;
    padding: 0 1em;
  }
</style>
