---
layout: post
title: 从一到零到一：网站的重构
subtitle: 花了几天时间好好打磨
# cover-img: /assets/img/flake-it-till-you-make-it/path.jpg
# thumbnail-img: /assets/img/flake-it-till-you-make-it/thumb.png
# share-img: /assets/img/flake-it-till-you-make-it/path.jpg
gh-repo: SKJrpg/skjrpg.github.io
gh-badge: [star, fork, follow]
tags: []
author: SKJ
---

**从一到零，需要有决心和耐心。巧了，我这个人比较爱折腾，之前看到 AI 写的屎山代码，就决定从头再来。**

## 所以，本文将介绍从头开始的搭建过程

**首先，还是以 [Beautiful Jekyll](https://beautifuljekyll.com/) 为模板。**

第一个功能是**暗色模式**，之前 AI 一直没做好，索性直接~~照搬~~模仿原 demo 的源码，颜色问题很快就解决了。然后是昼夜切换按钮，经过了大量探索，锚定了按钮所在位置，十分感谢 [chokcoco 的文章](https://segmentfault.com/a/1190000043923189)，能够手把手教会 AI 完成按钮的制作。

其次，浏览到[Beautiful Jekyll终极响应式设计指南：如何在所有设备上完美展示你的网站](https://blog.csdn.net/gitblog_00862/article/details/151791361)，对各种尺寸的布局进行介绍，进一步了解到该主题在不同尺寸/设备的智能响应。

一些功能来源于[5分钟掌握Beautiful Jekyll主题的JavaScript增强功能终极指南](https://blog.csdn.net/gitblog_01134/article/details/151743976)，里面的一些示例可供我直接套用，包括**阅读进度指示器** `reading-progress.js` 和**回到顶部按钮** `back-to-top.js`。

接下来是对主页的副标题进行修改，为了实现动态的、变化的文字效果，依旧选择了 [**`一言api`**](https://hitokoto.cn/)，[官网](https://hitokoto.cn/)有调用示例，交给 AI 很快就可以完成。

最后，对一些细节进行修改，包括社交链接，字体（花体字的应用），[源代码仓库](https://github.com/SKJrpg/skjrpg.github.io)链接的添加。

**目前为止一切正常，差不多就样吧！😄**

#### 此外，发现 GitHub Stats 无法正常运作，参考了 [chenxuan520 的文章](https://juejin.cn/post/7582422818311569459)，进行了自托管，部署在 Cloudfare 上，这样就可以正常显示了。