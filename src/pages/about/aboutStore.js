import store from '../../scripts/store.js'
export default {
  mask: (() => {
    let mask = document.createElement('div')
    mask.setAttribute('style', 'position: fixed;width: 100vw;height: 100vh;left: 0;top: 0;z-index: 999;')
    return mask
  })(),
  data: {
    nav: store.getCommonNav(),
    chartColor: [
      {color: 'rgba(111,174,9,.5)', text: '程序编程语言及框架'},
      {color: 'rgba(211, 108, 16, 0.5)', text: 'UI、工程设计及动画软件应用'},
      {color: 'rgba(96, 43, 161, 0.5)', text: '业余爱好'}],
    skills: [{
      type: 0,
      name: 'javascript',
      value: 90,
      detail: `前端任意需求，封装库、写框架、写web游戏，可实现ES6和ES5互转。
        陌生框架，扫几眼就能用，并能猜测其大概构架和原理，可修改和优化源码。
        90%的程度值是针对web前端而言的，其余的10%代表冷门、偏门的对象和API。
        然而，如果非把webGL算在内，则降为70%。`
    }, {
      type: 0,
      name: 'html',
      value: 96,
      detail: '常用的都没什么技术含量，除非算上SEO、svg、XML。SEO我虽不深入，但因为尝试过写简单的爬虫，心中有数。svg绘图基本掌握，动画方面稍弱。XML则用得不多。'
    }, {
      type: 0,
      name: 'css',
      value: 94,
      detail: '任意布局均可实现，并且知道多种方法及其性能优劣和兼容性。比如关于浮动、文档流、动画、3D等。'
    }, {
      type: 0,
      name: 'vue',
      value: 79,
      detail: `多种方法实现任意需求，抽象复用组件，可以在不用vuex的情况模拟store功能。
        事实上不止vue，之所以只列出vue，是想以它代表主流框架，比如angular、微信小程序、react等。
        解释一下：vue、angular、微信小程序虽不是一个妈生的，但理念和用法的相似度很高，只要会其中一个，其他的分分钟就能够想得通。
        只有react与其他几个的理念不同，react是函数式创建虚拟DOM输出UI，全程js思维，所以又回到了对js（尤其ES6）的熟悉程度。
        可见，学好原生如同练就一双火眼金睛，框架都是小妖精。`
    }, {
      type: 0,
      name: 'bootstrap',
      value: 86,
      detail: '所有UI框架没有什么难度，如layui、elementUI、amazeUI、mui等亦同理。'
    }, {
      type: 0,
      name: 'nodejs',
      value: 76,
      detail: '写接口，IO处理，数据库增删改查，WebSockect图文与视频直播系统，包括结合ffmpeg实现视频切片点播和直播。'
    }, {
      type: 0,
      name: 'php',
      value: 78,
      detail: '写接口，封装常用类，数据库操作等。我认为是最容易上手和理解的后端语言，我怀疑ES6似乎就是模仿php。'
    }, {
      type: 0,
      name: 'mysql',
      value: 81,
      detail: '数据库语句并不多，因它不需要也不宜处理过多或过于复杂的逻辑，所以几乎所有的语法都会，此外，看了Oracle，感觉语法都几乎一样，其他的数据库估计相差不远。'
    }, {
      type: 0,
      name: 'java',
      value: 68,
      detail: `java是标准而舒服的面向对象编程的语言，掌握得差不多了，包括内存机制。
        java对js的面向对象编程方面帮助极大，尤其关于类的三大特性以及静态属性/方法、原型链属性/方法、私有属性/方法等方面的关系和内存机制。
        再加上看过C++的入门，对内存有更深的了解，还有所谓的指针，其实就是一串16进制的地址，这就更容易明白java或js甚至其他语言的指针和对象实体的存在关系。
        由于缺少java方面更多的实战，就68%吧。`
    }, {
      type: 0,
      name: 'node-webkit',
      value: 66,
      detail: `会nodejs、js、html、css基本也就会node-webkit（其简称是nwjs）了，另有比较多人用的electron也一样，都是这些组合，只是构建APP的方式不同而已。
        用它完全是为了结合ffmpeg命令写一个媒体处理软件，就是作品中的RMedia。
        对于写软件尤其移动平台软件，不建议用，因为nwjs、electron打包都很大，而用QT最适合。`
    }, {
      type: 0,
      name: 'actionscript',
      value: 87,
      detail: '被淘汰的基于flash的脚本语言，是我最早掌握的语言，刚学完，html5时代就来了。不过，针对IE6、7、8的兼容性，曾用到它来处理播放器以及批量上传功能。'
    }, {
      type: 1,
      name: 'photoshop',
      value: 98,
      detail: `ps是我惟一永远不会忘掉怎么用的软件，任意需求必能满足，并且可以全程脱离工具栏、菜单栏，直接快捷键操作，一种效果至少可以用三种方式实现。
        其实本想直接给100%的，最后留2%作为退路。
        如果只单纯谈使用，还不足以如此自信，但涉及容差、阈值、色相原理、填充和透明度的区别、混合模式中的各种算法、色彩通道等，
        我敢说几乎没有UI设计师真正的通透明白，大多数都是凭感觉调试和使用，达到目的即止。`
    }, {
      type: 1,
      name: 'AE',
      value: 68,
      detail: 'AE功能太多，而且大多数都是基于插件的运用。68%是对基本动画实现、表达式的书写、图形动画、过渡等功能和一些常用抠像、骨骼、灯光、粒子系统、仿真系统等插件的掌握的评估值。'
    }, {
      type: 1,
      name: 'AI',
      value: 49,
      detail: '曾经很熟，但时隔多年，只能评估为49%了，基本的绘图还是毫无压力的。'
    }, {
      type: 1,
      name: 'CDr',
      value: 52,
      detail: '掌握程度与AI一样。'
    }, {
      type: 1,
      name: 'CAD',
      value: 88,
      detail: '读的景观设计专业，CAD是必修软件，不用多说。'
    }, {
      type: 1,
      name: '3Dmax',
      value: 89,
      detail: '除了较为复杂的异形比较难（有些可能不会）之外，基本想要做什么模型都可以完成。动画方面会，只是很少用，因为它对电脑要求高，而且效果并不太好，一般都是结合AE来完成动画。'
    }, {
      type: 1,
      name: 'sketchup',
      value: 92,
      detail: '虽然景观专业课程里没有它，但它依然是必修的软件，快速建模，效率极高。'
    }, {
      type: 1,
      name: 'vary',
      value: 82,
      detail: '其实就是灯光和材质的运用，以及对一些光子传递的理解。'
    }, {
      type: 1,
      name: 'lumion',
      value: 65,
      detail: '做建筑场景的镜头动画和调节材质其实没有难度，基本上就靠素材库和素材的质量。'
    }, {
      type: 1,
      name: 'flash',
      value: 87,
      detail: '这是最早学的动画软件，如果抛开脚本代码(actionscript)，就非常简单。然而，会用代码了其实也简单。'
    }, {
      type: 2,
      name: '绘画',
      value: 38,
      detail: '无法跟专业的比，还是能看出一点功底，毕竟是自学成才。'
    }, {
      type: 2,
      name: '吉他',
      value: 36,
      detail: '会弹唱，指弹（即独奏）方面很弱。'
    }, {
      type: 2,
      name: '编曲',
      value: 12,
      detail: '知道原理，能玩简单的。'
    }, {
      type: 2,
      name: 'FLstudio',
      value: 58,
      detail: '到是不难，长时间不玩而已。'
    }, {
      type: 2,
      name: 'cubase',
      value: 26,
      detail: '比FLstudio难一些，玩得少。'
    }],
    career: [{
      date: '2012年7月',
      company: '深圳市朗形数码影像传播有限公司',
      logo: '../../static/company-logo-lx.png',
      job: '后期设计师',
      harvest: `这是毕业后的第一份工作，我在效果图部负责后期。效果图部的职位分三个：建模师，渲染师，后期设计师。
        虽然在学校的时候我的ps能力已经挺强，但在朗形工作后，ps得到了质的提升，自此我从来不敢说自己精通任何知识。`
    }, {
      date: '2014年11月',
      company: '深圳市溪林峰园林绿化工程有限公司',
      logo: '../../static/company-logo-xlf.png',
      job: '景观设计师',
      harvest: `由于是个小公司，所以身兼多职，一个项目从测量、绘制CAD、建模、效果、报价预算、施工图绘制、竣工决算等全程一人全包。
      期间，CAD、3Dmax、Sketchup等软件的运用也大幅度提升，还自学了vary、lumion两个新的。
      其实，在此公司之前，还进了一个更小的公司（浩峰园林绿化工程有限公司）做了半年，
      由于待遇太低，年底得还第一笔学校的贷款，后经朋友介绍到溪林峰。`
    }, {
      date: '2016年3月',
      company: '香港文汇网',
      logo: '../../static/company-logo-wwp.png',
      job: '前端开发工程师',
      harvest: `2015年底因为朋友创业想让我帮做网站，本来想在凡科网那种建站的，发现太丑，于是决定自学代码，从此一发不可收拾。
      立刻，2015年12月离职奔回老家闷在家里自学代码三个月不出门，从html5、css3、js到php、mysql，很快把前端到后台的数据来龙去脉都搞通了。
      2016年春节过完便回深圳投简历，3月收到香港文汇网的面试邀请，经三轮面试后，在香港文汇网新媒体中心入职前端工程师，正式加入前端行业。
      入行之后，一开始很多同事、同行建议学习使用主流框架，然而我一直把精力放在深入原生，从模拟jquery，到后来看到框架就想看源码了解大概原理的强迫症。
      然后我惊喜的发现，不管什么框架很快的就能用，看到bug立即猜出问题，可以在必要时修改或优化框架的源码。
      体悟到原生功底带给我的不只是原生本身，更是给了我一个俯瞰众框架的致高点。
      两年多，不仅完全通透面向对象编程，还学了nodejs、nwjs、java、ffmpeg、c++等新知识，并学习用它们写桌面应用。`
    }, {
      date: '2018年9月',
      company: '期待',
      job: '大前端 / 全栈 / 全能',
      harvest: '争取一份荣耀，而不止是待遇。'
    }]
  }
}
