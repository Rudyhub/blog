export default {
  nav: {
    help: ['帮助', '-h', '-?', '--help'],
    home: ['主页', 'home'],
    works: ['作品', 'works'],
    blog: ['博客', 'blog'],
    album: ['相册', 'album', 'photo', 'picture', '相片', '写真']
  },
  AI: [{
    user: /(如何|怎么[样]?)学好(代码|js|jquery|javascript|鸡儿屎|前端|后台|ajax|数据|SEO)/ig,
    sys: '学代码其实很简单，就两步：<br>第一步：早上5点左右起床写代码，第二步：晚上12点还在写代码'
  }, {
    user: /(你|大叔|令狐长老|Rudy)为(什么|何)这么厉害/ig,
    sys: '独孤九剑不是盖的，后发先制，为快不破，无招胜有招'
  }, {
    user: /好?厉害/ig,
    sys: '我知道'
  }, {
    user: /傻(逼|B|13|X)/ig,
    sys: '系统怀疑你说脏话，所以判你宫刑'
  }]
}
