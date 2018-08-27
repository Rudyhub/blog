<template>
  <div class="stage" :style="'perspective: '+stagePerspective+'vh'">
    <div class="table" :style="'transition:'+tableTransition+';transform:translateY('+tableTranslateY+'vh) rotateX(' + tableRotateX + 'deg) rotateZ(' + tableRotateZ + 'deg)'">
      <div class="book" v-for="(book, index) of books" :key="index" @click="readBook(index)"
           :style="'transform: scale3d('+bookScale+','+bookScale+','+bookScale+') rotateX(-90deg) rotateY(' + book.rotateY[book.status] + 'deg) translate3d('+book.translate3d[book.status]+')'">
        <bookcover :book="book" class="cover"/>
        <div class="spine spine-a">
          <div class="spine-title" v-html="spineTextFilter(book.title)"></div>
          <div class="spine-subtitle" v-html="spineTextFilter(book.subtitle)"></div>
        </div>
        <div class="spine spine-b"></div>
        <div class="spine spine-c"></div>
        <div class="spine spine-d"></div>
        <bookcover :book="book" class="back-cover"/>
      </div>
    </div>
    <div class="table-leg" :style="'transform:rotateX('+(tableRotateX+90)+'deg) translate3d(0, -'+(49.5+tableTranslateY)+'vh, -20vh)'"></div>
  </div>
</template>

