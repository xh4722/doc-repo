---
id: module_ws
title: Websocket
---

websocket 模块，封装了 websocket 的核心逻辑和自定义 adapter 的使用

### config

```json
{
  "ws": {
    "redis": "redis://127.0.0.1:6379"
  }
}
```

### 使用

```typescript
import { WsModule } from '@ys/api/modules'
// index.ts
function bootstrap() {
  // init app
  WsModule.bootstrap(app)
}

// app.module.ts
@Module({
  imports: [WsModule],
})
export class AppModule {}
```

### WsModule.bootstrap(app: INestApplication)

使用 WsModule 之前需要在 initApp 之后主动调用 WsModule.bootstrap(app) 方法，该方法用于收集所有的 client 事件监听器，从而使 OnWsEvent 修饰器能正常工作

### WsGateway

实现了 websocket 的连接和 client 事件的派发

可以通过依赖注入获取到 websocket 的 server，可以用于 server 端主动向 client 发送消息

```typescript
@Controller()
export class AppController {
  constructor(private readonly wsGateway: WsGateway) {}

  // use this.wsGateway.server to get websocket server
}
```

### @OnWsEvent(eventName: string)

websocket client 的事件监听器，可以在 controller 中监听 client 发来的 websocket 消息

内置事件：

- connect: client 连接事件，可以在监听函数中获取到连接的 socket 对象
- disconnect: client 断开连接事件，可以在监听函数中获取到断开连接的 socket 对象

```typescript
@Controller()
export class AppController {
  @OnWsEvent('connect')
  onWsConnect(socket: Socket) {
    console.log('client connect', socket.id)
  }

  @OnWsEvent('hello')
  onWsHelloEvent(socket: Socket, msg: string) {
    console.log('client emit hello event', socket.id)
  }

  @OnWsEvent('disconnect')
  onWsDisConnect(socket: Socket) {
    console.log('client disconnect', socket.id)
  }
}
```
