新手引导框架工具库，提供了通用的工具函数，可以在插件开发时调用。

## retry

retry 函数用于重试函数调用：

```tsx
({
  interval = 300,
  handler,
  maxRetryTimes = 1,
}: {
  interval?: number // 每次重试的间隔时间；
  maxRetryTimes?: number // 最大重试次数
  handler: (props?: { retryTimes: number }) => boolean // 重试调用的逻辑，通过返回布尔值可以控制重试是否继续（true 表示继续重试）
}) => void
```
