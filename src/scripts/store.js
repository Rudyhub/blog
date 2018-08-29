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
  works: {
    gamesh5: [{
      title: 'H5睇新闻',
      href: 'http://sp.wenweipo.com/h5/',
      date: 20161024
    }, {
      title: '2016国庆H5',
      href: 'http://sp.wenweipo.com/2016gqh5/',
      date: 20160929
    }, {
      title: '立法会投票站地图指引H5',
      href: 'http://sp.wenweipo.com/2016lcmap/',
      date: 20160830
    }],
    webs: [{
      title: '20161209top10========='
    }, {
      title: '大文全媒体访谈Talk',
      href: 'http://sp.wenweipo.com/all-media/interview/',
      date: 20161128
    }, {
      title: '大文全媒体图说香港Hong Kong Pic',
      href: 'http://sp.wenweipo.com/all-media/hongkong_pic/',
      date: 20161128
    }, {
      title: '大文全媒体视频Hong Kong Video',
      href: 'http://sp.wenweipo.com/all-media/video/',
      date: 20161128
    }, {
      title: '香港各界紀念孫中山先生誕辰150周年大會',
      href: 'http://sp.wenweipo.com/2016szs/',
      date: 20161101
    }, {
      title: '2016里约奥运会',
      href: 'http://sp.wenweipo.com/2016ol/',
      date: 20160801
    }, {
      title: '2016范长江行动',
      href: 'http://sp.wenweipo.com/2016cj/',
      date: 20160701
    }, {
      title: '2016年香港立法会选举',
      href: 'http://sp.wenweipo.com/2016lc/',
      date: 20160630
    }, {
      title: '李太「港」本土',
      href: 'http://sp.wenweipo.com/2016lt/',
      date: 20160629
    }, {
      title: '未来之星',
      href: 'http://sp.wenweipo.com/2016fs/',
      date: 20170627
    }, {
      title: '香港回归19周年',
      href: 'http://sp.wenweipo.com/201620/',
      date: 20160624
    }, {
      title: '張德江赴港出席「一帶一路」高峰論壇並視察香港特區',
      href: 'http://sp.wenweipo.com/2016zdj/',
      date: 20160512
    }, {
      title: '习近平出访捷克并赴美核峰会',
      href: 'http://sp.wenweipo.com/2016fj/',
      date: 20160325
    }]
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
