<template>
  <div class="popup" :class="show ? 'popup-show' : 'popup-hide'" :style="options.mask" @click="onclick" @animationStart="onAnimationStart" @animationEnd="onAnimationEnd">
    <div ref="wrapper" class="popup-wrapper" :style="options.wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'popup',
  props: {
    options: {
      type: [Object],
      default () {
        return {
          mask: 'background: rgba(0,0,0,0.6)',
          wrapper: ''
        }
      }
    }
  },
  data () {
    return {show: false}
  },
  methods: {
    onclick (e) {
      if (e.target === this.$el || e.target.classList.contains('popup-close')) {
        this.show = false
      }
    },
    onAnimationStart (e) {
      console.log(this.show)
      this.show ? this.$emit('beforeShow', e) : this.$emit('beforeHide', e)
    },
    onAnimationEnd (e) {
      console.log(this.show)
      this.show ? this.$emit('showEnd', e) : this.$emit('hideEnd', e)
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
    display: none;
  }
  .popup-wrapper{
    border-radius: 6px;
    border: 1px solid #eee;
    background: #fff;
    padding: 10px;
    min-width: 120px;
    min-height: 60px;
    box-shadow: 0 0 5px;
    opacity: 0;
    position: relative;
  }
  .popup-show{
    display: flex;
  }
  .popup-show .popup-wrapper{
    animation: fade-in 0.5s forwards;
  }
  .popup-hide .popup-wrapper{
    animation: fade-out 0.5s forwards;
  }
</style>
