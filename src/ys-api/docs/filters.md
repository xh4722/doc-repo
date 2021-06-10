---
id: filters
title: Filters
---

## AllExceptionFilter

AllExceptionFilter 是全局异常过滤器，用于捕获并格式化所有的异常。

```typescript
import { AllExceptionFilter } from '@ys/api'

app.useGlobalFilters(new ALLExceptionFilter())
```

## GrpcExceptionFilter

GrpcException 用于将 GrpcError 映射为 YSError。

```typescript
// 第一步：使用 registerYSErrorMap 将业务相关的 YSErrorMap 注册到 @ys/api 中
import { registerYSErrorMap } from '@ys/api'

registerYSErrorMap(new Map([[10001, 'TEST_YS_ERROR']]))

// 第二步：使用 createGrpcExceptionFilter 注册 GrpcExceptionFilter
import { createGrpcExceptionFilter } from '@ys/api'

@UseFilters(
  createGrpcExceptionFilter(
    {
      2001: 10001, // 2001 为 GrpcErrorCode；10001 为 YSErrorCode
    },
    {
      showDetail: true, // 设置 showDetail 会在 error 信息中附上 grpcError.details
      formatDetail: msg => `format://${msg}`, // 可以使用 formatDetail 对 grpcError.details 做二次处理
    }
  )
)
@Controller('app')
export class AppController {}
```
