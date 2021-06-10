---
title: 插件机制
sidebar_label: 插件机制
---

新手引导框架的核心主要是做 guide 流程语法的解释和执行，更复杂的功能可以通过开发自定义插件进行扩展。

## 插件开发

新手引导插件实质就是一个函数，框架的核心会负责传递相关参数调用插件函数。

下面是插件的类型定义：

```tsx
export type PluginProps = {
  core: Guide
  utils: Utils
}

export type PluginType = (props: PluginProps) =&amp;gt; Function | void
```

从上面的定义可以发现，在插件中你可以访问到两个参数：
- [core](/docs/core)：新手引导框架核心；
- [utils](/docs/utils)：工具函数；

## 插件注册

你可以通过将自定义插件作为参数实例化新手引导框架进行插件的注册：

```tsx
import { Guide } from '@ys/guide-sdk'
import Plugins from './plugins'

new Guide({
    ...,
    Plugins
})
```

## RouterPointPlugin

RouterPointPlugin 是 guide-sdk 默认加载的插件，主要是提供页面级别新手引导的功能。通过该插件，你可以在 guide 流程语法中声明 plugins 参数进行注册：

```json
[{
    "id": "1",
    // 启用 router 插件，参数为 "home"
    "plugins": [["router", "home"]],
    "steps": ...
}]
```

上面的配置会在系统跳转到 /home 路径下时执行新手引导流程。
