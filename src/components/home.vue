<template>
  <div class="main">
    <div class="blackboard">
      <div :is="scene" @animate-in-end="animateInEnd"></div>
    </div>
    <div :is="keyboard" @animate-in-end="animateInEnd"></div>
  </div>
</template>

<script>
import welcome from './welcome'
import keyboard from './keyboard'
import help from './help'
import command from './command'

export default {
  name: 'home',
  mounted () {
    this.scene = welcome
  },
  data () {
    return {
      scene: null,
      keyboard: null
    }
  },
  methods: {
    animateInEnd (name) {
      let _this = this
      switch (name) {
        case 'welcome':
          this.keyboard = keyboard
          break
        case 'keyboard':
          this.scene = help
          document.addEventListener('keydown', function enterCommand (e) {
            if (e.key === 'Enter') {
              document.removeEventListener('keydown', enterCommand, false)
              _this.scene = command
            }
          }, false)
          break
      }
    }
  }
}
</script>
<style>
  .main{
    height: 100vh;
    min-width: 109vh;
    background: #1b2124;
    overflow: hidden;
    position: relative;
  }
  .blackboard{
    height: 70vh;
    overflow: hidden;
    position: relative;
    color: #bbcfed;
    box-sizing: border-box;
  }
</style>
