---
id: module_health
title: Health
---

:::important

该模块依赖 @nestjs/terminus, @godaddy/terminus

:::

实现健康监测，实现了/health 路由

### Example：

```typescript
@Module({
  imports: [HealthModule],
})
export class AppModule {}
```

## sso

单点登录模块，实现了登录、登出等接口

### Example

```typescript
@Module({
  imports: [
    SSOModule.forRoot({
      issuer: 'http://hydra.10.0.1.118.xip.io', // hydra服务的地址
      id: 'platform-client-dev', // oauth client id
      secret: 'secret', // secret
      callbackRedirectURL: 'http://localhost:8081/api/sso/callback', // api服务地址 + prefix + /sso/callback
      loginRedirectURL: 'http://localhost:8081', // 登录之后的重定向地址
      logoutRedirectURL: 'http://localhost:8081', // 退出登录之后的重定向地址
    }),
  ],
})
export class AppModule {}
```
