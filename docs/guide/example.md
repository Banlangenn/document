

# Markdown
## Markdown 是什么？
Markdown 是一种轻量级的「标记语言」，创始人为约翰·格鲁伯，用简洁的语法代替排版，目前被越来越多的知识工作者、写作爱好者、程序员或研究员广泛使用。其常用的标记符号不超过十个，相对于更为复杂的 HTML 标记语言来说，Markdown 十分的轻量，学习成本也不需要太多，且一旦熟悉这种语法规则，会有沉浸式编辑的效果。

## Markdown 常用语法
 ### 设置分级标题
 语法示例：
 ```
    # 一级标题
    ## 二级标题
    ### 三级标题
    #### 四级标题
    ##### 五级标题
    ###### 六级标题
 ```

### 加粗文本
语法示例：
```
    **Markdown笔记 我是加粗文本**
```
**Markdown笔记 我是加粗文本**

###下划线
 语法示例：
 ```
  <u>Markdown笔记 我是带下划线的</u>
```
<u>Markdown笔记 我是带下划线的</u>

### 斜体
语法示例：
```
    *Markdown笔记 我是斜体*
```
*Markdown笔记 我是斜体*



### 删除线
 语法示例：
 ```
   ~~Markdown笔记 我是带删除线的~~
 ```
~~Markdown笔记 我是带删除线的~~

### 引用文本
语法示例：
```
    > Markdown笔记  我是引用文本
```
 > Markdown笔记  我是引用文本

 ### 插入图片
语法示例：
```
   ![image](./../images/bg.jpg)
```
![image](./../images/bg.jpg)

 
### 插入链接
语法示例：
```
   * 站内链接 [帮助中心-时序图](/guide/#图表)
   * 站外链接 [Vagrant官网安装](https://www.vagrantup.com/downloads.html)
```
* 站内链接 [帮助中心-时序图](/guide/#时序图)
* 站外链接 [Vagrant官网安装](https://www.vagrantup.com/downloads.html)

### 添加符号列表或者数字列表
语法示例：
```
    PHP 生产环境搭建所需工具
    1. Laravel 是一款 Web 开源框架。
        * 基于 PHP 语言的
    2. Laravel Homestead 提供了 Laravel 本地开发环境, 是一个官方预封装的 Vagrant 箱子，内置了 Nginx，PHP 5.6 , MySQL, Redis, Memcached 等常用软件。
    3. Vagrant 方便实现虚拟化环境，使用 Ruby 开发，基于 VirtualBox，VMware 等虚拟机管理软件的接口，提供了一个可以配置，轻量级的虚拟开发环境。
    3. VirtualBox 是跨平台虚拟机软件。
    PHP 生产环境搭建步骤
    * 官网安装 [Vagrant](https://www.vagrantup.com/downloads.html) 和 [VirtualBox](https://www.virtualbox.org/wiki/Downloads)
    * 安装 Laravel/homestead [laravel-5.6.box](resources/843AA4660DEF7C99504AF7E0A6A9378C.box)，注意一定要安装5.6版本喔，最新版会报错。
    * 安装 HomeStead
```
PHP 生产环境搭建所需工具
1. Laravel 是一款 Web 开源框架。
    * 基于 PHP 语言的
2. Laravel Homestead 提供了 Laravel 本地开发环境, 是一个官方预封装的 Vagrant 箱子，内置了 Nginx，PHP 5.6 , MySQL, Redis, Memcached 等常用软件。
3. Vagrant 方便实现虚拟化环境，使用 Ruby 开发，基于 VirtualBox，VMware 等虚拟机管理软件的接口，提供了一个可以配置，轻量级的虚拟开发环境。
3. VirtualBox 是跨平台虚拟机软件。

PHP 生产环境搭建步骤
* 官网安装 [Vagrant](https://www.vagrantup.com/downloads.html) 和 [VirtualBox](https://www.virtualbox.org/wiki/Downloads)
* 安装 Laravel/homestead [laravel-5.6.box](resources/843AA4660DEF7C99504AF7E0A6A9378C.box)，注意一定要安装5.6版本喔，最新版会报错。
* 安装 HomeStead

### 添加待办事项

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

### 设置目录
设置之后可以自动根据设置的分级标题来自动生成目录。 
语法示例：
```
    [[toc]]
```
[[toc]]








