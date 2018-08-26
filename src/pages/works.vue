<template>
  <div class="stage">
    <div class="table" ref="table">
      <div class="book" v-for="(book, index) of books" :key="index" :class="'book-'+(index+1)" :style="'transform: rotateX(-90deg) translate(-21vh, -14.85vh) rotateY('+angelFilter(index)+'deg)'">
        <div class="cover" >
          <canvasplayer v-if="book.video" :src="book.video" :autoplay="true" :loop="true" class="cover-img"></canvasplayer>
          <img class="cover-img" :src="book.cover" draggable="false">
          <h1>{{book.title}}</h1>
          <p class="cover-text">{{book.subtitle}}</p>
        </div>
        <div class="spine spine-a">
          <span class="spine-title" v-html="spineTextFilter(book.title)"></span>
          <small class="text-dir-90">{{book.subtitle}}</small>
        </div>
        <div class="spine spine-b"></div>
        <div class="spine spine-c"></div>
        <div class="spine spine-d"></div>
        <div class="back-cover">
          <canvasplayer v-if="book.video" :src="book.video" :autoplay="true" :loop="true" class="cover-img"></canvasplayer>
          <img v-else class="cover-img" :src="book.cover" draggable="false">
          <h1>{{book.title}}</h1>
          <p class="cover-text">{{book.subtitle}}</p>
        </div>
      </div>
    </div>
    <div class="table-leg"></div>
  </div>
</template>

<script>
import canvasplayer from '../components/canvasplayer'
export default {
  name: 'works',
  components: {canvasplayer},
  data () {
    return {
      books: [
        {
          title: '规划设计类',
          subtitle: '2008 在学校',
          cover: '../../static/works/01/01.jpg'
        }, {
          title: '效果图类',
          subtitle: '2012 在朗形',
          cover: '../../static/works/02/01.jpg'
        }, {
          title: '景观方案设计类',
          subtitle: '2014 在溪林峰',
          cover: '../../static/works/03/01.jpg'
        }, {
          title: 'Web网站网页类',
          subtitle: '2016 在文汇',
          cover: '../../static/works/cover01.jpg'
        }, {
          title: '小游戏H5类',
          subtitle: '2016 在文汇',
          video: '../../static/works/v03.mp4'
        }, {
          title: '桌面APP类',
          subtitle: '2016 在文汇',
          video: '../../static/works/v02.mp4'
        }
      ]
    }
  },
  mounted () {
    let table, startX, z, curZ, speedsX, spX, timerX
    table = this.$refs.table
    curZ = z = 130
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
    },
    angelFilter (index) {
      return Math.round(index * (360 / this.books.length))
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
    margin-top: 10vh;
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
    transform: rotateX(60deg) rotateZ(130deg);
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
    background: url("../../static/works/01/table-bg.png") no-repeat;
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
    cursor: pointer;
  }
  .cover,
  .back-cover{
    height: 29.7vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    color: #333;
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
    background: linear-gradient(0, #c8c7d7, #c1b8ac);
  }
  .text-dir-90{
    transform: rotateZ(90deg);
    transform-origin: left bottom;
    display: inline-block;
    line-height: 3vh;
    white-space: nowrap;
    text-transform: uppercase;
  }
  .cover-text{
    text-transform: uppercase;
    font-size: .8em;
  }
  .cover-img{
    width: 80%;
    top: 3vh;
    position: absolute;
    transform: translateZ(1px);
  }
  .book-out{
    animation: book-out 5s forwards;
  }
  @keyframes book-out {
    0%{
      transform: inherit;
    }
    100%{
      transform: translate3d(0, 0, 29.7vh) rotate3d(1, 0, 0, 90deg);
    }
  }
</style>
