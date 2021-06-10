---
id: global_func
title: 全局方法
---

## initApp

initApp 封装了统一的 nest app 的初始化逻辑，包括 swagger 文档的生成、traceId 的注入，api counter metric 的支持

函数签名:

```typescript
function initApp(module: any, options?: Options): Promise<INestApplication>
```

module 为 nestjs 的根模块，即 AppModule

Options 类型如下：

```typescript
interface Options {
  prefix: string
  middlewares?: (middlewares: {
    traceIdMiddleware: any
    metricsMiddleware: any
}
```

prefix 为 api 的前缀，middlewares 字段可实现自定义的 middleware，详细使用可见[自定义 middlewares 顺序](/docs/middlewares#自定义-middlewares-顺序)

函数返回一个 nestjs 的 app 实例

### Example

```typescript
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await initApp(AppModule)
  await app.listen(3000)
}

bootstrap()
```
