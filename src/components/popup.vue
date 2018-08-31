<template>
  <transition name="fade" @beforeEnter="beforeEnter" @afterLeave="afterLeave">
    <div v-show="show" class="popup" :style="maskStyle" @click="onclick">
      <div class="popup-wrapper" :style="wrapperStyle">
        <b class="popup-close fs18">&times;</b>
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'popup',
  props: ['maskStyle', 'wrapperStyle'],
  data () {
    return {
      show: false
    }
  },
  methods: {
    onclick (e) {
      if (e.target === e.currentTarget || e.target.classList.contains('popup-close')) {
        this.show = false
      }
      this.$emit('click', e)
    },
    beforeEnter (e) {
      this.$emit('beforeEnter', e)
    },
    afterLeave (e) {
      this.$emit('afterLeave', e)
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
    background: rgba(0,0,0,0.6);
  }
  .popup-wrapper{
    border-radius: 6px;
    border: 2px solid #444444;
    padding: 10px;
    min-width: 120px;
    min-height: 60px;
    position: relative;
    max-width: 360px;
    background: #6b7082;
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
  .popup p{
    margin-top: 0;
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
    color: #ffb900;
    display: inline-block;
    padding: 0 1em;
  }
</style>
