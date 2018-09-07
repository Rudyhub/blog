export default {
  nav: Object.freeze({
    home: ['首页', 'home', 'index', '/'],
    about: ['个人', 'about', 'me', '关于'],
    works: ['作品', 'works'],
    blog: ['博客', 'blog', '谈理想', '谈人生'],
    album: ['相册', 'album', 'photo', 'picture', '相片'],
    help: ['帮助', '-h', '-?', '--help', 'help'],
    clear: ['清除', 'clear', 'cls']
  }),
  about: {
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
      logo: '/static/company-logo-lx.png',
      job: '后期设计师',
      harvest: `这是毕业后的第一份工作，我在效果图部负责后期。效果图部的职位分三个：建模师，渲染师，后期设计师。
        虽然在学校的时候我的ps能力已经挺强，但在朗形工作后，ps得到了质的提升，自此我从来不敢说自己精通任何知识。`
    }, {
      date: '2014年11月',
      company: '深圳市溪林峰园林绿化工程有限公司',
      logo: '/static/company-logo-xlf.png',
      job: '景观设计师',
      harvest: `由于是个小公司，所以身兼多职，一个项目从测量、绘制CAD、建模、效果、报价预算、施工图绘制、竣工决算等全程一人全包。
      期间，CAD、3Dmax、Sketchup等软件的运用也大幅度提升，还自学了vary、lumion两个新的。
      其实，在此公司之前，还进了一个更小的公司（浩峰园林绿化工程有限公司）做了半年，
      由于待遇太低，年底得还第一笔学校的贷款，后经朋友介绍到溪林峰。`
    }, {
      date: '2016年3月',
      company: '香港文汇网',
      logo: '/static/company-logo-wwp.png',
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
  },
  works: {
    app: {
      title: '库与框架及APP类',
      subtitle: '2016 在文汇',
      video: '/static/works/v03.mp4',
      items: [{
        title: 'RMedia媒体处理器',
        source: ['https://github.com/Rudyhub/RMedia'],
        docs: ['https://rudyhub.github.io/RMedia'],
        date: 20180226,
        desc: `这是一个node-webkit + ffmpeg的桌面应用，初衷只是为了解决视频压缩问题，但发现公司视频部还遇到各种奇怪问题，
      比如电脑上或ios手机上播放视频有声音，但安卓播放没有却死活没有声音或者某段声音喳喳的响到后面又正常等。
      本软件就是为了处理这些问题。另外还外加了处理图片以及pdf转图片然后自动拼接等。`,
        level: 1
      }, {
        title: 'FupConvert视频转码压缩',
        source: ['https://github.com/Rudyhub/FupConvert'],
        date: 20171102,
        desc: '这是java + ffmpeg的视频压缩和转换软件，其实就是为了给ffmpeg一个简单的UI，让非专业人士也能使用。很多第三方软件很多也用ffmpeg，但它们提供的可配置参数太专业太复杂，普通用户根本看不懂。'
      }, {
        title: 'Reditor富文本编辑器',
        href: ['https://rudyhub.github.io/Reditor/'],
        source: ['https://github.com/Rudyhub/Reditor'],
        date: 20170825,
        desc: '由于中途有其他事更急迫，故未完成，但一般后台常功能都可用。本编辑器是针对后台的，侧重于图片、视频及其他文件的上传功能的体验。',
        level: 1
      }]
    },
    games: {
      title: '小游戏小程序H5类',
      subtitle: '2016 在文汇',
      video: '/static/works/v02.mp4',
      items: [{
        title: '逃课大作战',
        href: ['https://wii-c.com/student_catch_game/', 'https://rudyhub.github.io/catchKids/'],
        date: 20180906,
        thumb: 'https://wii-c.com/student_catch_game/img/cover.jpg'
      }, {
        title: '测一测别人眼中的你',
        href: ['https://wii-c.com/personality_test/'],
        date: 20180823,
        thumb: 'https://wii-c.com/personality_test/img/cover.jpg'
      }, {
        title: '评选心中最美港姐',
        href: ['https://wii-c.com/gangjie_election_game/'],
        date: 20180808,
        thumb: 'https://wii-c.com/gangjie_election_game/img/cover.jpg'
      }, {
        title: '改革开放40周年之岁月如歌',
        href: ['http://assets.wenweipo.com/sp/2018h510/'],
        date: 20180808,
        thumb: 'http://assets.wenweipo.com/sp/2018h510/img/cover.jpg'
      }, {
        title: '改革开放40周年之微数据',
        href: ['http://assets.wenweipo.com/sp/2018h509/'],
        date: 20180808,
        thumb: 'http://assets.wenweipo.com/sp/2018h509/img/cover.jpg'
      }, {
        title: '改革开放40周年之流行语',
        href: ['http://assets.wenweipo.com/sp/2018h508/'],
        date: 20180731,
        thumb: 'http://assets.wenweipo.com/sp/2018h508/img/cover.jpg'
      }, {
        title: '寻找香港吃货',
        href: ['https://rudyhub.github.io/HKFoodGame/', 'https://wii-c.com/hk_food_game/'],
        source: ['https://github.com/Rudyhub/HKFoodGame'],
        date: 20180728,
        thumb: 'https://wii-c.com/hk_food_game/img/cover.jpg'
      }, {
        title: '贸易战疯狂进化论',
        href: ['https://wii-c.com/trade_war_chat/'],
        date: 20180718,
        thumb: 'https://wii-c.com/trade_war_chat/img/cover.jpg'
      }, {
        title: '金句填充我可以，有奖问答',
        href: ['http://sp.wenweipo.com/2018h507/'],
        date: 20180621,
        thumb: 'http://sp.wenweipo.com/2018h507/img/cover.jpg'
      }, {
        title: '世界杯射门游戏',
        href: ['https://rudyhub.github.io/WorldCupGame2.0/', 'https://wii-c.com/world_cup_shot_game/'],
        source: ['https://github.com/Rudyhub/WorldCupGame2.0'],
        desc: `<p>优秀作品。</p>
        <p>这是dom+css3写游戏的尝试，用2D模拟3D运动、keyframe动画、匀减速、碰撞检测等，虽然碰撞检测用了canvas，但也仅仅只是个隐藏的标签而已。</p>
        <p>当然，最后得出结论：canvas写游戏更好，尤其在低配手机上可以看出渲染的差别，dom+css3有时有卡顿现象。</p>`,
        date: 20180615,
        thumb: 'https://wii-c.com/world_cup_shot_game/img/cover.jpg',
        level: 1
      }, {
        title: '香港中联办首个公众开放日',
        href: ['http://assets.wenweipo.com/sp/2018h506/'],
        date: 20180428,
        thumb: 'http://assets.wenweipo.com/sp/2018h506/img/cover.jpg'
      }, {
        title: '广深港高铁知多少',
        href: ['http://assets.wenweipo.com/sp/2018h505/'],
        source: ['https://github.com/Rudyhub/20180401h5'],
        date: 20180401,
        thumb: 'http://assets.wenweipo.com/sp/2018h505/img/cover.jpg'
      }, {
        title: '亮出你的出世纸',
        href: ['http://sp.wenweipo.com/2018h504/'],
        source: ['https://github.com/Rudyhub/20180328h5'],
        date: 20180327,
        thumb: 'http://sp.wenweipo.com/2018h504/img/cover.jpg',
        desc: 'canvas手画马赛克'
      }, {
        title: '2018两会微数据',
        href: ['http://assets.wenweipo.com/sp/2018h503/'],
        date: 20180320,
        thumb: 'http://assets.wenweipo.com/sp/2018h503/img/cover.jpg'
      }, {
        title: '热烈祝贺习近平全票当选国家主席',
        href: ['http://sp.wenweipo.com/2018card01/'],
        date: 20180318,
        thumb: 'http://sp.wenweipo.com/2018card01/img/cover.jpg'
      }, {
        title: '香港中联办主任王志民的答卷',
        href: ['http://assets.wenweipo.com/sp/2018h502/'],
        date: 20180131,
        thumb: 'http://assets.wenweipo.com/sp/2018h502/img/cover.jpg'
      }, {
        title: '狗旺财，富入屋',
        href: ['http://assets.wenweipo.com/sp/2018h501/'],
        date: 20180124,
        thumb: 'http://assets.wenweipo.com/sp/2018h501/img/cover.jpg'
      }, {
        title: '文汇2018招聘',
        href: ['http://sp.wenweipo.com/zhaopin2018/'],
        date: 20180110
      }, {
        title: '新年与圣诞贺卡',
        href: ['http://sp.wenweipo.com/2017card01/'],
        date: 20171212,
        thumb: 'http://sp.wenweipo.com/2017card01/img/cover.jpg'
      }, {
        title: '王志民与网民在线交流',
        href: [],
        date: 20171103,
        desc: '白忙活，领导没去直播，所以没上线',
        online: 0
      }, {
        title: '十九大知识知多少',
        href: ['http://sp.wenweipo.com/2017ff/game/'],
        date: 20171023,
        thumb: 'http://sp.wenweipo.com/2017ff/game/img/cover.jpg'
      }, {
        title: '习近平与三位基层代表亲密互动',
        href: ['http://assets.wenweipo.com/sp/2017xigz/'],
        date: 20171021,
        thumb: 'http://assets.wenweipo.com/sp/2017xigz/img/cover.jpg'
      }, {
        title: '祝贺十九大贺卡',
        href: ['http://sp.wenweipo.com/greeting_card/'],
        date: 20171018,
        thumb: 'http://sp.wenweipo.com/greeting_card/img/cover.jpg'
      }, {
        title: '王志民提「三势」各界认同齐声赞',
        href: ['http://assets.wenweipo.com/sp/2017mwh5/'],
        date: 20170928,
        thumb: 'http://assets.wenweipo.com/sp/2017mwh5/img/logo.jpg'
      }, {
        title: '斩港妖切切乐游戏',
        href: ['https://rudyhub.github.io/cutfruit-wwp/'],
        date: 20170923,
        desc: `<p>这是基于pixi.js库的canvas 2D游戏，初探游戏，虽然运用部分ES6模块写法，但其实现在看来代码并不好，有很多东西是非常需要优化的。</p>
        <p>产品未上线，原因是突然发现有点血腥，虽然针对港独分子，政治对立，但还是要讲人道主义的。
        但可体验本人随便替换了UI的切水果版本：https://rudyhub.github.io/cutfruit/</p>`,
        thumb: 'https://rudyhub.github.io/cutfruit-wwp/img/title.png',
        online: 0,
        level: 1
      }, {
        title: '香港回归20周年报纸集锦',
        href: ['http://assets.wenweipo.com/sp/2017hgpapers/'],
        date: 20170712
      }, {
        title: '习大大邀您群聊',
        href: ['https://rudyhub.github.io/20170630h5/', 'http://assets.wenweipo.com/sp/2017chat/'],
        source: ['https://github.com/Rudyhub/20170630h5'],
        date: 20170628,
        desc: '上线后点击百万以上，但因仿群聊防红包同时事关习大大，故已被微信屏蔽。其实初衷只想逗大家一乐而已。现在文汇网处链接也已关闭，但本人的Github依然体验的。',
        level: 1
      }, {
        title: '文汇网微信小程序',
        href: [],
        date: 20170401,
        desc: '因公司服务器是香港的，无需备案，所以也无ssl证书，微信小程序只支持有ssl证书的网站，无奈放弃。',
        online: 0
      }, {
        title: '汇眼识鸡',
        href: ['http://sp.wenweipo.com/2017score/'],
        date: 20170119,
        thumb: 'http://sp.wenweipo.com/2017score/img/logo.jpg'
      }, {
        title: '2016国庆',
        href: ['http://sp.wenweipo.com/2016gqh5/'],
        date: 20160929,
        thumb: 'http://assets.wenweipo.com/sp/2016gqh5/images/square.jpg'
      }, {
        title: '立法会投票站地图指引',
        href: ['http://sp.wenweipo.com/2016lcmap/'],
        date: 20160830
      }]
    },
    webs: {
      title: 'Web网站网页类',
      subtitle: '2016 在文汇',
      cover: '/static/works/cover01.jpg',
      items: [{
        title: '改革开放40周年',
        href: ['http://sp.wenweipo.com/2018gk/'],
        date: 20180725
      }, {
        title: '大湾融媒',
        href: ['http://news.wenweipo.com/szj/'],
        date: 20180724
      }, {
        title: '林鄭班底施政一周年',
        href: ['http://sp.wenweipo.com/2018sz/'],
        date: 20180621
      }, {
        title: '凝神聚力发挥所长',
        href: ['http://sp.wenweipo.com/2018sc/'],
        date: 20180620
      }, {
        title: '特金会瞩目登场',
        href: ['http://sp.wenweipo.com/2018tj/'],
        date: 20180607
      }, {
        title: '俄罗斯世界杯',
        href: ['http://sp.wenweipo.com/2018zs/'],
        date: 20180607
      }, {
        title: '上合組織青島峰會',
        href: ['http://sp.wenweipo.com/2018sh/'],
        date: 20180531
      }, {
        title: '粤港澳大湾区规划出台',
        href: ['http://sp.wenweipo.com/2018dw/'],
        date: 20180521
      }, {
        title: '哈理王子世纪婚礼',
        href: ['http://sp.wenweipo.com/2018hl/'],
        date: 20180517
      }, {
        title: '汶川十年川港情',
        href: ['http://sp.wenweipo.com/2018wc/'],
        date: 20180509
      }, {
        title: '汶川地震十年 川港重建新生活',
        href: ['http://assets.wenweipo.com/sp/2018cg/'],
        date: 20180508
      }, {
        title: '朝韩首脑会晤',
        href: ['http://sp.wenweipo.com/2018hw/'],
        date: 20180424
      }, {
        title: '外国驻港领事团四川行',
        href: ['http://assets.wenweipo.com/sp/2018fc/'],
        date: 20180414
      }, {
        title: '香港仔',
        href: [],
        date: 20180413,
        desc: '我也不知道为什么没有上线，不了解政治环境。',
        online: 0
      }, {
        title: '開往春天的中歐班列',
        href: ['http://assets.wenweipo.com/sp/2018zozl/'],
        date: 20180316
      }, {
        title: '2018全国两会',
        href: ['http://sp.wenweipo.com/2018lh'],
        date: 20180226
      }, {
        title: '香港国际青年中乐节投票',
        href: ['http://sp.wenweipo.com/vote_cms/'],
        date: 20180115
      }, {
        title: '全媒体网站',
        href: ['http://news.wenweipo.com/am/'],
        date: 20171227
      }, {
        title: '文汇2017招聘页',
        href: ['http://sp.wenweipo.com/zhaopin2017/'],
        date: 20171222
      }, {
        title: '林鄭月娥首次進京述職',
        href: ['http://sp.wenweipo.com/2017ls/'],
        date: 20171212
      }, {
        title: '智造&服务 为无锡插上腾飞双翼',
        href: ['http://sp.wenweipo.com/2017wuxi/'],
        date: 20171201
      }, {
        title: '港青北上发展风采展示活动',
        href: ['http://sp.wenweipo.com/2017gq/'],
        date: 20171128
      }, {
        title: '王志民直播间',
        href: ['http://sp.wenweipo.com/2017wlive/'],
        date: 20171102,
        desc: '一切准备就绪后，领导没去直播，然后已关闭'
      }, {
        title: '十九大VR视点',
        href: ['http://sp.wenweipo.com/2017ff/vr/list.php'],
        date: 20171013,
        desc: 'pano.js已经过期，进入vr已经无法观看'
      }, {
        title: '林郑首份施政报告',
        href: ['http://sp.wenweipo.com/2017bg/'],
        date: 20171009
      }, {
        title: '电竞钱途系列报道',
        href: ['http://sp.wenweipo.com/2017dj/'],
        date: 20170928
      }, {
        title: '文汇后台系统',
        href: [],
        date: 20170926,
        desc: '未上线，原因可能是后台人手不够，或者还没有完成，人手不够进度慢。',
        online: 0
      }, {
        title: '中共十九大',
        href: ['http://sp.wenweipo.com/2017rd/'],
        date: 20170914
      }, {
        title: '聚焦十九大',
        href: ['http://sp.wenweipo.com/2017ff/'],
        date: 20170914
      }, {
        title: '香港南顺集团食品安全',
        href: ['http://sp.wenweipo.com/hklamsoon/'],
        date: 20170627
      }, {
        title: '纪念版陀飞轮腕表',
        href: ['http://sp.wenweipo.com/hk20watch/'],
        date: 20170627
      }, {
        title: '庆祝香港回归20周年',
        href: ['http://sp.wenweipo.com/2017hg/'],
        date: 20170525
      }, {
        title: '2017张德江视察澳门',
        href: ['http://sp.wenweipo.com/2017zd/'],
        date: 20170504
      }, {
        title: '文汇天气网站系统',
        href: [],
        date: 20170417,
        desc: '不知道为什么没上线，只知道一般情况下是领导商议无果。',
        online: 0
      }, {
        title: '2017香港特首选举',
        href: ['http://sp.wenweipo.com/2017xj/'],
        date: 20170318
      }, {
        title: '2017全国两会网红',
        href: ['http://sp.wenweipo.com/wwp_vote/'],
        date: 20170314
      }, {
        title: '2017全国两会',
        href: ['http://sp.wenweipo.com/2017lh'],
        date: 20170223
      }, {
        title: '大文全媒体访谈Talk',
        href: ['http://sp.wenweipo.com/all-media/interview/'],
        date: 20170207
      }, {
        title: '冰天雪地 賞冰樂雪 「醉」美龍江',
        href: ['http://sp.wenweipo.com/2016ic/'],
        date: 20161229
      }, {
        title: '大文全媒体图说香港Hong Kong Pic',
        href: ['http://sp.wenweipo.com/all-media/hongkong_pic/'],
        date: 20161128
      }, {
        title: '大文全媒体视频Hong Kong Video',
        href: ['http://sp.wenweipo.com/all-media/video/'],
        date: 20161128
      }, {
        title: '香港各界紀念孫中山先生誕辰150周年大會',
        href: ['http://sp.wenweipo.com/2016szs/'],
        date: 20161101
      }, {
        title: 'H5睇新闻',
        href: ['http://sp.wenweipo.com/h5/'],
        date: 20161024
      }, {
        title: '2016里约奥运会',
        href: ['http://sp.wenweipo.com/2016ol/'],
        date: 20160801
      }, {
        title: '范长江行动（长期）',
        href: ['http://sp.wenweipo.com/2016cj/'],
        date: 20160701
      }, {
        title: '2016年香港立法会选举',
        href: ['http://sp.wenweipo.com/2016lc/'],
        date: 20160630
      }, {
        title: '李太「港」本土',
        href: ['http://sp.wenweipo.com/2016lt/'],
        date: 20160629
      }, {
        title: '未来之星',
        href: ['http://sp.wenweipo.com/2016fs/'],
        date: 20160627
      }, {
        title: '香港回归19周年',
        href: ['http://sp.wenweipo.com/201620/'],
        date: 20160624
      }, {
        title: '張德江赴港出席「一帶一路」高峰論壇並視察香港特區',
        href: ['http://sp.wenweipo.com/2016zdj/'],
        date: 20160512
      }, {
        title: '文汇网站改版',
        href: [],
        date: 20160503,
        desc: '不知道为什么没上线，只知道一般情况下是领导商议无果。',
        online: 0
      }, {
        title: '习近平出访捷克并赴美核峰会',
        href: ['http://sp.wenweipo.com/2016fj/'],
        date: 20160325
      }]
    },
    landscape: {
      title: '景观方案设计类',
      subtitle: '2014 在溪林峰',
      cover: '/static/landscape/j03.jpg',
      items: [{
        title: '深圳十五峯：屋顶花园',
        thumb: '/static/landscape/a01.jpg',
        href: ['/#/works/landscape'],
        date: 20141130,
        items: [
          {
            caption: '角度一',
            img: '/static/landscape/a01.jpg',
            scale: [1280, 720]
          }, {
            caption: '角度二',
            img: '/static/landscape/a02.jpg',
            scale: [1280, 720]
          }
        ]
      }, {
        title: '深圳兴强苑：别墅花园',
        thumb: '/static/landscape/b03.jpg',
        href: ['/#/works/landscape'],
        date: 20141213,
        items: [
          {
            caption: '总平面彩图',
            img: '/static/landscape/b04.jpg',
            scale: [1280, 800]
          }, {
            caption: '角度一',
            img: '/static/landscape/b01.jpg',
            scale: [1280, 800]
          }, {
            caption: '角度二',
            img: '/static/landscape/b02.jpg',
            scale: [1280, 800]
          }, {
            caption: '角度三',
            img: '/static/landscape/b03.jpg',
            scale: [1280, 800]
          }
        ]
      }, {
        title: '深圳兴强苑：双栋别墅花园',
        thumb: '/static/landscape/d02.jpg',
        href: ['/#/works/landscape'],
        date: 20141213,
        items: [
          {
            caption: '总平面彩图',
            img: '/static/landscape/d05.jpg',
            scale: [1280, 800]
          }, {
            caption: '前大门',
            img: '/static/landscape/d01.jpg',
            scale: [1280, 800]
          }, {
            caption: '前院',
            img: '/static/landscape/d02.jpg',
            scale: [1280, 800]
          }, {
            caption: '前院水景',
            img: '/static/landscape/d03.jpg',
            scale: [1280, 800]
          }, {
            caption: '西院',
            img: '/static/landscape/d04.jpg',
            scale: [1280, 800]
          }
        ]
      }, {
        title: '东莞尚都：别墅后院',
        thumb: '/static/landscape/e02.jpg',
        href: ['/#/works/landscape'],
        date: 20141130,
        items: [
          {
            caption: '方案一：白天',
            img: '/static/landscape/e01.jpg',
            scale: [1280, 800]
          }, {
            caption: '方案一：夜景',
            img: '/static/landscape/e02.jpg',
            scale: [1280, 800]
          }, {
            caption: '方案二',
            img: '/static/landscape/e03.jpg',
            scale: [1280, 735]
          }, {
            caption: '方案三',
            img: '/static/landscape/e04.jpg',
            scale: [1280, 713]
          }
        ]
      }, {
        title: '深圳招商依山郡：屋顶花园',
        thumb: '/static/landscape/f02.jpg',
        href: ['/#/works/landscape'],
        date: 20150210,
        items: [
          {
            caption: '总体鸟瞰效果',
            img: '/static/landscape/f01.jpg',
            scale: [1280, 694]
          }, {
            caption: '水景',
            img: '/static/landscape/f02.jpg',
            scale: [1280, 655]
          }, {
            caption: '水平台',
            img: '/static/landscape/f03.jpg',
            scale: [1280, 800]
          }, {
            caption: '花架一',
            img: '/static/landscape/f04.jpg',
            scale: [1280, 800]
          }, {
            caption: '花架二',
            img: '/static/landscape/f05.jpg',
            scale: [1280, 838]
          }, {
            caption: '木地板',
            img: '/static/landscape/f06.jpg',
            scale: [1280, 779]
          }
        ]
      }, {
        title: '深圳中央原著：别墅花园',
        thumb: '/static/landscape/g03.jpg',
        href: ['/#/works/landscape'],
        date: 20150410,
        items: [
          {
            caption: '方案一：角度一',
            img: '/static/landscape/g01.jpg',
            scale: [1280, 800]
          }, {
            caption: '方案一：角度二',
            img: '/static/landscape/g02.jpg',
            scale: [1280, 760]
          }, {
            caption: '方案一：休闲亭',
            img: '/static/landscape/g03.jpg',
            scale: [1280, 800]
          }, {
            caption: '方案一：东入口花架',
            img: '/static/landscape/g04.jpg',
            scale: [1280, 800]
          }, {
            caption: '方案二：整体彩色平面图',
            img: '/static/landscape/g05.jpg',
            scale: [1280, 640]
          }, {
            caption: '方案二：角度一',
            img: '/static/landscape/g06.jpg',
            scale: [1280, 640]
          }, {
            caption: '方案二：角度二',
            img: '/static/landscape/g07.jpg',
            scale: [1280, 640]
          }
        ]
      }, {
        title: '香港：别墅后院',
        thumb: '/static/landscape/h01.jpg',
        href: ['/#/works/landscape'],
        date: 20150430,
        items: [
          {
            caption: '平面彩图',
            img: '/static/landscape/h02.jpg',
            scale: [1280, 1500]
          }, {
            caption: '总体效果',
            img: '/static/landscape/h01.jpg',
            scale: [1280, 800]
          }
        ]
      }, {
        title: '深圳招商观园：别墅花园',
        thumb: '/static/landscape/i05.jpg',
        href: ['/#/works/landscape'],
        date: 20150503,
        items: [
          {
            caption: '前院角度一',
            img: '/static/landscape/i05.jpg',
            scale: [1280, 800]
          }, {
            caption: '前院角度二',
            img: '/static/landscape/i06.jpg',
            scale: [1280, 800]
          }, {
            caption: '后院',
            img: '/static/landscape/i01.jpg',
            scale: [1280, 800]
          }, {
            caption: '东院',
            img: '/static/landscape/i04.jpg',
            scale: [1280, 800]
          }
        ]
      }, {
        title: '深圳四海投资：屋顶花园及木屋',
        thumb: '/static/landscape/j03.jpg',
        href: ['/#/works/landscape'],
        date: 20150604,
        items: [
          {
            caption: '平面布局图',
            img: '/static/landscape/j00.jpg',
            scale: [1280, 816]
          }, {
            caption: '总体鸟瞰',
            img: '/static/landscape/j01.jpg',
            scale: [1280, 872]
          }, {
            caption: '角度一：白天',
            img: '/static/landscape/j03.jpg',
            scale: [1280, 720]
          }, {
            caption: '角度一：夜景',
            img: '/static/landscape/j04.jpg',
            scale: [1280, 720]
          }, {
            caption: '角度二：白天',
            img: '/static/landscape/j05.jpg',
            scale: [1280, 720]
          }, {
            caption: '角度二：夜景',
            img: '/static/landscape/j06.jpg',
            scale: [1280, 720]
          }, {
            caption: '木屋室内角度一',
            img: '/static/landscape/j07.jpg',
            scale: [1280, 960]
          }, {
            caption: '木屋室内角度二',
            img: '/static/landscape/j08.jpg',
            scale: [1280, 960]
          }
        ]
      }, {
        title: '深圳半山溪谷：住宅庭院',
        thumb: '/static/landscape/k01.jpg',
        href: ['/#/works/landscape'],
        date: 20150805,
        items: [
          {
            caption: '总体园建模型鸟瞰图',
            img: '/static/landscape/k01.jpg',
            scale: [1280, 800]
          }, {
            caption: '前院角度一',
            img: '/static/landscape/k02.jpg',
            scale: [1280, 800]
          }, {
            caption: '前院角度二',
            img: '/static/landscape/k03.jpg',
            scale: [1280, 800]
          }, {
            caption: '前院角度三',
            img: '/static/landscape/k04.jpg',
            scale: [1280, 800]
          }, {
            caption: '前院角度四',
            img: '/static/landscape/k05.jpg',
            scale: [1280, 800]
          }, {
            caption: '前院角度五',
            img: '/static/landscape/k06.jpg',
            scale: [1280, 800]
          }, {
            caption: '后院总体鸟瞰',
            img: '/static/landscape/k07.jpg',
            scale: [1280, 800]
          }
        ]
      }, {
        title: '美国纽约：别墅后院',
        thumb: '/static/landscape/n02.jpg',
        href: ['/#/works/landscape'],
        date: 20150728,
        items: [
          {
            caption: '总体鸟瞰图',
            img: '/static/landscape/n01.jpg',
            scale: [1280, 800]
          }, {
            caption: '角度一',
            img: '/static/landscape/n02.jpg',
            scale: [1280, 800]
          }, {
            caption: '角度二',
            img: '/static/landscape/n03.jpg',
            scale: [1280, 800]
          }, {
            caption: '角度三',
            img: '/static/landscape/n04.jpg',
            scale: [1280, 800]
          }
        ]
      }, {
        title: '梅州：花园',
        thumb: '/static/landscape/o01.jpg',
        href: ['/#/works/landscape'],
        date: 20150623,
        items: [
          {
            caption: '平面彩图',
            img: '/static/landscape/o02.jpg',
            scale: [1280, 1328]
          }, {
            caption: '整体效果',
            img: '/static/landscape/o01.jpg',
            scale: [1280, 800]
          }
        ]
      }, {
        title: '深圳坂田：道路绿化',
        thumb: '/static/landscape/p01.jpg',
        href: ['/#/works/landscape'],
        date: 20151112,
        items: [
          {
            caption: '路口鸟瞰图',
            img: '/static/landscape/p01.jpg',
            scale: [1280, 880]
          }, {
            caption: '路段局部效果',
            img: '/static/landscape/p02.jpg',
            scale: [1280, 640]
          }
        ]
      }, {
        title: '梅州：私家花园',
        thumb: '/static/landscape/t01.jpg',
        href: ['/#/works/landscape'],
        date: 20151216,
        items: [
          {
            caption: '总体鸟瞰图',
            img: '/static/landscape/t01.jpg',
            scale: [1280, 640]
          }, {
            caption: '角度一',
            img: '/static/landscape/t02.jpg',
            scale: [1280, 640]
          }, {
            caption: '角度二',
            img: '/static/landscape/t03.jpg',
            scale: [1280, 918]
          }, {
            caption: '角度三',
            img: '/static/landscape/t04.jpg',
            scale: [1280, 640]
          }, {
            caption: '角度四',
            img: '/static/landscape/t05.jpg',
            scale: [1280, 640]
          }
        ]
      }]
    },
    effects: {
      name: 'effects',
      title: '效果图类',
      subtitle: '2012 在朗形',
      cover: '/static/effects/001.jpg',
      items: [{
        title: 'N多项目，直接前往',
        thumb: '/static/effects/001.jpg',
        href: ['#/works/effects'],
        date: 20120925,
        items: [{
          caption: '综合商业景观',
          img: '/static/effects/001.jpg',
          scale: [1280, 768]
        }, {
          caption: '综合商业景观',
          img: '/static/effects/002.jpg',
          scale: [1280, 675]
        }, {
          caption: '综合商业景观',
          img: '/static/effects/003.jpg',
          scale: [1280, 577]
        }, {
          caption: '会堂建筑',
          img: '/static/effects/004.jpg',
          scale: [1280, 832]
        }, {
          caption: '别墅群',
          img: '/static/effects/005.jpg',
          scale: [1280, 525]
        }, {
          caption: '办公建筑步行街',
          img: '/static/effects/006.jpg',
          scale: [960, 1112]
        }, {
          caption: '商业办公建筑',
          img: '/static/effects/007.jpg',
          scale: [1280, 796]
        }, {
          caption: '半室内景观',
          img: '/static/effects/008.jpg',
          scale: [1280, 960]
        }, {
          caption: '办公景观',
          img: '/static/effects/009.jpg',
          scale: [1280, 704]
        }, {
          caption: '综合楼群',
          img: '/static/effects/010.jpg',
          scale: [1280, 548]
        }, {
          caption: '幼儿园',
          img: '/static/effects/011.jpg',
          scale: [1280, 730]
        }, {
          caption: '商业街',
          img: '/static/effects/012.jpg',
          scale: [1280, 641]
        }, {
          caption: '住宅区景观',
          img: '/static/effects/013.jpg',
          scale: [1280, 800]
        }, {
          caption: '住宅区景观',
          img: '/static/effects/014.jpg',
          scale: [1280, 800]
        }, {
          caption: '综合建筑',
          img: '/static/effects/015.jpg',
          scale: [1280, 852]
        }, {
          caption: '住宅区景观',
          img: '/static/effects/016.jpg',
          scale: [1280, 912]
        }, {
          caption: '别墅后院景观',
          img: '/static/effects/017.jpg',
          scale: [1280, 768]
        }, {
          caption: '别墅群公共区景观',
          img: '/static/effects/018.jpg',
          scale: [1280, 768]
        }, {
          caption: '住宅区入口景观',
          img: '/static/effects/019.jpg',
          scale: [1280, 800]
        }, {
          caption: '建筑群',
          img: '/static/effects/020.jpg',
          scale: [1280, 832]
        }]
      }]
    },
    homework: {
      name: 'homework',
      title: '规划设计类',
      subtitle: '2008在学校',
      cover: '/static/homework/001.jpg',
      items: [{
        title: '模型课作业：《欧式别墅花园设计》',
        thumb: '/static/homework/001.jpg',
        href: ['/#/works/villa'],
        date: 20110210,
        level: 1,
        items: [
          {
            caption: '别墅规划彩色平面图',
            img: '/static/homework/003.jpg',
            scale: [1280, 960]
          }, {
            caption: '效果图：夜景',
            img: '/static/homework/001.jpg',
            scale: [1280, 800]
          }, {
            caption: '效果图：白天',
            img: '/static/homework/002.jpg',
            scale: [1280, 800]
          }, {
            caption: '模型相片：前院',
            img: '/static/homework/004.jpg',
            scale: [1280, 960]
          }, {
            caption: '模型相片：花架',
            img: '/static/homework/005.jpg',
            scale: [1280, 960]
          }, {
            caption: '模型相片：前院东侧',
            img: '/static/homework/006.jpg',
            scale: [1280, 960]
          }, {
            caption: '模型相片：泳池',
            img: '/static/homework/007.jpg',
            scale: [1280, 960]
          }
        ]
      }, {
        title: '毕业设计：《大平澎湖休闲园》',
        thumb: '/static/homework/108.jpg',
        href: ['/#/works/garden'],
        date: 20120501,
        level: 1,
        items: [
          {
            caption: '整体彩色平面图',
            img: '/static/homework/101.jpg',
            scale: [1280, 718]
          }, {
            caption: '整体鸟瞰效果图与现场相片对比',
            img: '/static/homework/102.jpg',
            scale: [1280, 721]
          }, {
            caption: '效果图：入口大门《千里迎鹏》',
            img: '/static/homework/103.jpg',
            scale: [1280, 960]
          }, {
            caption: '效果图：景点名《听雨轩》',
            img: '/static/homework/104.jpg',
            scale: [1280, 866]
          }, {
            caption: '效果图：景点名《缤纷小溪》',
            img: '/static/homework/105.jpg',
            scale: [1280, 854]
          }, {
            caption: '效果图：景点名《艺景园》',
            img: '/static/homework/106.jpg',
            scale: [1280, 960]
          }, {
            caption: '效果图：景点名《水云间》',
            img: '/static/homework/107.jpg',
            scale: [1280, 960]
          }, {
            caption: '效果图：景点名《枫林晚道》',
            img: '/static/homework/108.jpg',
            scale: [1280, 797]
          }, {
            caption: '效果图：景点名《谈笑阁》',
            img: '/static/homework/109.jpg',
            scale: [1280, 729]
          }, {
            caption: '效果图：卵石小道',
            img: '/static/homework/110.jpg',
            scale: [1280, 960]
          }
        ]
      }]
    }
  },
  AI: Object.freeze([{
    user: /早|(早上|晚上|你|中午|下午)\s*[好早]/i,
    sys: ['嗯', '嗯嗯']
  }, {
    user: /(这是?)*(怎么|如何|咋个?)[做作]到?的/,
    sys: ['一切都是transform，了解一下']
  }, {
    user: /怎么称呼|[你您]?叫什么|报上名来|姓[啥甚]?名[啥甚]?|[你您]?的?(真名|名字)|你是[?？谁]/,
    sys: ['你猜', '晋曲', '令狐长老', '这不重要', 'Rudy']
  }, {
    user: /男[的生人]女[的生人]|是男是女|性别|你是[女男](的|生|孩子?|人)吗/,
    sys: ['我是大叔', '为什么会问这么傻的问题？', '男人', 'Boy', 'Man', 'Young man', '你不会是来找茬的吧？']
  }, {
    user: /[喝呵][,，]?([男女]人|基[佬老])$|基[佬老]$/,
    sys: ['呵，垃圾', '呵，二狗', '呵，基佬']
  }, {
    user: /(如何|怎么?样?)(操作|进[入去]|访问)|(进[入去]|访问).{2,}/,
    sys: ['输入“帮助”看看正确指令']
  }, {
    user: /毕业于|(哪个|什么)学校|基本信息|(哪年|什么时候)毕业|毕业多久了|什么专业|你?(会|擅长|喜欢玩?|爱好是?|玩)什么|你?有什么技能|你?哪方面比较厉害/,
    sys: ['了解基本信息到我的主页去看吧，输入“主页”', '可以输入“主页”到我的主页去看看']
  }, {
    user: /(如何|怎么?样?|咋个?)(学好|提高|学习|提升|加强)(代码|js|jquery|javascript|鸡儿屎|前端|后台|ajax|数据|SEO)*/i,
    sys: ['其实很简单，就两步：<br>第一步：早上5点左右起床写代码，<br>第二步：晚上12点还在写代码', '这个问题充钱就能解决']
  }, {
    user: /[说]?我[\s\S]*?(厉害|腻害|牛[逼BX13]|帅)/i,
    sys: ['喝嘤料', '呵呵', '三连否', '拒绝']
  }, {
    user: /(大叔|你|Rudy|令狐长老|大神)?[\s\S]*?(厉害|腻害|牛(逼|B|X|13)|帅|优秀)/i,
    sys: ['这谁都知道', '假装谦虚', '低调', '天生的']
  }, {
    user: /我(太|好|真(.{2})?|怎么|为何|咋个?|为啥)(这么)*傻[了吧?？]?/i,
    sys: ['关我什么四？', '天生的', '未解之谜']
  }, {
    user: /(大叔|你|Rudy|令狐长老|大神)?[\s\S]*傻(逼|B|13|X)/i,
    sys: ['系统怀疑素质有问题', '你可能是个傻憨龊笨']
  }, {
    user: /你是?(怎么|如何|咋个?)[做作]到的/i,
    sys: ['给钱我就说', '你猜']
  }, {
    user: /然后呢?/,
    sys: ['没有然后', '然后就没有然后了']
  }, {
    user: /(大叔|你|Rudy|令狐长老|大神)*.*?(几点|什么时候)[睡起]/i,
    sys: ['比狗睡得晚，比鸡起得早', '总之比你们这些鸡狗早起晚睡']
  }, {
    user: /(睡觉|下班|吃饭|要饭)了?/,
    sys: ['呵，快滚', '呵嘤料', '还早']
  }, {
    user: /加班[吗吧啊?？]/,
    sys: ['不加', '打死也不加']
  }, {
    user: /加班(,好气|$)/,
    sys: ['奈斯', '关我什么四']
  }, {
    user: /^好气$/,
    sys: ['气个P标签', '关我什么四']
  }, {
    user: /^(好的?|ok|嗯嗯?|谢谢?|知道了?|明白|晓得|了解|真的吗?|你?确定[?？]?)/i,
    sys: ['嗯', '哦', '喔']
  }, {
    user: /(爱上?|喜欢|中意)你/,
    sys: ['那你给我钱吧', '可惜我只缺钱']
  }, {
    user: /爱我[吗吧?？]*/,
    sys: ['呵，可能吗？除非打死我', '呵，可能吗？']
  }, {
    user: /^(大叔|你|Rudy|令狐(长老)*|大神|长老)$|((大叔|你|Rudy|令狐(长老)*|大神|长老)*在[吗吧啊?？]*)/,
    sys: ['嗯哼', '哦嚯', '喝嘤料', '不在']
  }]),
  respone (val) {
    let len, i
    val = val.trim().toLowerCase()
    len = this.AI.length
    i = 0
    for (let page in this.nav) {
      if (this.nav[page].includes(val)) {
        return [page]
      }
    }
    for (; i < len; i++) {
      if (this.AI[i].user.test(val)) {
        let sysLen = this.AI[i].sys.length
        let index = Math.round(Math.random() * sysLen - 0.5)
        return '[令狐长老]: ' + this.AI[i].sys[index]
      }
    }
    return '[系统回复 ~]: 你说啥？'
  }
}
