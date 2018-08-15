export default {
  nav: {
    help: ['帮助', '-h', '-?', '--help'],
    home: ['主页', 'home'],
    works: ['作品', 'works'],
    blog: ['博客', 'blog'],
    album: ['相册', 'album', 'photo', 'picture', '相片', '写真']
  },
  res: {count: 0, prev: 0},
  AI: [{
    user: /(如何|怎么[样]?)学好(代码|js|jquery|javascript|鸡儿屎|前端|后台|ajax|数据|SEO)/i,
    sys: ['学代码其实很简单，就两步：<br>第一步：早上5点左右起床写代码，第二步：晚上12点还在写代码']
  }, {
    user: /(你|大叔|令狐长老|Rudy)?为(什么|何)(这么|如何|这般)*[\s\S]*(厉害|腻害|牛(逼|B|X|13)|帅)/i,
    sys: ['我是独孤九剑第六代传人，后发先制，为快不破，无招胜有招', '天生的']
  }, {
    user: /[说]?我[\s\S]*?(厉害|腻害|牛[逼BX13]|帅)/i,
    sys: ['喝嘤料', '呵呵', '三连否', '拒绝']
  }, {
    user: /(大叔|你|Rudy|令狐长老|大神)?[\s\S]*?(厉害|腻害|牛(逼|B|X|13)|帅)/i,
    sys: ['我知道', '谦虚', '低调']
  }, {
    user: /我(太|好|真(.{2})?|怎么这么|为何这么)傻[了吧?]?/i,
    sys: ['关我什么四？', '天生的', '未解之谜']
  }, {
    user: /(大叔|你|Rudy|令狐长老|大神)?[\s\S]*傻(逼|B|13|X)/i,
    sys: ['系统怀疑素质有问题', '你可能是个傻憨龊笨']
  }, {
    user: /你是?(怎么|如何)[做作]到的/i,
    sys: ['给钱我就说', '你猜']
  }, {
    user: /然后呢?/,
    sys: ['没有然后', '然后就没有然后了']
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
          return '[系统提示]: 错误次数太多，你可能智商不够，输入“-h”或“帮助”了解一下'
        } else {
          return '[大叔]: 憨包，啰哩啰嗦，打屎你'
        }
      }
    }

    for (let page in this.nav) {
      if (this.nav[page].includes(val)) {
        return [page]
      }
    }
    for (; i < len; i++) {
      if (this.AI[i].user.test(val)) {
        let sysLen = this.AI[i].sys.length
        let index = Math.round(Math.random() * sysLen - 0.5)
        c = count(1)
        if (c) return c
        return '[大叔]: ' + this.AI[i].sys[index]
      }
    }
    c = count(2)
    if (c) return c
    return '[系统回复]: Error 404: ' + val + ' is no found.'
  }
}
