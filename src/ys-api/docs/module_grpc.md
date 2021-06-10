---
id: module_grpc
title: Grpc
---

:::important

该模块依赖 grpc @grpc/proto-loader 包

:::

grpc 模块默认读取项目 config（默认 package.json 同级，可通过 process.env.configPath 配置） 中的 grpc 配置

## config:

```json
{
  // ... other config
  "grpc": {
    "services": {
      "helloworld": {
        "host": "10.0.1.58",
        "port": 11211,
        "package": "helloworld",
        "protoPath": "helloworld/helloworld.proto"
      }
    }
  }
}
```

在 GrpcModule 中封装的 grpc 连接接的逻辑，调用者可通过注入 grpcService，调用 grpcService.getService()获取到 grpc service

## GrpcModule.forRoot

params:

- protoBasePath：string, proto 文件夹绝对路径

## new GrpcService().getService

params:

- clientName: string, grpc client 名称
- serviceName: string, grpc service 名称

## Example：

```typescript
// app.module.ts
@Global()
@Module({
  imports: [
    GrpcModule.forRoot({
      protoBasePath: resolve(__dirname, './protos'),
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}

// app.controller.ts
@Controller('app')
export class AppController {
  constructor(private readonly grpcService: GrpcService) {}

  get greeterService() {
    return this.grpcService.getService('helloworld', 'Greeter')
  }
}
```
