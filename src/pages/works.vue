<template>
  <div class="stage">
    <div class="table" ref="table">
      <div class="book" v-for="(book, index) of books" :key="index" :class="'book-'+(index+1)">
        <div class="cover">
          <img :src="book.cover" style="width: 80%;" draggable="false">
          <h1>{{book.title}}</h1>
          <p class="cover-text">{{book.subtitle}}</p>
        </div>
        <div class="spine spine-a"><span class="spine-title" v-html="spineTextFilter(book.title)"></span><small class="text-dir-90">{{book.subtitle}}</small></div>
        <div class="spine spine-b"></div>
        <div class="spine spine-c"></div>
        <div class="spine spine-d"></div>
        <div class="back-cover">
          <div class="back-text">https://rudyhub.github.io</div>
        </div>
      </div>
    </div>
    <div class="table-leg"></div>
  </div>
</template>

<script>
export default {
  name: 'works',
  data () {
    return {
      books: [
        {
          title: '在校作品',
          subtitle: 'works in College',
          cover: '../../static/works/book1/01.jpg'
        }, {
          title: '在朗形作品',
          subtitle: 'works in LangSky',
          cover: '../../static/works/book2/01.jpg'
        }, {
          title: '在溪林峰作品',
          subtitle: 'works in XiLinFeng',
          cover: '../../static/works/book3/01.jpg'
        }, {
          title: '在文汇作品',
          subtitle: 'works in WenWei',
          cover: '../../static/works/book3/01.jpg'
        }
      ]
    }
  },
  mounted () {
    let table, startX, z, curZ, speedsX, spX, timerX
    table = this.$refs.table
    curZ = z = 345
    speedsX = [0, 0]
    spX = 0
    this.$el.addEventListener('mousedown', down)
    function down (e) {
      startX = e.clientX
      speedsX[0] = speedsX[1] = spX = 0
      document.addEventListener('mousemove', move)
    }
    function move (e) {
      curZ = z + (startX - e.clientX) / 10
      speedsX.push(e.clientX)
      speedsX.shift()
      trans()
    }
    document.addEventListener('mouseup', up)
    function up () {
      document.removeEventListener('mousemove', move)
      spX = (speedsX[0] - speedsX[1]) / 10
      clearInterval(timerX)
      if (speedsX[0] > 0 && speedsX[1] > 0) {
        timerX = setInterval(easeOutX, 16.6)
      }
    }
    function easeOutX () {
      spX *= 0.96
      curZ += spX
      if (Math.abs(spX) < 0.1) {
        clearInterval(timerX)
      }
      trans()
      z = curZ
    }
    function trans () {
      table.style.transform = 'rotateX(60deg) rotateZ(' + curZ + 'deg)'
    }
  },
  methods: {
    spineTextFilter (val) {
      return val.split('').join('<br>')
    }
  }
}
</script>

