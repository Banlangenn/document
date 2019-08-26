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
    title: '学海',
    description: '连云课问题记录',
    base: '/',
    extendMarkdown: md => {
      md.set({ breaks: true })
      md.use(require('markdown-it-plantuml'))
      // md.set({ breaks: true })
      // md.use(require('markdown-it-mermaid').default)
    },
    themeConfig: {
        // sidebarnav 占位符  必须存在
        
    nav: [{"text":"帮助中心","link":"/guide/"},{"text":"测试 ","link":"/sidebar1/"},{"text":"问题","link":"/sidebar2/"}],
    sidebar: {"/guide/":["","timeLine"],"/sidebar1/":["","test"],"/sidebar2/":["","probelSide"]},

        sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: '上次更新', // string | boolean
  }
}