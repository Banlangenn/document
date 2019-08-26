

#  问题

### README.md

> title, description 和 base 会从 .vuepress/config.js 中对应的的字段复制过来，而 pages 是一个包含了每个页面元数据对象的数据，包括它的路径、页面标题（明确地通过 YAML front matter 指定，或者通过该页面的第一个标题取到），以及所有源文件中的 YAML front matter 的数据。下面的这个对象是你正在看的这个页面的 $page 的值：

```js
{
  "lastUpdated": 1524847549000,
  "path": "/custom-themes.html",
  "title": "自定义主题",
  "headers": [/* ... */],
  "frontmatter": {}
}
```

