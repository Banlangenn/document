
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
    │   │   ├── README.md _(*根文件**)_
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

## 时间线

###  后续开发
 - **Props**:

   - `time` - string
   - `text` - string, 可选值： `"tip"|"warn"|"error"`，默认值是： `"tip"`



## 提示

### 标记
```
    Badge <Badge text="beta" type="warn"/> <Badge text="0.10.1+"/> <Badge text="默认主题"/>
```
 Badge <Badge text="beta" type="warn"/> <Badge text="0.10.1+"/> <Badge text="默认主题"/>
 - **Props**:

   - `text` - string
   - `type` - string, 可选值： `"tip"|"warn"|"error"`，默认值是： `"tip"`
   - `vertical` - string, 可选值： `"top"|"middle"`，默认值是： `"top"`


### 自定义容器提示
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
```
    :tada: :100:
```
:tada: :100:

## 目录
```
    [[toc]]
```
[[toc]]

## GitHub 风格的表格
```
    | Tables        | Are           | Cool  |
    | ------------- |:-------------:| -----:|
    | col 3 is      | right-aligned | $1600 |
    | col 2 is      | centered      |   $12 |
    | zebra stripes | are neat      |    $1 |
```
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

## 任务列表
```
    - [ ] Mercury
    - [x] Venus
    - [x] Earth (Orbit/Moon)
    - [x] Mars
    - [ ] Jupiter
    - [ ] Saturn
    - [ ] Uranus
    - [ ] Neptune
    - [ ] Comet Haley
```
- [ ] Mercury
- [x] Venus
- [x] Earth (Orbit/Moon)
- [x] Mars
- [ ] Jupiter
- [ ] Saturn
- [ ] Uranus
- [ ] Neptune
- [ ] Comet Haley


## 图表


### 流程图1
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


### 流程图4

```
   <mermaid>
        graph TD
        A[模块A] -->|A1| B(模块B)
        B --> C{判断条件C}
        C -->|条件C1| D[模块D]
        C -->|条件C2| E[模块E]
        C -->|条件C3| F[模块F]
        F -->|条件C5| A[模块F]
    </mermaid>
```
<mermaid>
    graph TD
    A[模块A] -->|A1| B(模块B)
    B --> C{判断条件C}
    C -->|条件C1| D[模块D]
    C -->|条件C2| E[模块E]
    C -->|条件C3| F[模块F]
    F -->|条件C5| A[模块F]
</mermaid>

### 甘特图

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



