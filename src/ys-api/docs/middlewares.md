---
id: middlewares
title: Middlewares
---

## 自定义 middlewares 顺序

express 的 middlewares 注册顺序会影响 middleware 的执行，所以 ys-api 需要提供自定义 middlewares 注册顺序的机制。

权衡 ys-api 的易用性与灵活性，提供如下机制：

1. must middlewares：每个 api 应用都会用到的 middleware，在 ys-api 中默认配置；
2. custom middlewares：当 must middlewares 的注册顺序会影响用户自定的 middleware 的时候，用户需要自定义 middlewres 注册顺序；
3. missing middlewres：当用户自定义 middlewares 的时候可能会遗漏一些 must middlewares，ys-api 会对这些 middlewares 做检查，并放置到注册队列的开头

### Example

```typescript
const app = await initApp(AppModule, {
  prefix: '/api',
  middlewares: ({ traceIdMiddleware, metricsMiddleware }) => {
    const cookieParser = require('cookie-parser')
    // bodyParser should be set after proxyMiddleware to avoid invalid body format
    const bodyParser = require('body-parser')

    return [
      sessionMiddleware(config.session),
      traceIdMiddleware,
      metricsMiddleware,
      cookieParser(),
      bodyParser.json({ limit: '10mb' }),
      bodyParser.urlencoded({
        limit: '10mb',
        extended: true,
      }),
      bodyParser.text(),
      loggerMiddleware,
    ]
  },
})
```

## loggerMiddleware

实现请求和响应的日志数据

注意：需要在 bodyParser 中间件之后使用才能正常输出 request body

### Example：

```typescript
import { loggerMiddleware } from '@ys/api'

// init app
app.use(loggerMiddleware)
```

## traceIdMiddleware

> traceIdMiddleware 在 initApp 方法中自动调用

生成 traceId，用于调用分析

1. 在 async_content 上下文上添加了 traceId 字段
2. 在 response header 里添加了 traceId 字段

## sessionMiddleware

### config

默认为 memory store，可配置 redis store

```json
{
  "session": {
    "redisUrl": "[redis[s]:]//[[user][:password@]][host][:port][/db-number][?db=db-number[&password=bar[&option=value]]]",
    "secret": "session secret",
    "prefix": "redis prefix"
  }
}
```

### Example

```typescript
app.use(sessionMiddleware)
```
