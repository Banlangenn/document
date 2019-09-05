
# 帮助中心

## 目录结构


遵循 **“约定优于配置”** 的原则，目录结构如下：

```
    .
    ├── docs
    │   ├── .vuepress _(**配置文件**)_images
    │   ├── images _(**图片文件夹**)_
    │   │
    │   │
    │   ├── 文件夹1 _(**会生成一个单独sidebar 和 nav**)_
    │   │   ├── README.md _(**根文件**)_
    │   │   ├── 文件1 _(**会生成一级标题**)_
    │   │   └── 文件2 _(**会生成一级标题**)_
    |   │   
    │   ├── 文件夹2 _(**会生成一个单独sidebar 和 nav**)_
    │   │   ├── README.md _(*根文件**)_
    │   │   ├── 文件1 _(**会生成一级标题**)_
    │   │   ├── 文件2 _(**会生成一级标题**)_
    │   │   └── 文件3 _(**会生成一级标题**)_
    |   │   
    │   ├── 文件夹3 ...
    │   │ 
    │   ├── README.md _(**首页**)_
    │   └── guide
    │       └── README.md _(**帮助文档**)_
    │   
    │ 
    └── package.json

    会自动生成：文件夹1 文件夹2 文件夹3 侧边栏 和 右上角导航（text为README第一个标题）
```
::: danger
文件夹下 根文件(README.md)是一定要有的
:::

   - 文件夹都会生成一个侧边栏
   - 文件夹下文件都会生成侧边栏一级目录

    1. 侧边栏一级级目录text：会自动选择文件内的#标题
    2. 侧边栏二级目录text： 会自动选择文件内的##标题
    3. 侧边栏三级目录text： 会自动选择文件内的###标题 
<!-- 
- `docs/.vuepress`: 用于存放全局的配置、组件、静态资源等。
- `docs/.vuepress/components`: 该目录中的 Vue 组件将会被自动注册为全局组件。
- `docs/.vuepress/theme`: 用于存放本地主题。
- `docs/.vuepress/styles`: 用于存放样式相关的文件。
- `docs/.vuepress/styles/index.styl`: 将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级。
- `docs/.vuepress/styles/palette.styl`: 用于重写默认颜色常量，或者设置新的 stylus 颜色常量。
- `docs/.vuepress/public`: 静态资源目录。
- `docs/.vuepress/templates`: 存储 HTML 模板文件。
- `docs/.vuepress/templates/dev.html`: 用于开发环境的 HTML 模板文件。
- `docs/.vuepress/templates/ssr.html`: 构建时基于 Vue SSR 的 HTML 模板文件。
- `docs/.vuepress/config.js`: 配置文件的入口文件，也可以是 `YML` 或 `toml`。
- `docs/.vuepress/enhanceApp.js`: 客户端应用的增强。 -->




::: warning
下列特性是标准 markdown 没有的语法， 或者与标准语法不同的地方，标准语法不在列出
:::



## 提示

### 标记
 - **Props**:

   - `text` - string
   - `type` - string, 可选值： `"tip"|"warn"|"error"`，默认值是： `"tip"`
   - `vertical` - string, 可选值： `"top"|"middle"`，默认值是： `"top"`
 语法示例：
```
    Badge <Badge text="beta" type="warn"/> <Badge text="0.10.1+"/> <Badge text="默认主题"/>
```
 Badge <Badge text="beta" type="warn"/> <Badge text="0.10.1+"/> <Badge text="默认主题"/>

 ```
    连云课 <Badge text="1.0.2"/> 
```
 连云课 <Badge text="1.0.2"/> 


### 自定义容器提示
语法示例：
```
    ::: tip
    This is a tip
    :::

    ::: warning
    This is a warning
    :::

    ::: danger
    This is a dangerous warning
    :::
```
::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

## Emoji
语法示例：
```
    :tada: :100:
```
:tada: :100:



## 图表


### 流程图1
语法示例：
```
    @startuml
    node in as "input"
    node p as "Pre-processing"
    node fm as "Feature Mining"
    node fs as "Feature Selection"
    node fr as "Feature Reduction"
    node m as "Modelling"
    node a as "Accepted Results?"
    node pp as "Post-processing"
    node o as "Output"

    in -> p
    p ..> fm
    fm ..> fs
    fs ..> fr
    fr ..> m
    m ..> a
    a ..> fm : no
    a -> pp : yes
    pp -> o 
    @enduml
```
@startuml
node in as "input"
node p as "Pre-processing"
node fm as "Feature Mining"
node fs as "Feature Selection"
node fr as "Feature Reduction"
node m as "Modelling"
node a as "Accepted Results?"
node pp as "Post-processing"
node o as "Output"

