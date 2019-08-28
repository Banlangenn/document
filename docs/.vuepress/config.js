module.exports = 
module.exports = {
    plugins: [
      [
        '@vuepress/last-updated',
        {
          transformer: (timestamp, lang) => {
            const moment = require('moment')
            moment.locale(lang)
            return moment().format('YYYY-MM-DD  hh:mm:ss')
          }
        }
      ]
    ],
    title: '学海',
    description: '连云课问题记录',
    base: "/",
    extendMarkdown: md => {
      md.set({ breaks: true })
      md.use(require('markdown-it-plantuml'))
      // md.set({ breaks: true })
      // md.use(require('markdown-it-mermaid').default)
    },
    themeConfig: {
        // sidebarnav 占位符  必须存在
        
    nav: [{"text":"帮助中心","link":"/guide/"},{"text":"连云课测试报告","link":"/lycTest/"},{"text":"测试 ","link":"/sidebar1/"}],
    sidebar: {"/guide/":["","timeLine"],"/lycTest/":["","6.16联云课体验测试报告"],"/sidebar1/":["","test"]},

        sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: '上次更新', // string | boolean
  }
}