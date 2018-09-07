<template>
  <transition name="fade" @beforeEnter="beforeEnter" @afterLeave="afterLeave">
    <div v-show="show" class="popup" :style="maskStyle" @click="onclick">
      <div class="popup-wrapper" :style="wrapperStyle">
        <b class="popup-close">&times;</b>
        <div ref="popupContent" class="popup-content">
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import utils from '../scripts/utils.js'
export default {
  name: 'popup',
  props: ['maskStyle', 'wrapperStyle'],
  data () {
    return {
      show: false
    }
  },
  mounted () {
    utils.scroll(this.$refs.popupContent)
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
    height: 100%;
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
    position: relative;
    border-radius: 6px;
    border: 2px solid #444444;
    padding: .2rem;
    min-width: 120px;
    min-height: 60px;
    max-width: 360px;
    max-height: 8rem;
    background: #6b7082;
    line-height: 1.6;
    overflow: hidden;
    box-sizing: border-box;
  }
  .popup-close{
    font-size: 22px;
    position: absolute;
    line-height: 0.5;
    padding: .2em;
    right: 0;
    top: 0;
    cursor: pointer;
  }
  .popup-content{
    width: 100%;
    max-height: 7.6rem;
    overflow: hidden;
    position: relative;
  }
  .popup-content p{
    margin-top: 0;
  }
  .popup-color-1{
    color: #ffb900;
  }
  .popup-btn{
    border-radius: 4px;
    -webkit-appearance: none;
    background: linear-gradient(#c1c1c0, #fff);
    border: none;
    cursor: pointer;
  }
  .popup-btn:hover{
    background: linear-gradient(#fff, #c1c1c0);
  }
</style>
