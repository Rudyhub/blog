<template>
  <div class="rmedia" data-version="1.0.0" data-loadurl="http://assets.wenweipo.com/software/RMedia1.0.0x64.zip">
    <div class="rmedia-header">
      <h1 class="rmedia-h1">
        <span class="letter" data-letter="R">R</span>
        <span class="letter" data-letter="M">M</span>
        <span class="letter" data-letter="e">e</span>
        <span class="letter" data-letter="d">d</span>
        <span class="letter" data-letter="i">i</span>
        <span class="letter" data-letter="a">a</span>
        <small class="rmedia-h1-v">1.0.0操作介绍</small>
      </h1>
    </div>
    <div class="rmedia-main">
      <h2 class="rmedia-h2">目录</h2>
      <tree :tree="tree"></tree>
      <section v-for="(item, index) of tree" v-bind:key="index">
        <h2 class="rmedia-h2" :id="item.id">{{(index + 1) + ' - ' + item.name}}</h2>
        <article v-if="item.tree" v-for="(art, artkey) of item.tree" v-bind:key="artkey">
          <h3 class="rmedia-h3" :id="art.id">{{(index+1) + '.' + (artkey+1) + ' - ' + art.name}}:</h3>
          <div class="rmedia-art-content" v-if="art.content" v-html="art.content"></div>
        </article>
        <hr>
      </section>
      ...
    </div>
  </div>
</template>

