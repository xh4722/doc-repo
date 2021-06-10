---
title: 业务API
sidebar_label: 业务API
---

为了保证通用性，新手引导流程核心是对业务无感知的。但是新手引导流程又往往涉及很多业务逻辑，为了保证流程定制的灵活性，设计了 services 机制：
- 注册：业务方在实例化新手引导框架时注册 services；
- 调用：业务方通过声明 guide 调用 services；

## 注册services

1. 在业务系统中自定义 services：

```tsx
// services.ts
import { history } from '@/utils'

export default {
  'history.push': args =&amp;amp;amp;gt; Reflect.apply(history.push, history, args),
  'history.replace': args =&amp;amp;amp;gt; Reflect.apply(history.replace, history, args),
}
```

2. 将业务方 services 注册到新手引导框架中：

```tsx
import { Guide } from '@ys/guide-sdk'
import services from './services'

new Guide({
    ...,
    services
})
```

## 调用services
在 guide 的流程中声明 service 调用：

```json
// guides 流程定义
[{
    "id": "1",
    "steps": [
        ...,
        // 调用 history.push service，参入参数 "home"
        ["history.push", "home"]
    ]
}]
```
