const fs = require('fs');
const path = require('path');
const FOLDERPATH = './docs/';
const whiteList = ['optManual', '6.16联云课体验测试报告', '联云课使用手册', '联云课排版格式调整'] // 'guide'
const configPath = './../docs/.vuepress/defaultConf.js'
// const md5 = require('md5');

// config
let sidebar = {} 
let nav = []

//调用文件遍历方法

function fileDisplay(parentName, filePath, deep) {
    //根据文件路径读取文件，返回文件列表
    
    // 判断文件夹下边 是否有根文件
    if (!fs.existsSync(path.join(filePath, 'README.md'))) return 
    deep = deep - 1
    sidebar[parentName] = []
    let parentMap = sidebar[parentName] 
    let files = fs.readdirSync(filePath)
    // parentMap(
    //     {
    //         title: pluginTitle,
    //         collapsable: false,
    //         children: [
    //           ['', pluginIntro],
    //           'using-a-plugin',
    //           'writing-a-plugin',
    //           'life-cycle',
    //           'option-api',
    //           'context-api'
    //         ]
    //       },
    //       {
    //         title: officialPluginTitle,
    //         collapsable: false,
    //         children: officalPlugins,
    //       }
    // )
    // 遍历读取到的文件列表
    files.forEach(function(filename){
        //获取当前文件的绝对路径
        var filedir = path.join(filePath, filename)
        //根据文件路径获取文件信息，返回一个fs.Stats对象
        let stats = fs.statSync(filedir)
        var isFile = stats.isFile();//是文件
        var isDir = stats.isDirectory();//是文件夹
        if(isFile){
            // console.log(filename)
            filename = filename.replace('.md', ''); //替换文件后缀为空
            if (filename === 'README' && parentName !== 'docs') {
                filename = ''
                const content = fs.readFileSync(filedir, 'utf-8');
                const result = content.match(/#+[^\n|^\r]+/)
                let title  = result ? result[0].replace(/#\s+/, '') : '没有标题'
                nav.push({
                    text: title, link: `${parentName}`
                })
                parentMap.unshift(filename)
            } else {
                // 这是文件名称---- 这里 push  进去的是文件名称
                if (!whiteList.includes(filename)) {
                    parentMap.push(filename)
                }
                
            }
            
        }
　　　　　　    // 读取文件内容
        if(isDir && !whiteList.includes(filename) && deep){
            fileDisplay(`/${filename}/`, filedir, deep) //递归，如果是文件夹，就继续遍历该文件夹下面的文件
        }
    })
}

fileDisplay('docs', FOLDERPATH, 2)

// docs 不要
if (sidebar.docs) {
    delete  sidebar.docs
}

let config = fs.readFileSync(path.join(__dirname, configPath), 'utf-8');
console.log('sidebar')
console.log(sidebar)
console.log('nav')
console.log(nav)
config  = config.replace(/\/\*\*\s*sidebarnav\s*\*\//,`
    nav: ${JSON.stringify(nav)},
    sidebar: ${JSON.stringify(sidebar)},
`)


// 写入文件
// fs.writeFileSync(path.resolve(__dirname, './filenames.js'), `module.exports = ${JSON.stringify(config)}`, () => {
//     console.log('文件名获取完成.');
// })
// function 转一下没有了

fs.writeFileSync(path.resolve(__dirname, './../docs/.vuepress/config.js'), `module.exports = ${config}`, () => {
    console.log('文件名获取完成.');
})