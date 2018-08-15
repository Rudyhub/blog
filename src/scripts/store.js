export default {
  nav: {
    about: ['主页', 'home'],
    works: ['作品', 'works'],
    blog: ['博客', 'blog'],
    album: ['相册', 'album', 'photo', 'picture', '相片', '写真'],
    _help: ['帮助', '-h', '-?', '--help', 'help'],
    _clear: ['清除', 'clear', 'cls']
  },
  res: {count: 0, prev: 0},
  AI: [{
    user: /(大叔|你|Rudy|令狐长老|大神)*((早上|晚上|你|中午|下午)好|早)/i,
    sys: ['嗯，知道了', '嗯嗯']
  }, {
    user: /(如何|怎么?样?)(操作|进[入去])/,
    sys: ['直接输入你要访问的页面名称，或者输入"-h"看一下', '傻了吧，输入"help"看一下']
  }, {
    user: /(如何|怎么?样?|咋个?)(学好|提高|学习|提升|加强)(代码|js|jquery|javascript|鸡儿屎|前端|后台|ajax|数据|SEO)*/i,
    sys: ['其实很简单，就两步：<br>第一步：早上5点左右起床写代码，<br>第二步：晚上12点还在写代码', '这个问题充钱就能解决']
  }, {
    user: /(你|大叔|令狐长老|Rudy)?为(什么|何|啥子?)(这么|如何|这般)*[\s\S]*(厉害|腻害|牛(逼|B|X|13)|帅)/i,
    sys: ['我是独孤九剑第六代传人，后发先制，为快不破，无招胜有招', '天生的']
  }, {
    user: /[说]?我[\s\S]*?(厉害|腻害|牛[逼BX13]|帅)/i,
    sys: ['喝嘤料', '呵呵', '三连否', '拒绝']
  }, {
    user: /(大叔|你|Rudy|令狐长老|大神)?[\s\S]*?(厉害|腻害|牛(逼|B|X|13)|帅)/i,
    sys: ['我知道', '谦虚', '低调']
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
    user: /^(好的?|ok|嗯嗯?|谢谢?|知道了?|明白|晓得|了解)/i,
    sys: ['嗯', '哦', '喔']
  }, {
    user: /(爱上?|喜欢|中意)你/,
    sys: ['那你给我钱吧', '可惜我只缺钱']
  }, {
    user: /爱我[吗吧?？]*/,
    sys: ['呵，可能吗？除非打死我', '呵，可能吗？']
  }],
  respone (val) {
    let len, i, _this, c
    len = this.AI.length
    i = 0
    _this = this

    function count (which) {
      if (_this.res.prev === which) {
        _this.res.count++
      } else {
        _this.res.prev = which
        _this.res.count = 0
      }
      if (_this.res.count > 3) {
        if (_this.res.prev === 2) {
          return '[系统提示 ~]: 错误次数太多，你可能智商不够，输入“-h”或“帮助”了解一下'
        } else {
          return '[令狐长老]: 憨包，啰哩啰嗦，打屎你'
        }
      }
    }

    for (let page in this.nav) {
      if (this.nav[page].includes(val)) {
        return [page.replace('_', '')]
      }
    }
    for (; i < len; i++) {
      if (this.AI[i].user.test(val)) {
        let sysLen = this.AI[i].sys.length
        let index = Math.round(Math.random() * sysLen - 0.5)
        c = count(1)
        if (c) return c
        return '[令狐长老]: ' + this.AI[i].sys[index]
      }
    }
    c = count(2)
    if (c) return c
    return '[系统回复 ~]: Error 404: ' + val + ' is no found.'
  }
}
