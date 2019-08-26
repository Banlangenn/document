---
pageClass: home
home: true
navbar: false
# heroImage: /hero.png
actionText: Get Started →
actionLink: /sidebar1/
features:
- title: 操作手册
  details: 如果有不懂的可以先看操作手册
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
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
    .hero .action  
        a.action-button
            background: #f60;
            border: 1px solid #f60;
</style>