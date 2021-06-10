---
id: utils
title: Utils
---

## asyncContext

基于 node async_hooks 模块实现，可用于获取单次请求的上下文信息，http 调用链内部可使用 nest 的 request 传递上下文信息，但是有些调用是获取不到 http request 的，这时候就可以使用 asyncContext，

## logger

[winston](https://github.com/winstonjs/winston) 的实例，具体 api 见 winston 文档

### Example

```typescript
import { logger } from '@ys/api'

logger.info('hello world')
```

## config

用于读取 api 的配置，自动选择开发环境、生成环境下的配置

### Example

```typescript
import { config } from '@ys/api'

console.log(config.app.port)
```

可在 config 文件中通过"{{ENV.abc}}"来替代环境变量中的 abc

## createSwaggerResponse

1. 可以复用 proto 中 Response 的类生成 JS class，并可以实例化为 example；
2. 保证 JS class 与 proto 的类型一致；
3. class 中属性的字段默认为 'string'，你可以通过传入第二个参数自定义类型；
4. 支持使用 omit、pick、merge、map 自定义 class 和 example 中的字段；
5. 支持传入 name 自定义 Response 类名；

### Example

```typescript
import { createSwaggerResponse } from '@ys/api'
import { payment } from 'protos'

/* create swagger response class */
const BillResponse = createSwaggerResponse(
  payment.Billing,
  {
    // custom ResponseDTO name
    name: 'BillingResponse',
    // omit specific keys
    omit: ['status'],
    // pick specific keys
    pick: ['create_time'],
    // define custom type
    map: {
      freeze_amount: 0,
      create_time: {
        seconds: 0,
        nanos: 0,
      },
    },
    // map key to newKey
    mapKey: {
      create_time: 'mapped_create_time'
    },
    // append props
    merge: {
      newKey_01: 'new_value_01',
      newKey_02: 'new_value_02'
    }
  })

/* create instance as example */
const billExample = new BillResponse()
// transform instance
const omittedExample = billExample.transform({
  // omit specific keys
  omit: ['status'],
  // pick specific keys
  pick: ['create_time'],
  // map key to newKey
  map: {
    create_time: 'mapped_create_time'
  },
  // append props
  merge: {
    newKey_01: 'new_value_01',
    newKey_02: 'new_value_02'
  }
}))
```

## store

用于存储临时数据，开发环境下采用内存，生产环境下使用 redis

### Example

config:

```json
{
  // ...other config
  "store": {
    "redis": {
      "url": "redis://127.0.0.1:6379",
      "options": {} // node_redis options，detail info: https://github.com/NodeRedis/node_redis#options-object-properties
    }
  }
}
```

```typescript
import { store } from '@ys/api'
;async () => {
  await store.set('test', 'abc')
  await store.get('test') // 'abc'
  await store.del('test') // null
}
```

## etcd

:::important

依赖 [etcd3](https://mixer.github.io/etcd3/classes/index_.etcd3.html)

:::

可以引入 @ys/api/utils/Etcd 实现 etcd 相关的操作：

- client: etcd client 提供了完善的 api
- getAll: 获取所有的 etcd 配置
- get: 根据 key 获取 etcd 配置信息
- set: 设置指定 key 的配置信息
- deleteBykey: 删除指定 key 的配置信息

### Example

```tsx
import { Etcd } from '@ys/api/utils'

@Controller('etcd')
export class EtcdController {
  etcd = new Etcd()

  @Get()
  getEtcdConfig() {
    return this.etcd.get('test-key')
  }
}
```

### config

请在 config 中配置 etcd.hosts 来指定 etcd 服务器

```json
{
  "etcd": {
    "hosts": ["10.0.1.109:2379"]
  }
}
```