in -> p
p ..> fm
fm ..> fs
fs ..> fr
fr ..> m
m ..> a
a ..> fm : no
a -> pp : yes
pp -> o 
@enduml


### 流程图2
语法示例：
```
    @startuml 
    |Required Steps|
    :"Start Assignment";
    |#AntiqueWhite|Documentation|
    :Create Git Repo/Overleaf;
    :Copy Down Questions;
    |#LightBlue|Git|
    :Initial Barebones Commit;
    |Required Steps|
    :"Answer Questions";
    :"Submit Assignment";
    |Git|
    :"Update Local Repo";
    :"Update CENG4B Notes;
    stop
    @enduml 
```
@startuml 
|Required Steps|
:"Start Assignment";
|#AntiqueWhite|Documentation|
:Create Git Repo/Overleaf;
:Copy Down Questions;
|#LightBlue|Git|
:Initial Barebones Commit;
|Required Steps|
:"Answer Questions";
:"Submit Assignment";
|Git|
:"Update Local Repo";
:"Update CENG4B Notes;
stop
@enduml


### 流程图3
语法示例：
```
    @startuml 
    (*) --> [File System ] "input.json " 
    note left
    1. Read Entire File into memory
    end note
    -->[Available Memory]"JSON data loaded in memory"
    note left
    2. Process file
    in memory.
    end note
    note right
    When loading a file into
    memory to be parsed as
    JSON or CSV, we’re limited
    by the max string size
    in Node.js: around 536 MB
    as of Node v8 
    end note
    --> [File System] "output.json"
    note left
    3. Write transform data back into system
    end note
    --> (*)
@enduml
```
@startuml 
(*) --> [File System ] "input.json " 
note left
1. Read Entire File into memory
end note
-->[Available Memory]"JSON data loaded in memory"
note left
2. Process file
in memory.
end note
note right
When loading a file into
memory to be parsed as
JSON or CSV, we’re limited
by the max string size
in Node.js: around 536 MB
as of Node v8 
end note
--> [File System] "output.json"
note left
3. Write transform data back into system
end note
--> (*)
@enduml


### 前端代理4


   <mermaid>
        graph TD
         A[浏览器接口] --> |自定义url前缀| B(静态文件服务器)
       B--> Q{nginx}
    Q--> C[分析url前缀指向]
    C --> Z(/monitor/api..)
    Z -->|还原url| F[监控服务1]
    C --> X(/convert/api.. )
    X -->|还原url| G[转换服务2]
    C --> M(/repair/api..)
    M -->|还原url为/api| H[接口修复服务3]
    C --> N(/manage/api..)
    N -->|还原url| J[node管理台服务4]

 </mermaid>
     
```
server {
    location /monitor/ {
            proxy_pass http://127.0.0.1:7000/;
    }
    location /convert/ {
            proxy_pass http://127.0.0.1:7001/;
    }
    location /repair/ {
            proxy_pass http://127.0.0.1:7002/;
    }
    location /manage/ {
            proxy_pass http://127.0.0.1:7003/;
    }
}
```

### 时序图
语法示例：
```
   <mermaid>
       sequenceDiagram
        A->>B: 是否已收到消息？
        B-->>A: 已收到消息
    </mermaid>
```
<mermaid>
   sequenceDiagram
    A->>B: 是否已收到消息？
    B-->>A: 已收到消息
</mermaid>


### 甘特图
语法示例：
```
    <mermaid>
        gantt
        dateFormat  YYYY-MM-DD
        section 项目A
        任务1           :a1, 2018-06-06, 30d
        任务2     :after a1  , 20d
        section 项目B
        任务3      :2018-06-12  , 12d
        任务4      : 24d
    </mermaid>
```
<mermaid>
    gantt
    dateFormat  YYYY-MM-DD
    section 项目A
    任务1           :a1, 2018-06-06, 30d
    任务2     :after a1  , 20d
    section 项目B
    任务3      :2018-06-12  , 12d
    任务4      : 24d
</mermaid>



