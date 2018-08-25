<template>
  <div class="popup" :style="options.mask">
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
    return {isShow: false}
  },
  mounted () {
    let _this, el
    _this = this
    el = this.$el
    el.addEventListener('click', function (e) {
      _this.$emit('click')
      if (e.target === el) {
        _this.hide()
      }
    })
  },
  methods: {
    show (fn) {
      let _this, el
      _this = this
      el = this.$el
      _this.$emit('beforeShow')
      el.classList.add('popup-show')
      _this.isShow = true
      el.addEventListener('animationend', function end () {
        el.removeEventListener('animationend', end, false)
        if (fn) fn()
        _this.$emit('showEnd')
      }, false)
    },
    hide (fn) {
      let _this, el
      _this = this
      el = this.$el
      _this.$emit('beforeHide')
      el.classList.add('popup-hide')
      _this.isShow = false
      el.addEventListener('animationend', function end () {
        el.removeEventListener('animationend', end, false)
        _this.$emit('hideEnd')
        el.classList.remove('popup-hide', 'popup-show')
        if (fn) fn()
      }, false)
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
  @keyframes fade-in {
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }
  @keyframes fade-out {
    0%{
      opacity: 1;
    }
    100%{
      opacity: 0;
    }
  }
</style>