<style>
  h1{
    font-size: 2vh;
    line-height: 1;
    padding: .5em;
    border-bottom: 1px solid;
  }
  .stage{
    perspective: 100vh;
    height: 100vh;
    background: #07080d;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    overflow: hidden;
  }
  .table{
    width: 80vh;
    height: 80vh;
    position: absolute;
    border-radius: 50%;
    background: rgba(200, 240, 255, 0.2);
    border: 3px solid #2e6881;
    transform: rotateX(60deg) rotateZ(345deg);
    transform-style: preserve-3d;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    z-index: 2;
  }
  .table:after{
    content: '';
    display: block;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: url("../../static/works/book1/table-bg.png") no-repeat;
    background-size: cover;
    border-radius: 50%;
    overflow: hidden;
    opacity: 0.1;
  }
  .table-leg{
    position: absolute;
    width: 3vh;
    height: 30vh;
    background: #888;
    top: 31vh;
    transform-origin: top;
    transform: rotateX(150deg) translate3d(0, -49.5vh, -20vh);
    z-index: 1;
    transform-style: preserve-3d;
  }
  .table-leg:before{
    content: '';
    position: absolute;
    width: 10vh;
    height: 10vh;
    border-radius: 50%;
    background: #555;
    transform: rotateX(90deg) translate3d(-3.5vh,0,-5vh);
    bottom: 0;
    left: 0;
  }
  .table-leg:after{
    content: '';
    position: absolute;
    width: 30vh;
    height: 30vh;
    border-radius: 50%;
    background: #555;
    transform: rotateX(90deg) translate3d(-13.5vh, 0, 15vh);
    top: 0;
    left: 0;
  }
  .book{
    transform-style: preserve-3d;
    position: absolute;
    transform-origin: 150% center;
    user-select: none;
    transition: transform .3s;
    cursor: pointer;
  }
  .book-1{
    transform: rotateX(-90deg) translate(-21vh, -14.85vh) rotateY(0);
  }
  .book-2{
    transform: rotateX(-90deg) translate(-21vh, -14.85vh) rotateY(30deg);
  }
  .book-3{
    transform: rotateX(-90deg) translate(-21vh, -14.85vh) rotateY(60deg);
  }
  .book-4{
    transform: rotateX(-90deg) translate(-21vh, -14.85vh) rotateY(90deg);
  }
  .book-5{
    transform: rotateX(-90deg) translate(-21vh, -14.85vh) rotateY(120deg);
  }
  .book-6{
    transform: rotateX(-90deg) translate(-21vh, -14.85vh) rotateY(150deg);
  }
  .cover,
  .back-cover{
    height: 29.7vh;
    overflow: hidden;
  }
  .spine,
  .back-cover{
    position: absolute;
    top: 0;
  }
  .cover,
  .back-cover{
    width: 21vh;
  }
  .cover{
    background: linear-gradient(45deg, #888, #ccc);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    color: #333;
  }
  .spine{
    width: 3vh;
    text-align: center;
    font-size: 1.6vh;
    color: #333;
  }
  .spine-b,
  .spine-c,
  .spine-d{
    background: linear-gradient(90deg, #b9c3dd, #b9c3dd 50%, #c1b8ac 50%, #c1b8ac);
    background-size: 10% 100%;
  }
  .spine-a{
    left: 0;
    transform-origin: left;
    transform: rotateY(-90deg) translateX(-100%);
    box-shadow: inset 0 0 .5vh #fff;
    height: 29.7vh;
    background: linear-gradient(0, #b9c3dd, #c1b8ac);
  }
  .spine-b{
    right: 0;
    transform-origin: right;
    transform: rotateY(90deg)  translate3d(100%, 0.5vh, -0.5vh);
    box-shadow: inset 0 0 .5vh #555;
    height: 28.7vh;
  }
  .spine-c{
    right: 0;
    transform-origin: right top;
    transform: rotateX(90deg) rotateZ(90deg) translate3d(0, 0.5vh, -0.5vh);
    box-shadow: inset 0 0 .5vh #555;
    height: 20.5vh;
  }
  .spine-d{
    left: 0;
    bottom: 0;
    transform-origin: left bottom;
    transform: rotateX(-90deg) rotateZ(90deg) translate3d(0, 0, 8.2vh);
    box-shadow: inset 0 0 .5vh #555;
    height: 20.5vh;
  }
  .spine-title{
    padding-top: .5em;
    display: inline-block;
  }
  .back-cover{
    transform: translateZ(-3vh) scaleX(-1);
    background: url("../../static/logo.png") no-repeat center/5vh, linear-gradient(0, #c8c7d7, #c1b8ac);
  }
  .text-dir-90{
    transform: rotateZ(90deg);
    transform-origin: left bottom;
    display: inline-block;
    line-height: 3vh;
    white-space: nowrap;
    text-transform: uppercase;
    font-weight: bold;
  }
  .cover-text{
    text-transform: uppercase;
    font-size: .8em;
  }
  .back-text{
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 1em;
    box-sizing: border-box;
    font-size: .5vh;
  }
</style>
