module.exports = 

module.exports = {
    plugins: [
      [
        '@vuepress/last-updated',
        {
          transformer: (timestamp, lang) => {
            return require('./../../utils/dateFormatter').format(timestamp, 'YYYY-MM-DD  hh:mm:ss')
          }
        }
      ]
    ],
    base: '/help/', // 前置目录
    head: [
      ['link', { rel: 'icon', href: `/logo.png` }]
    ],
    logo: './../images/logo.png',
    title: '联云课',
    description: '联云课使用手册',
    extendMarkdown: md => {
      md.set({ breaks: true })
      md.use(require('markdown-it-plantuml'))
      // md.set({ breaks: true })
      // md.use(require('markdown-it-mermaid').default)
    },
    themeConfig: {
        // sidebarnav 占位符  必须存在
        
    nav: [{"text":"帮助中心","link":"/guide/"},{"text":"联云课使用手册","link":"/lycGuide/"}],
    sidebar: {"/guide/":["","example","timeLine"],"/lycGuide/":["","PPT篇","同步篇","基本篇","声音广播篇","疑难杂症篇","音答篇"]},

        sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: '上次更新', // string | boolean
            // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'https://github.com/Banlangenn/document',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: '查看源码',

        // 以下为可选的编辑链接选项

        // 假如你的文档仓库和项目本身不在一个仓库：
        // docsRepo: 'vuejs/vuepress',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '编辑此页面！'
  }
}