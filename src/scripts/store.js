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
  works: [{
    name: 'app',
    title: '库与框架及APP类',
    subtitle: '2016 在文汇',
    video: '../../static/works/v03.mp4',
    items: [{
      title: 'RMedia媒体处理器',
      source: ['https://github.com/Rudyhub/RMedia'],
      date: 20180226,
      desc: `这是一个node-webkit + ffmpeg的桌面应用，初衷只是为了解决视频压缩问题，但发现公司视频部还遇到各种奇怪问题，
      比如电脑上或ios手机上播放视频有声音，但安卓播放没有却死活没有声音或者某段声音喳喳的响到后面又正常等。
      本软件就是为了处理这些问题。另外还外加了处理图片以及pdf转图片然后自动拼接等。`
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
      desc: '由于中途有其他事更急迫，故未完成，但一般后台常功能都可用。本编辑器是针对后台的，侧重于图片、视频及其他文件的上传功能的体验。'
    }]
  }, {
    name: 'games',
    title: '小游戏小程序H5类',
    subtitle: '2016 在文汇',
    video: '../../static/works/v02.mp4',
    items: [{
      title: '测一测别人眼中的你',
      href: ['https://wii-c.com/personality_test/'],
      source: ['http://gitserv.wenweipo.com/Rudyhub/personality_test'],
      date: 20180823,
      thumb: 'https://wii-c.com/personality_test/img/cover.jpg'
    }, {
      title: '评选心中最美港姐',
      href: ['https://wii-c.com/gangjie_election_game/'],
      source: ['http://gitserv.wenweipo.com/fentoo/gangjie_election_game'],
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
      source: ['https://github.com/Rudyhub/HKFoodGame', 'http://gitserv.wenweipo.com/Rudyhub/hk_food_game'],
      date: 20180728,
      thumb: 'https://wii-c.com/hk_food_game/img/cover.jpg'
    }, {
      title: '贸易战疯狂进化论',
      href: ['https://wii-c.com/trade_war_chat/'],
      source: ['http://gitserv.wenweipo.com/fentoo/trade_war_chat'],
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
      source: ['https://github.com/Rudyhub/WorldCupGame2.0', 'http://gitserv.wenweipo.com/fentoo/world_cup_shot_game'],
      desc: '优秀作品，用2D模拟3D运动、keyframe动画、匀减速算法、碰撞检测等',
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
      desc: '未上线，原因是突然发现有点血腥。但可体验本人随便替换了UI的版本：https://rudyhub.github.io/cutfruit/',
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
  }, {
    name: 'webs',
    title: 'Web网站网页类',
    subtitle: '2016 在文汇',
    cover: '../../static/works/cover01.jpg',
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
      desc: '未上线，原因可能是手台没人搞，人手不够，或者还没有完成，人手不够进度慢。',
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
  }, {
    name: 'landscape',
    title: '景观方案设计类',
    subtitle: '2014 在溪林峰',
    cover: '../../static/works/03/01.jpg',
    items: []
  }, {
    name: 'effects',
    title: '效果图类',
    subtitle: '2012 在朗形',
    cover: '../../static/works/02/01.jpg',
    items: []
  }, {
    name: 'homework',
    title: '规划设计类',
    subtitle: '2008在学校',
    cover: '../../static/works/01/01.jpg',
    items: [{
      title: '模型课作业：《欧式别墅花园设计》',
      thumb: '../../static/works/01/01.jpg',
      href: [],
      date: 20110210,
      items: ['../../static/works/01/01.jpg', '../../static/works/01/02.jpg']
    }]
  }],
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
