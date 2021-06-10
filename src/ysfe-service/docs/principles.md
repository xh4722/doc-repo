---
id: principles
title: 设计原则
sidebar_label: 设计原则
---

ysfe-service 借鉴了 [create-react-app](https://www.npmjs.com/package/create-react-app) 中的 [react-scripts](https://www.npmjs.com/package/react-scripts) 项目，在沿用其设计的基础上，进行了一定程度的扩展。基本的设计原则如下：

### 通用性

ysfe-service 的主要目的之一就是抽象和统一 webpack 的打包和开发配置，将前端工程和业务开发解耦，使业务开发者可以更专注于业务实现，也能让 infra 开发者更专注于优化前端工程，从而提高整体的开发效率。

正因为 ysfe-service 的独立性，它只会提供最通用的 webpack 配置。如果业务上有特殊需求，可以使用 `ysfe.config.js` 进行扩展和自定义。

### 可扩展性

考虑到不同业务项目会有特定的需求，ysfe-service 提供了一套可以扩展配置的方案，基本方式有三种：
1. 使用 `ysfe.config.js` 自定义 webpack、babel 等配置；
2. 使用 process.env 配置环境变量控制打包；
3. 使用 ysfe-service build --config 自定义打包配置文件；

具体说明可以参考 [向导/自定义配置](/docs/custom)
