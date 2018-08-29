<template>
    <router-view/>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  body{
    margin: 0;
    font-family: "Source Sans Pro", "Helvetica Neue", Arial, "Microsoft YaHei", "微软雅黑", SimSun, "宋体", sans-serif;
    font-size: 16px;
    background: #111;
  }
  .fs20{
    font-size: 2vw;
  }
  .fs18{
    font-size: 1.8vw;
  }
  .fs16{
    font-size: 1.6vw;
  }
  .fs14{
    font-size: 1.4vw;
  }
  .fs12{
    font-size: 1.2vw;
  }
  .fs10{
    font-size: 1vw;
  }
  .fs9{
    font-size: .9vw;
  }
  .fs8{
    font-size: .8vw;
  }
  .flex-center{
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
  }
  .flex-column{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .fade-enter-active,
  .fade-leave-active{
    transition: opacity .5s;
  }
  .fade-enter,
  .fade-leave-to{
    opacity: 0;
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
