<template>
  <div class="album">
    <bookinner ref="bookinner" :pages="pages" class="papers" @pageClick="pageClickFn"/>
  </div>
</template>

<script>
import bookinner from '../components/bookinner'
export default {
  name: 'album',
  components: {bookinner},
  data () {
    return {
      pages: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  },
  mounted () {
  },
  methods: {
    pageClickFn () {
      this.$refs.bookinner[this.$refs.bookinner.$turn]()
    }
  }
}
</script>

<style>
  .album{
    width: 100%;
    perspective: 10rem;
    height: 10rem;
    /*overflow: hidden;*/
  }
  .papers{
    transform-style: preserve-3d;
    transform: rotateX(-55deg);
    width: 100%;
    height: 100%;
  }
</style>
