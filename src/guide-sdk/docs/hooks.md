---
title: hooks
sidebar_label: hooks
---

`guide-sdk` 使用 `webpack` 的 [tapable](https://github.com/webpack/tapable) 实现了 hook，以便在新手引导的生命周期中注入插件。

目前支持的 hook 如下：
- **guide**：引导流程生命周期
    - onStart：新手引导开始；
    - onDone：新手引导完成；
    - onClose：新手引导跳过；
- **steps**：引导运行时
    - onStart：driver 流程开始；
    - **step**：driver 流程中具体步骤
        - onHighlightStarted：开始高亮；
        - onHighlighted：高亮；
        - onDeselected：取消高亮；
        - onNext：下一步；
        - onReset：重置；
- **lastStep**：最后一步
    - onNext：下一步；

## hook 使用场景

### 在业务代码中使用 hook

先执行Guide的构造函数，后使用 hook。

```typescript
export const guide = new Guide({ ... })
guide.hooks.onGuideStart.tapPromise(
  'checkIsGuideRead',
  async guide =&amp;gt; {
    // do something interesting
    return false
  }
)
```

### 在插件中使用 hook

可以在 [plugin](/docs/plugins) 中使用 hook，为 plugin 提供监听新手引导流程的能力。

```typescript
export function checkIsGuideRead({ core }: PluginProps) {
  // do something
  core.hooks.onGuideStart.tapPromise('checkIsGuideRead', async guide =&amp;gt; {
    // do something
    return false
  })
  // do something
}
export const guide = new Guide({
  ...
  Plugins: [checkIsGuideRead],
})
```


