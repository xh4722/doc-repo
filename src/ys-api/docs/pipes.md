---
id: pipes
title: Pipes
---

## ValidationPipe

用于标准化参数验证错误时的响应

### Example

```typescript
import { ValidationPipe } from '@ys/api'

// init app...

app.useGlobalPipes(new ValidationPipe())
```
