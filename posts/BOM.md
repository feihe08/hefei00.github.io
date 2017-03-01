---
title: BOM
date: 2017-02-14 18:29:37
tags:
---
# BOM（浏览器对象模型）
BOM主要处理浏览器窗口和框架。用来处理除了网页文档内容、和浏览器本身的交互。

## Window
BOM的核心是Window对象，它代表浏览器的一个实例。在浏览器中，window即使js访问浏览器窗口的一个接口，又是EVCMAScript规定的Global对象，所有在全局作用域中声明的变量、函数都会变成window的属性和方法。
### 窗口关系及框架
每个框架都有一个window对象
`top`： 最顶层框架
`parent`：当前框架父框架
`self`：window
`frames`： 子框架
### 常用方法
`setTimeout`
`setInterval`
`parseInt`
`parseFloat`
## location
location对象提供了当前加载文档的信息，也又一些导航功能。修改location的属性（除了hash）都会改变当前加载的页面，并在浏览器历史记录中增加一条。
### 属性
`hash`,`host`,`hostname`,`href`,`pathname`,`port`,`protocol`,`search`
### 方法
`assgin`:打开一个新的url，增加历史记录
`replace`: 打开一个url，不会生成历史记录
`reload`:重载当前页面
## navigator
表示浏览器信息
## screen
标明客户端的能力，主要指像素尺寸
## history
历史记录相关，处于安全策略，开发人员只能获取历史记录长度，而不能知道历史记录的具体url
