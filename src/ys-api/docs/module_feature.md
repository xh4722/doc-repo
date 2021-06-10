---
id: module_feature
title: Feature
---

Etcd Feature 配置模块，用于从 etcd 获取 feature 开关/白名单。

### config

需要在 api 项目的 config 中配置 etcd 字段

- hosts 用于配置 etcd 服务器
- featureConfig 用于配置 etcd 配置文件路径

```json
{
  "etcd": {
    "hosts": ["10.0.1.109:2379"],
    "featureConfig": "/fe_feature/platform.yaml"
  }
}
```

### EtcdFeatureGuard

用于 api 接口级别的 etcdFeature 鉴权。因为 EtcdFeatureGuard 需要检查当前用户的 features 权限，请保证在调用 Guard 之前，request session 上存在 user.ysid。

1. 配置全局的 EtcdFeatureGuard

```typescript
import { EtcdFeatureGuard } from '@ya/api/modules/etcdFeature'

@Module({
  providers: [
    {
      provide: APP_GUARD,
      useClass: EtcdFeatureGuard,
    },
  ],
})
class AppModule {}
```

2. 使用 EtcdFeatures 修饰 controller 或者 method，声明需要检查的 features。（修饰在 method 上的参数会覆盖 class 上的参数）

```typescript
import { EtcdFeatures } from '@ys/api/modules/etcdFeature'

@EtcdFeatures('cloud_app')
@Controller()
class AppController {
  @EtcdFeatures('cloud_app', 'app')
  @Get('test')
  test() {
    return 'success'
  }
}
```

### EtcdFeatureService

使用 EtcdFeatureService 可以获取指定用户的 etcd features
