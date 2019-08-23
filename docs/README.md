---
pageClass: home
home: true
# heroImage: /hero.png
actionText: Get Started →
actionLink: /sidebar1/
features:
- title: 操作手册
  details: 如果有不懂的可以先看操作手册
# footer: MIT Licensed | Copyright © 2018-present Evan You
---

> 项目基于VuePress搭建  [文档地址](https://vuepress.vuejs.org/zh/)
    >> [VuePress on GitHub](https://github.com/vuejs/vuepress)


<style lang="stylus">
.no-sidebar.home 
    background-image: url('./images/bg.jpg');
    background-size: 100% 100%;
    min-height: calc(100vh - 58px);
    max-width: inherit;
    display: flow-root;
    .features
        border-top: 1px solid #f60;
        p
            color: #7bbf4a;
        h2 
            color: #41fb07;
    .navbar 
        display: none;
    .hero .action  
        a.action-button
            background: #f60;
            border: 1px solid #f60;
</style>