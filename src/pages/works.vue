<template>
  <div class="table">
    <div class="book">
      <div class="cover">cover</div>
      <div class="spine">spine</div>
      <div class="back-cover">back cover</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'works'
}
</script>

<style>
  .table{
    perspective: 200px;
  }
  .book{
    transform-style: preserve-3d;
    transform: translate(50vw, 10vw);
    animation: rotating 2s linear infinite;
    transform-origin: left;
  }
  .cover,
  .spine,
  .back-cover{
    width: 30vw;
    height: 30vw;
    background: rgba(50,50,50,.5);
    border: 1px solid #68dd00;
    position: absolute;
    top: 0;
    left: 0;
    transform-origin: left;
  }
  .cover{
    transform: rotateY(0);
  }
  .spine{
    transform: rotateY(120deg);
  }
  .back-cover{
    transform: rotateY(240deg);
  }
  @keyframes rotating {
    0%{
      transform: translate(50vw, 10vw) rotateY(0);
    }
    100%{
      transform: translate(50vw, 10vw) rotateY(360deg);
    }
  }
</style>