<script>
export default {
  name: 'rmedia',
  components: {
    tree: {
      name: 'tree',
      template: `
      <ul class="tree">
        <li class="tree-item" v-for="(item, index) in tree" v-bind:key="index">
          <div class="tree-name" v-on:click="goAnchor(item.id)">{{item.name}}</div>
          <tree v-if="item.tree" :tree="item.tree"></tree>
        </li>
      </ul>`,
      props: ['tree'],
      methods: {
        goAnchor (id) {
          let anchor = document.getElementById(id).getBoundingClientRect()
          document.documentElement.scrollTop = document.body.scrollTop = anchor.top
        }
      }
    }
  },
  data () {
    return {
      title: 'RMedia1.0.0操作介绍',
      tree: [{
        id: 't1',
        name: '操作流程概述',
        tree: [{
          id: 't1-1',
          name: '主要流程',
          content: '<p>批量输入文件 --> 点击【开始】按钮直接压缩处理。</p>'
        }, {
          id: 't1-2',
          name: '中间可选流程',
          content: '<p>设置参数、批量设置（即全局调控）、设置输出目录。默认的输出目录是桌面，需要特别注意覆盖文件行为。</p>'
        }, {
          id: 't1-3',
          name: '一些操作按钮介绍',
          content: `<p><img class="float-r margin-l" src="./static/rmedia/img/00.jpg" alt=""></p>
          <p>菜单栏的滑杆：控制视图大小。</p>
          <p>预览窗口下三个图标按钮：左到右分别是：【锁定/解锁】、【显示/隐藏透明区】、【删除】。这些按钮共同特性是，左击只操作对应文件，右击操作所有文件。</p>
          <p>【锁定/解锁】：相当于【选择/反选】，大部分功能只对锁定的文件处理，会忽略解锁状态的文件。</p>
          <p>【显示/隐藏透明区】：由于预览窗的比例是16:9的，比例有差异的视频、图片，就会有部分多余空间，默认会显示为透明，关闭透明则以黑色填充。<b>注意：此项仅是为了方便观察，不影响结果。</b></p>
          <p>【删除】：删除视图文件，不影响本地文件。</p>`
        }]
      }, {
        id: 't2',
        name: '参数面板介绍（结合部分处理种类）',
        tree: [{
          id: 't2-1',
          name: '视频压缩',
          content: `<img class="float-r margin-l" src="./static/rmedia/img/01.jpg" alt="参数图">
          <p><b>主要参数：</b></p>
          <p>输出名称：默认会在原名称前加全局命名参数的前缀，如：RMedia_。</p>
          <p>输出格式：默认输出mp4。一般情况下拉菜单中可选择的格式都是允许输出的格式，一些除特殊情况除外。</p>
          <p>输出大小：这是压缩最关键的参数，默认会自动调整到该视频最适合的压缩率，百分比前的数值即压缩后的预估大小，有3M以内的误差，一般压缩后会比这个值小一些。</p>
          <p>输出尺寸：尺寸也是压缩比较关键的参数，全局默认限制在1280x720的范围，一般网络传播用这个值就足够。</p>`
        }, {
          id: 't2-2',
          name: '视频、音频截取片段',
          content: `<img class="float-r margin-l" src="./static/rmedia/img/02.jpg" alt="参数图">
          <p><b>主要参数：</b></p>
          <p>时间控制：滑杆滑块取时间位置，下方左右按钮可以微调精确到帧，按钮之间的参数是每点击一次跳多少帧，默认为2帧。</p>
          <p>
            截取：选好时间位置后，点击截取的第一个按钮，即将当前时间设置为起点。再往后选择时间位置，点击第二个按钮即将当前时间设置为终点。<br>
            需要注意：当先取的终点小于起点时，起点将自动变小与终点相等，此时，参数是无效的。同样，当起点时间大于终点时间时，终点时间也会自动增大与起点相等，也是无效的。
          </p>`
        }, {
          id: 't2-3',
          name: '视频、图片输出带缩略图',
          content: `<p>左图：关闭状态 | 右图：开启状态</p>
          <img class="float-l margin-r" src="./static/rmedia/img/03-1.jpg">
          <img class="float-l margin-r" src="./static/rmedia/img/03-2.jpg">
          <div class="clear">
            <p>开启后，将同时输出一个缩略图。即，假如需要压缩视频并输出缩略图，只需要勾选此项即同时处理，输出两个文件。</p>
            <p><b>主要参数：</b></p>
            <p>取缩略图的时间位置：操作与音频、视频的截取时间相同。注意的是，只能在截取的时间起点与终点之间取值。</p>
            <p>缩略图的宽：可设置宽度，高度自动等比缩放，与视频比例相同。</p>
          </div>`
        }, {
          id: 't2-4',
          name: 'logo添加',
          content: `<img class="float-r margin-l" src="./static/rmedia/img/04.jpg">
          <p>
            logo控制面板中，第一行按钮从左到右分别是：【添加logo】、【删除logo】、【设置logo显示的起始时间】、【设置logo显示的终止时间】。设置logo显示的起始/终止时间与截取片段的操作完全一样的，需要注意的是，logo显示的时间段在上方时间控制滑杆的显示颜色是红色区段。</p>
          <p>尺寸比例：调节logo与视频的比例。对比例为敏感的童鞋要注意了，在预览窗看到的logo大小不会是输出结果的大小，最好滑动菜单栏后的控制杆放大到视频输出的大小相当进行观察，也可以先输出一小段试看找感觉。</p>
          <p>水平位置：这是相对于左边的位置比例。</p>
          <p>垂直位置：这是相对于顶部的位置比例。</p>
          <p><em>注意：图片也可以添加logo，包括gif，不同的是，没有时间。</em></p>`
        }, {
          id: 't2-5',
          name: '视频、音频分离',
          content: `<p>左图：关闭状态 | 右图：开启状态</p>
          <img class="float-l margin-r" src="./static/rmedia/img/05-1.jpg">
          <img class="float-l margin-r" src="./static/rmedia/img/05-2.jpg">
          <div class="clear">
            <p>如果是视频，并且有声音，它将分离出无声的视频和左、右声道三个文件（如果是单声道即非立体声，则输出一个视频，一个音频）。</p>
            <p>如果是音频，并且不是单声道，则它会将左、右声道分离两个文件。</p>
          </div>`
        }, {
          id: 't2-6',
          name: '序列图转gif动图或视频',
          content: `<img class="float-r margin-l" src="./static/rmedia/img/06.jpg">
          <p>当输入的是图片文件时，序列图选框会自动显示，如果决定输入序列图片转为gif动图，需要满足以下条件：</p>
          <ol>
            <li>图片的命名末尾必须是有规律的数字如：image01.jpg、image02.jpg、image03.jpg...，或 01.jpg、02.jpg、03.jpg...。数字的个数应大于图片总数的位数。</li>
            <li>输出的格式类型必须记得调整为gif或视频的其中一种。</li>
            <li>确保输入的是第一张图片，一张即可。</li>
            <li>另外，建议把序列图单独放在一个文件夹中。</li>
          </ol>`
        }]
      }, {
        id: 't3',
        name: '全局参数面板介绍',
        content: `<img class="float-r margin-l" src="./static/rmedia/img/07.jpg" alt="">
        <p>实际上就是对所有（锁定）文件进行统一调控。部分功能除外。</p>
        <p>压缩速度级别：是对压缩时处理的速度设置，越快需要的时间越少，但处理的效果会相对差。从实验中看，实际上各级别的时间差别不大，一般保持默认即可。</p>
        <p>宽度、高度上限：规定视频的最大度、最大高度，有时候竖屏的视频可能需要对高度进行修改。本项只对（锁定的）视频有效，对图片等无效。</p>
        <p>大小上限：统一让所有锁定的视频都在此范围内。也是只对视频有效。</p>
        <p>LOGO面板：与文件参数面板相同，只不过此项是对所有锁定的文件进行控制。</p>
        <p>输出名称：当修改并点击确定后，所有锁定的文件的输出名称将被序列化。<b>输入框后的【移动】、【复制】按钮是单独的功能，是为了方便批量重命名（序列化文件名）的。点击即处理，不参与压缩等其他处理。</b></p>`
      }, {
        id: 't4',
        name: '更多功能介绍',
        tree: [{
          id: 't4-1',
          name: '屏幕录制',
          content: `<img class="float-r margin-l" src="./static/rmedia/img/m01.jpg" alt="">
          <ol>
            <li>
              <h4>录制模式</h4>
              <ul>
                <li>全屏有声视频：全屏录制，并且录制电脑内部声音或麦克风的声音。</li>
                <li>小屏有声视频：框选区域录制，并且录制电脑内部声音或麦克风的声音。</li>
                <li>全屏无声视频：全屏录制，禁任何声音。</li>
                <li>小屏无声视频：框选区域录制，禁任何声音。</li>
                <li>无画面仅录音：只录制电脑内部声音或麦克风的声音。</li>
              </ul>
            </li>
            <li>
              <h4>输出帧速率</h4>
              <p>默认25帧/秒。一般录制做gif可以设置15帧/秒，视频可以24-30。</p>
            </li>
            <li>
              <h4>视频比特率</h4>
              <p>事实上它就是压缩视频的主要参数。取值最好是2的n次幂，如64、128、256、512、1024、2048...，一般1280x720设1024即可。</p>
            </li>
            <li>
              <h4>音频比特率</h4>
              <p>一般128k是比通用的立体声音频，如果对音频要求不高，96k即可以满足。对于视频而言，它的大小可以忽略不记。</p>
            </li>
            <li>
              <h4>音频录制设备</h4>
              <p>
                当选择有声模式时，此项是必选的。通常情况下，电脑默认使用的设备是被禁用的。需要右击电脑右下方的小喇叭，选择录音设备，进入下左图窗口，右击，勾上“显示禁用的设备”。进入下右图，右击需要启用的设备，勾“启用”即可。</p>
              <img src="./static/rmedia/img/m02.jpg" style="width: 33%;" alt="">
              <img src="./static/rmedia/img/m03.jpg" style="width: 33%;" alt="">
              <p>启用之后，回到软件录制面板，点击【扫描录音设备】按钮，可用的设备将罗列在下拉菜单中，选择需要的设备。即可进行下一步。</p>
            </li>
            <li>
              <h4>输出后匹配宽度</h4>
              <p>视频输出时调整宽度到此值，高度等比缩放。</p>
            </li>
            <li>
              <h4>录制区域</h4>
              <p>当选择小屏模式时，此项可选。可点击【调整录制区域】按钮，会弹出蓝色选区框，调整它覆盖需要录制的区域，然后键盘【Enter】键确认选区，【Esc】取消并退出选区。</p>
              <p>最后点击【开始录制】即进入录制状态，按键盘【F2】完成录制。</p>
            </li>
          </ol>`
        }, {
          id: 't4-2',
          name: 'PDF转图片',
          content: `<p>进入新的操作界面，有以下按钮如图。</p>
          <img src="./static/rmedia/img/m04.jpg" alt="">
          <p>【打开PDF】：是可批量输入处理的。</p>
          <p>【开始】：可直接点击开始入进转换状态，会把第一个PDF文档的每一页都单独打印为一张图片。</p>
          <p>
            【参数设置】：弹出参数设置面板。共有两项：<br>
            <small>1.渲染比例：决定输出图片的大小，默认是原pdf的2倍。</small>
            <br>
            <small>2.输出质量：质量决定图片的清晰度，当然，这要基于渲染比例的大小，如果输出比例太小，此值无法使图片变清晰。</small>
          </p>`
        }, {
          id: 't4-3',
          name: '图片拼接',
          content: `<img src="./static/rmedia/img/m05.jpg" alt="">
          <p>非常简单，把所有要拼接的图片都打开进来，然后选择排列方式，勾选预览可以看到排列的结果。点击【确定】即输出为png图片。</p>
          <p>高级样式：如果懂css样式，也可以完全通过这里来操作布局。</p>
          <p>需要多尝试。</p>`
        }, {
          id: 't4-4',
          name: '音/视频拼接',
          content: `<h4>支持两种情况：</h4>
          <ol>
            <li>视频拼接：输入的必须都是视频。输出将以第一个视频的尺寸为准，将其他所有的都拉伸匹配，当第一个视频没有音频时，输出的将可能是静音的。输出的比特取全局参数。</li>
            <li>音频拼接：输入的必须都是音频。</li>
          </ol>
          <p>未来可能会把文件的视频、音频分离到可视的轨道以编辑。</p>`
        }, {
          id: 't4-5',
          name: '音/视频混合',
          content: `<h4>支持的可能的情况：</h4>
          <ol>
            <li>一个视频 + 多个音频：第一个必须是视频，接下来的可以输入任意多个音频，这些将被混合到第一个视频中，成为声音源。输出时间以第一个视频为准，超出的输入会被截掉。</li>
            <li>多个视频混合：除第一个视频外，接下来的视频必须是有声音的，否则可能报错，因为它们将被当成音频处理，混合到第一个视频。输出时间同上。</li>
            <li>多个音频混合：此时，排序可是随意的。输出的时间以最长的为准。</li>
          </ol>`
        }]
      }]
    }
  }
}
</script>

