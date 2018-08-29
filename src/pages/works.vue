<template>
  <div class="stage flex-center" :style="'perspective: '+stagePerspective+'vh'" @transitionend="stageTransEnd">
    <transition name="fade">
      <navbar v-show="navbarShow" class="flex-column" @click="navbarClick"/>
    </transition>
    <transition name="fade" @beforeEnter="onPopupShow" @afterLeave="onPopupHide">
      <popup v-show="popupShow" @click="popupClick">
        <p><b>操作指南：</b></p>
        <p>
          鼠标左键左右拖动 = 旋转<br>
          双击书本 = 进入查看作品
        </p>
      </popup>
    </transition>
    <div class="table flex-center"
         :style="{
         transition: allTransition,
         transform: 'translateY('+tableTranslateY+'vh) rotateX(' + tableRotateX + 'deg) rotateZ(' + (-tableRotateZ) + 'deg)'
         }">
      <div class="book" v-for="(book, index) of books" :key="index" @dblclick="readBook(index)"
           :style="{
           transition: allTransition,
           transform: 'scale3d('+book.scale+','+book.scale+','+book.scale+') rotateX(-90deg) rotateY(' + book.rotateY + 'deg) translate3d('+book.translateX+'vh,-50vh,0)'
           }">
        <bookcover :book="book" class="cover flex-center" :style="{transform: 'rotateY('+book.coverRotateY+'deg)'}" @transitionend="bookCloseEnd"/>
        <div class="spine spine-a flex-center">
          <div class="spine-title" v-html="spineTextFilter(book.title)"></div>
          <div class="spine-subtitle" v-html="spineTextFilter(book.subtitle)"></div>
        </div>
        <div class="spine spine-b"></div>
        <div class="spine spine-c"></div>
        <div class="spine spine-d"></div>
        <bookcover :book="book" class="back-cover flex-center"/>
      </div>
    </div>
    <div class="table-leg"
         :style="{
         transition: allTransition,
         transform: 'rotateX('+(tableRotateX+90)+'deg) translate3d(0, -'+(42+tableTranslateY)+'vh, -20vh)'
         }"></div>
  </div>
</template>

<script>
import bookcover from './works/bookcover'
import popup from '../components/popup'
import utils from '../scripts/utils.js'
import navbar from '../components/navbar'
export default {
  name: 'works',
  components: {bookcover, popup, navbar},
  data () {
    let books, len, i, inits
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
        video: '../../static/works/v02.mp4'
      }, {
        title: '桌面APP类',
        subtitle: '2016 在文汇',
        video: '../../static/works/v03.mp4'
      }
    ]
    len = books.length
    for (i = 0; i < len; i++) {
      books[i].rotateY = Math.round(i * (360 / len))
      books[i].coverRotateY = -90
      books[i].scale = 0.25
      books[i].translateX = -80
    }
    inits = Object.freeze({
      stagePerspective: 100,
      tableRotateX: 60,
      tableTranslateY: 0
    })
    return {
      popupShow: false,
      navbarShow: false,
      books,
      activeBook: null,
      inits,
      stagePerspective: inits.stagePerspective,
      tableRotateX: 90,
      tableRotateZ: 180,
      tableTranslateY: inits.tableTranslateY,
      allTransition: 'all 1s'
    }
  },
  mounted () {
    let _this, z, curZ, allowEaseOut, listener, timer
    _this = this
    curZ = z = this.tableRotateZ
    listener = utils.listener(this.$el, {
      start () {
        curZ = z = _this.tableRotateZ
        allowEaseOut = false
      },
      move (disX) {
        _this.allTransition = 'none'
        curZ = z + disX / 10
        _this.tableRotateZ = curZ
        allowEaseOut = true
      },
      end () {
        _this.allTransition = 'all 1s'
      },
      easeOut (spX) {
        if (allowEaseOut) {
          _this.allTransition = 'none'
          curZ += this.directionX * spX / 10
          _this.tableRotateZ = curZ
          z = curZ
        }
      },
      easeOutEnd () {
        allowEaseOut = false
        _this.allTransition = 'all 1s'
      }
    })
    timer = setTimeout(() => {
      clearTimeout(timer)
      this.allTransition = 'all 3s'
      this.tableRotateX = 60
      timer = setTimeout(() => {
        clearTimeout(timer)
        this.allTransition = 'all 1s'
        this.popupShow = this.navbarShow = true
      }, 3100)
    }, 500)
    this.$on('preventControl', () => {
      listener.off()
    })
    this.$on('allowControl', () => {
      listener.on()
    })
  },
  methods: {
    popupClick (e) {
      if (e.target === e.currentTarget || e.target.classList.contains('popup-close')) {
        this.popupShow = false
      }
    },
    navbarClick (e, name) {
      if (name === 'help') {
        this.popupShow = !this.popupShow
      }
    },
    spineTextFilter (val) {
      return val.split('').join('<br>')
    },
    readBook (index) {
      this.activeBook = this.books[index]
      if (this.stagePerspective === this.inits.stagePerspective) {
        this.tableRotateX = 90
        this.tableRotateZ = Math.round(this.tableRotateZ / 360) * 360 - (this.activeBook.rotateY - 90)
        this.tableTranslateY = 16
        this.stagePerspective = 50
        this.activeBook.scale = 0.32
        this.navbarShow = false
        this.$emit('preventControl')
      } else {
        this.tableRotateX = this.inits.tableRotateX
        this.tableTranslateY = this.inits.tableTranslateY
        this.stagePerspective = this.inits.stagePerspective
        this.activeBook.scale = 0.25
        this.activeBook.translateX = -80
        this.navbarShow = true
        this.$emit('allowControl')
      }
    },
    onPopupShow () {
      this.$emit('preventControl')
    },
    onPopupHide () {
      this.$emit('allowControl')
    },
    bookCloseEnd () {
      console.log('bookEnd')
    },
    stageTransEnd (e) {
      if (e.target === e.currentTarget) {
        if (this.stagePerspective !== this.inits.stagePerspective) {
          this.activeBook.coverRotateY = -270
          this.activeBook.translateX = -100
        } else {
          this.activeBook.coverRotateY = -90
        }
      }
    }
  }
}
</script>

