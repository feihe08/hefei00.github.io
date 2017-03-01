layout: The-Elements-of-Programming
title: The Elements of Programming
date: 2017-02-14 18:59:44
tags: SICP
---

## 1.2-The Elements of Programming

编程语言不只是用来指导计算机执行任务的工具，它也是我们用来管理关于过程的想法的框架。程序被用来在编程社区中交流想法。因此，程序首先是写来被人阅读的，只是碰巧能被机器执行而已。

当我们描述一个语言时，我们应该关注于语言提供的由简单概念组合出复杂场景的工具，每一门强大的语言都有三个机制完成这些：
* 原始表达式和语句，它们是语言提供的最简单的'构造快'
* 组合手段，它们通过简单元素可以构建复杂元素
* 抽象手段，通过它们，可以对复杂元素进行管理

在编程中，我们主要和两种元素打交道：数据和函数。数据是我们想要管理的东西，函数涌来描述管理数据的规则。因此，任何强大的语言都应该能够描述原始数据和原始函数，并且可以对其进行组合和抽象。

### 1.2.2-Call Expression
最重要的表达式就是调用表达式，它调用包含几个参数的函数。

### 1.2.4-Names and Environment
在编程语言中，一个重要的思想就是使用name去代表一些对象。如果一个值被赋给一个name，我们把这一行为叫做将name和value绑定起来。

## 1.5-Control
## 1.5.1-Statements
每一条声明都描述了解释器解释器环境的一些变化，执行声明就会应用这些变化。表达式也可以作为声明执行，只要它们被求值。只不过它们的值被丢弃了。
### 1.5.3-Defining Functions II: Local Assignment
函数里的变量都只在函数内部有效
## 1.6-Higher-Order Functions
高阶函数是指可以操作其他函数的函数
### 1.6.1-Functions as Arguments
函数作为参数
### 1.6.2-Functions as General Methods
函数作为一般方法，表达的是普遍的计算概念，和它们调用的特殊参数无关
### 1.6.3-Defining Functions 3: Nested Definitions
在函数里定义的函数。该函数的执行环境为外层函数，并且可以访问外层函数的变量。
### 1.6.4-Functions as Returned Values
函数作为返回值时，会保留定义它的执行环境。
### 1.6.5-Lambda Expressions
Lambda表达式不必显示声明函数名称，具有单个返回表达式，不能出现赋值和控制语句。
### 1.6.8-Function Decorators
