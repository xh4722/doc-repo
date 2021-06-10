---
id: custom
title: 自定义配置
sidebar_label: 自定义配置
---

ysfe-service 提供了一套可以自定义打包/开发配置的方案，基本方式有三种：
1. 使用 `ysfe.config.js` 自定义 webpack、babel 等配置；
2. 使用 process.env 配置环境变量控制打包；
3. 使用 ysfe-service build --config 自定义打包配置文件；

下面进行具体说明：

### ysfe.config.js

ysfe.config.js 用于提供一部分打包/开发所需的配置，并支持自定义 webpack、babel 配置：

```tsx
// ysfe.config.js
module.exports = {
  // 自定义 ant theme
  antTheme: {},
  // 自定义 iconfont
  iconfontUrl: '//at.alicdn.com/t/font_1364348_h60putdlvb.js',
  // 自定义 webpack 配置
  webpack(config) {
    // 自定义生产环境配置
    if(config.mode === 'production') {
      return config
    }
    // 自定义开发环境配置
    if(config.mode === 'development') {
      return config
    }

    return config
  },
  // 自定义 babel 配置
  babel(config) {
    return config
  }
}
```

### process.env

会影响打包/开发的环境变量说明如下：

- PUBLIC_URL：配置 webpack publicPath，开发环境会从 package.json/homepage 中获取；
- BABEL_ENV：配置 babel 环境，production｜development；
- NODE_ENV：配置 node 环境，production｜development；
- PROJECT_VERSION：项目版本号，默认从 package.json/version 字段中获取；
- STATS_MODE：启用 webpack 分析模式，会在打包过程中分析块信息，用于性能优化分析；

### ysfe-service build

ysfe-service build 支持使用 config 选项自定义配置文件。  
你可以使用 ysfe-service 的 configFactory 导出一份 webpack 配置再做修改。

```tsx
// webpack.config.js
const { configFactory } = require('ysfe-service/dist/public/config/webpack.config.js')
const config = configFactory('production')
module.exports = config
```

```shell
ysfe-service build --config webpack.config.js
```
