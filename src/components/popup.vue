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
    color: #333;
    background: rgba(0,0,0,0.6)
  }
  .popup-wrapper{
    border-radius: 6px;
    border: 1px solid #eee;
    padding: 10px;
    min-width: 120px;
    min-height: 60px;
    box-shadow: 0 0 5px;
    position: relative;
    max-width: 360px;
    background: rgba(200, 240, 255, 0.8);
  }
  .popup-close{
    position: absolute;
    line-height: 0.5;
    padding: .2em;
    right: 0;
    top: 0;
    cursor: pointer;
  }
</style>