<script>
import bookcover from './works/bookcover'
export default {
  name: 'works',
  components: {bookcover},
  data () {
    let books, len, i, rotateY, inits
    books = [
      {
        title: '规划设计类',
        subtitle: '2008在学校',
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
    len = books.length
    for (i = 0; i < len; i++) {
      rotateY = Math.round(i * (360 / len))
      books[i].rotateY = Object.freeze([rotateY, rotateY - 90])
      books[i].translate3d = Object.freeze(['-100vw, -50vh, 0', '0, -50vh, 35vh'])
      books[i].status = 0
    }
    inits = Object.freeze({
      len,
      stagePerspective: 100,
      tableRotateX: 60,
      tableTranslateY: 0
    })
    return {
      books,
      inits,
      stagePerspective: inits.stagePerspective,
      tableRotateX: inits.tableRotateX,
      tableRotateZ: 130,
      tableTranslateY: inits.tableTranslateY,
      tableTransition: 'all 1s',
      bookScale: 0.2
    }
  },
  mounted () {
    let _this, startX, z, curZ, speedsX, spX, timerX
    _this = this
    curZ = z = this.tableRotateZ
    speedsX = [0, 0]
    spX = 0
    this.$el.addEventListener('mousedown', down)
    function down (e) {
      startX = e.clientX
      speedsX[0] = speedsX[1] = spX = 0
      curZ = z = _this.tableRotateZ
      cancelAnimationFrame(timerX)
      _this.tableTransition = 'none'
      document.addEventListener('mousemove', move)
    }
    function move (e) {
      curZ = z + (startX - e.clientX) / 10
      speedsX.push(e.clientX)
      speedsX.shift()
      _this.tableRotateZ = curZ
    }
    document.addEventListener('mouseup', up)
    function up () {
      document.removeEventListener('mousemove', move)
      spX = (speedsX[0] - speedsX[1]) / 10
      if (speedsX[0] > 0 && speedsX[1] > 0) {
        cancelAnimationFrame(timerX)
        timerX = requestAnimationFrame(easeOutX)
      }
    }
    function easeOutX () {
      spX *= 0.96
      curZ += spX
      cancelAnimationFrame(timerX)
      timerX = requestAnimationFrame(easeOutX)
      if (Math.abs(spX) < 0.1) {
        cancelAnimationFrame(timerX)
        _this.tableTransition = 'all 1s'
      }
      _this.tableRotateZ = curZ
      z = curZ
    }
  },
  methods: {
    spineTextFilter (val) {
      return val.split('').join('<br>')
    },
    readBook (index) {
      for (let i = 0; i < this.inits.booksLen; i++) {
        if (i !== index) {
          this.books[i].status = 0
        }
      }
      if (this.books[index].status) {
        this.books[index].status = 0
        this.tableRotateX = this.inits.tableRotateX
        this.tableTranslateY = this.inits.tableTranslateY
        this.stagePerspective = this.inits.stagePerspective
      } else {
        this.books[index].status = 1
        this.tableRotateX = 90
        this.tableRotateZ = this.books[index].rotateY[1] + Math.round(this.tableRotateZ / 360) * 360
        this.tableTranslateY = 14.85
        this.stagePerspective = 50
      }
    }
  }
}
</script>

<style>
  .stage{
    perspective: 100vh;
    height: 100vh;
    background: #07080d;
    overflow: hidden;
  }
  .table{
    width: 80vh;
    height: 80vh;
    border-radius: 50%;
    background: rgba(200, 240, 255, 0.2);
    border: 3px solid #2e6881;
    transform-style: preserve-3d;
    margin: 10vh auto;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
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
    position: absolute;
    z-index: 0;
  }
  .table-leg{
    position: absolute;
    width: 3vh;
    height: 30vh;
    background: linear-gradient(90deg, #555 10%, #000000 30%, #bbd5ee 80%, #555);
    top: -8vh;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    transform-origin: top;
    transform-style: preserve-3d;
    border-radius: 1.5vh 1.5vh 0 0;
    transition: transform 1s;
    z-index: -1;
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
    background: linear-gradient(90deg, #101010, #707e95);
    transform: rotateX(90deg) translate3d(-13.5vh, 0, 15vh);
    top: 0;
    left: 0;
  }
  .book{
    transform-style: preserve-3d;
    position: absolute;
    user-select: none;
    cursor: pointer;
    transition: transform 1s;
    width: 100vw;
    height: 100vh;
    z-index: 1;
  }
  .cover,
  .back-cover{
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    color: #333;
    transform-style: preserve-3d;
  }
  .spine,
  .back-cover{
    position: absolute;
    top: 0;
  }
  .cover{
    background: linear-gradient(45deg, #888, #ccc);
    text-align: center;
  }
  .back-cover{
    transform: translateZ(-10vh) scaleX(-1);
    background: linear-gradient(0, #c8c7d7, #c1b8ac);
  }
  .spine{
    text-align: center;
    font-size: 5vh;
    color: #333;
    left: 0;
    top: 0;
  }
  .spine-b,
  .spine-c,
  .spine-d{
    width: calc(10vh - 2px);
    background: linear-gradient(90deg, #b9c3dd, #b9c3dd 50%, #c1b8ac 50%, #c1b8ac);
    background-size: 10% 100%;
  }
  .spine-a{
    width: 10vh;
    transform-origin: left;
    transform: rotateY(-90deg) translateX(-100%);
    box-shadow: inset 0 0 2vh #fff;
    height: 100vh;
    background: linear-gradient(0, #b9c3dd, #c1b8ac);
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    flex-direction: column;
  }
  .spine-b{
    transform-origin: right;
    transform: rotateY(90deg)  translate3d(calc(10vh - 1px), 2vh, calc(100vw - 12vh));
    box-shadow: inset 0 0 2vh #555;
    height: 96vh;
  }
  .spine-c{
    transform-origin: right top;
    transform: rotateX(90deg) rotateZ(90deg) translate3d(-1px, calc(9vh - 98vw), -2vh);
    box-shadow: inset 0 0 2vh #555;
    height: 98vw;
  }
  .spine-d{
    transform-origin: left bottom;
    transform: rotateX(-90deg) rotateZ(90deg) translate3d(1px, -1px, -57vh);
    box-shadow: inset 0 0 2vh #555;
    height: 98vw;
  }
  .spine-title{
    margin: 0 auto;
  }
  .spine-subtitle{
    background: #333;
    color: #fff;
    padding: 1vh;
    margin-top: 3vh;
    font-size: 0.8em;
  }
</style>
