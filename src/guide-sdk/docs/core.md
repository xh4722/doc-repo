guide-sdk core 指的是新手引导框架的核心层，主要工作是解释和执行流程语法。同时插件开发也可以使用 core 中的相关属性和方法。

## constructor

guide-sdk core 支持使用如下参数进行实例化配置：

```tsx
type Props = {
    driverOptions: Driver.DriverOptions // Driver 配置参数
    config?: GuideConfig                // 基本配置
    services?: Services                 // 注册业务API
    Plugins?: PluginType[]              // 自定义Plugin
    history: History                    // 路由管理实例
    guides: Guides                      // 新手引导流程注册
}

type GuideConfig = Partial<{
  elementCheckMaxTimes: number
}>
```

## Properties

guide-sdk core 中可以访问到如下属性：

- driver：[driver.js](https://kamranahmed.info/driver.js/) 实例；
- driverOptions：Driver 配置参数；
- history：[History](https://www.npmjs.com/package/history)实例，用于管理路由；
- config: 新手引导框架基本配置；
- services：[SPI](/docs/services)；
- guides：新手引导流程；
- hooks：[生命周期钩子](/docs/hooks)；
- currentIndex：新手引导流程的当前步骤；

## methods

guide-sdk core 中可以访问到如下方法：

### trigger

**(name: string | Array&lt;string[] | string&gt;, ...args) =&gt; Promise&lt;void&gt;**

触发指定的 SPI

```jsx
// 暂停1秒
guide.trigger("timeout", 1000)

// 先暂停1秒，再暂停两秒
guide.trigger([
    ["timeout", 1000],
    ["timeout", 2000]
])
```

### activate

**() => void**

启用新手引导并注册执行插件

```jsx
guide.activate()
```

### start

**(guide: string | GuideType) =&gt; Promise&lt;void&gt;**

执行指定的新手引导

```jsx
// 执行 id 为 1 的新手引导流程
guide.start(1)

// 执行指定的新手引导流程
guide.start({
    "steps": [...]
})
```

### pause

**() =&gt; void**

暂停新手引导

```jsx
guide.pause()
```

### resume

恢复新手引导

```jsx
guide.resume()
```

### next

**() =&gt; void**

执行新手引导的下一步

```jsx
guide.next()
```

### intercept

**(func: Function, ...args: any[]) =&gt; Promise&lt;any&gt;**

拦截新手引导流程

```jsx
guide.intercept(async () => {
    await new Promise((resolve, reject) => {
        if(...) {
            // resolve to resume
            resolve()
        } else {
            // reject to abort
            reject()
        }
    })

    // you can return dispatcher for clean
    return () => { ... }
})
```
