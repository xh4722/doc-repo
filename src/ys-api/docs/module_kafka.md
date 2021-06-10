---
id: module_kafka
title: Kafka
---

kafka 模块，封装了快速创建 Consumer 和 Producer 的功能。

### config

```json
{
  "kafka": {
    "clientId": "ys-api-example",
    "brokers": ["localhost:9092"]
  }
}
```

### 使用

```typescript
import { KafkaModule } from '@ys/api/modules'
// index.ts
function bootstrap() {
  // init app
  KafkaModule.bootstrap(app)
}
```

### KafkaModule.bootstrap(app: INestApplication)

使用 KafkaModule 之前需要在 initApp 之后主动调用 KafkaModule.bootstrap(app) 方法，该方法用于收集所有的 client 事件监听器，从而使 ConsumerGroup 修饰器能正常工作

### @Consumer(options)

Consumer 修饰器用于声明订阅指定 topic 的消费者，并将修饰的函数注册为监听函数。

```typescript
@Controller('app')
export class AppController {
  @Consumer({
    topic: 'test-topic',
  })
  @Get('/topic')
  getTopic(message) {
    console.log(message)
  }
}
```

### @OnInMail(options)

OnInMail 修饰器用于声明订阅指定 key 的站内消息消费者，并将修饰的函数注册为监听函数。

```typescript
@Controller('app')
export class AppController {
  @OnInMail({
    key: 'test-in-mail',
  })
  @Get('/topic')
  getTopic(message) {
    console.log(message)
  }
}
```

### producer

producer 为 kafka producer 实例，调用其上的 send 方法可以发送 topic 消息。调用 sendInMail 方法发送站内消息。

```typescript
import { producer, sendInMail } from '@ys/api/modules/kafka'

@Controller('app')
export class AppController {
  // 发送任意 topic 的消息
  @Post('/topic')
  sendTopic() {
    return producer.send({
      topic: 'test-topic',
      messages: [{ value: 'hello world' }],
    })
  }

  // 发送站内消息
  @Post('/in_mail')
  sendTopic() {
    return sendInMail({
      messages: { key: 'test-in-mail', value: 'hello world' },
    })
  }
}
```