<style scoped>
  .stage{
    perspective: 100vh;
    height: 100vh;
    background: #07080d;
    overflow: hidden;
    transition: all 1s;
  }
  .table{
    width: 80vh;
    height: 80vh;
    border-radius: 50%;
    background: rgba(200, 240, 255, 0.2);
    border: 3px solid #2e6881;
    transform-style: preserve-3d;
    position: absolute;
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
    position: absolute;
    z-index: 1;
  }
  .table-leg{
    position: absolute;
    width: 3vh;
    height: 30vh;
    background: linear-gradient(90deg, #555 10%, #000000 30%, #bbd5ee 80%, #555);
    transform-style: preserve-3d;
    border-radius: 1.5vh 1.5vh 0 0;
    z-index: 0;
    top: 8vh;
  }
  .table-leg:before{
    content: '';
    position: absolute;
    width: 10vh;
    height: 10vh;
    border-radius: 50%;
    background: #555;
    transform: rotateX(90deg) translate3d(-3.5vh, 0, -5vh);
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
    width: 10vh;
    height: 100vh;
    z-index: 1;
  }
  .cover,
  .back-cover{
    width: 88vh;
    height: 100vh;
    flex-direction: column;
    color: #333;
  }
  .spine,
  .back-cover{
    position: absolute;
    top: 0;
    left: 0;
  }
  .cover{
    background: linear-gradient(45deg, #888, #ccc);
    text-align: center;
    transform-origin: left;
    transform: rotateY(-90deg);
    transition: transform 1s;
  }
  .back-cover{
    transform-origin: left;
    transform: rotateY(-90deg) scaleX(-1) translate3d(-88vh, 0, -10vh);
    background: linear-gradient(0, #c8c7d7, #c1b8ac);
  }
  .spine{
    text-align: center;
    font-size: 5vh;
    color: #333;
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
    box-shadow: inset 0 0 2vh #fff;
    height: 100vh;
    background: linear-gradient(0, #b9c3dd, #c1b8ac);
    flex-direction: column;
    transform: scaleX(-1);
  }
  .spine-b{
    transform: translate3d(0, 0, 88vh);
    box-shadow: inset 0 0 2vh #555;
    height: 100vh;
  }
  .spine-c{
    transform-origin: top;
    transform: rotateX(90deg);
    box-shadow: inset 0 0 2vh #555;
    height: 88vh;
  }
  .spine-d{
    transform-origin: top;
    transform:  rotateX(90deg) translate3d(0, 0, -100vh);
    box-shadow: inset 0 0 2vh #555;
    height: 88vh;
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