<style>
  .letter{
    display: inline-block;
    font-weight: 900;
    font-size: 100px;
    position: relative;
    color: #5f3d8a;
    transform-style: preserve-3d;
    perspective: 400px;
    line-height: 1;
    z-index: 1;
  }
  .letter:before, .letter:after{
    position:absolute;
    content: attr(data-letter);
    transform-origin: top left;
    top:0;
    left:0;
    display: block;
    box-sizing: border-box;
  }
  .letter, .letter:before, .letter:after{
    transition: all 0.3s ease-in-out;
  }
  .letter:before{
    color: #fff;
    text-shadow:
      -1px 0px 1px rgba(255,255,255,.8),
      1px 0px 1px rgba(0,0,0,.8);
    z-index: 3;
    transform:
      rotateX(0deg)
      rotateY(-15deg)
      rotateZ(0deg);
  }
  .letter:after{
    color: rgba(0,0,0,.11);
    z-index:2;
    transform:
      scale(1.08,1)
      rotateX(0deg)
      rotateY(0deg)
      rotateZ(0deg)
      skew(0deg,1deg);
    width: 100%;
    height: 100%;
  }
  .letter:hover:before{
    color: #fafafa;
    transform:
      rotateX(0deg)
      rotateY(-40deg)
      rotateZ(0deg);
  }
  .letter:hover:after{
    transform:
      scale(1.08,1)
      rotateX(0deg)
      rotateY(40deg)
      rotateZ(0deg)
      skew(0deg,22deg);
  }
  .rmedia-header{
    background: linear-gradient(90deg, transparent, #573469 30%, transparent);
  }
  .rmedia-h1{
    color: #48525b;
    padding: 0 1em;
    max-width: 1200px;
    margin: 0 auto;
  }
  .rmedia-h1-v{
    font-size: 28px;
    color: #fff;
    text-shadow: 1px 1px 2px #244c75;
  }
  .rmedia-main {
    line-height: 1.6;
    max-width: 1200px;
    margin: 30px auto;
    color: #6a737d;
  }
  .rmedia-h2,
  .rmedia-h3{
    color: #5899da;
    font-weight: normal;
  }
  .tree-name{
    cursor: pointer;
    display: inline-block;
  }
  .tree-name:hover{
    background: #eee;
  }
  .rmedia b{
    color: #b970af;
  }
</style>
