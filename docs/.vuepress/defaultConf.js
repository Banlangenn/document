module.exports = {
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
        /** sidebarnav */
        sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: '上次更新', // string | boolean
  }
}