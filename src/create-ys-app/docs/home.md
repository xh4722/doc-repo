---
title: 简介
sidebar_label: 简介
---

create-ys-app 是一套前端脚手架工具，用于快速生成 fe、api 等项目，也可用于快速生成 api/module、domain/model、page/ListPage 等代码模块。

### 脚手架
脚手架有如下优点：
1. 从0到1快速搭建项目；
2. 规范化前端项目目录结构、技术栈和编码格式等；

### 如何使用
1. 安装 create-ys-app
```shell
npm install -g @ys/create-ys-app 
```

2. 使用

```
USAGE
  $ create-ys-app [NAME]

ARGUMENTS
  NAME  project name

OPTIONS
  -h, --help               show CLI help
  -t, --template=template  template name you want to use
  -v, --version            show CLI version
```

3. template 说明

template 用于维护各种不同的模版，在使用 create-ys-app 时通过 -t 参数指定模版。
create-ys-app 支持下列模版：
- api：API 项目；
- fe：FE 项目；
- sso-api：支持 sso 的 API 项目；
- sso-fe：支持 sso 的 FE 项目；
- helm-api：api helm 文件模版；
- helm-fe：fe helm 文件模版；
- snippet-model：domain model 代码片段；
- snippet-module：nextjs module 代码片段；
- snippet-page：TodoList page 代码片段；
