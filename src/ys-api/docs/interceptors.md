---
id: interceptors
title: Interceptors
---

## FormatResponseInterceptor

用于标准化请求响应

### Example

```typescript
import { FormatResponseInterceptor } from '@ys/api'

// init app...

app.useGlobalInterceptors(new FormatResponseInterceptor())
```
