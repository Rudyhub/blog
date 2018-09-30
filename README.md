# rudyhub.github.io
vue-cli构建的SPA个人网站，然而弄完之后，突然不爱SPA形式的网站了，所以，决定把它改成多页面模式。

然而，虽然官方有nuxt.js是用来实现SSR的，也可以实现多页面，但那都不是我想要的，而且还不能在mounted的钩子之前使用window, document...

另外，没对nuxt.js做深入的了解，如果它能把data放进html中并渲染成静态而不仅仅只有一个没有初始数据的html结构的话，还可以考虑以后用。

我现在要的就只是直接webpack生成多页面静态html和完整的目录结构。

移步至我重新构建的项目[mysite](https://github.com/Rudyhub/mysite)，完美实现了需求。
