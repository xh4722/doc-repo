---
title: 流程定义
sidebar_label: 流程定义
---

driver.js 只提供了基本的UI控件和控制步骤，对于复杂的应用场景需要再抽象一套流程定义语法，用于满足下述需求：
- 支持结构化描述；
- 支持跨页面；
- 支持执行业务逻辑；
- pretreat：流程启动预处理；
- steps：流程步骤；
- posttreat：流程结束后处理；
- check point：检查点，用于控制流程的暂停、中断和继续；

## 结构化描述

结构化存储需要基于上面的 driver.js 和流程控制设计一套描述规则：

- 流程；
- 步骤；
- 副作用：service 调用；

## 步骤

步骤描述基于 driver.js 提供的基本结构：

```json
{
  element: '#some-item',        // Query selector string or Node to be highlighted
  stageBackground: '#ffffff',   // This will override the one set in driver
  popover: {                    // There will be no popover if empty or not given
    className: 'popover-class', // className to wrap this specific step popover in addition to the general className in Driver options
    title: 'Title',             // Title on the popover
    description: 'Description', // Body of the popover
    showButtons: false,         // Do not show control buttons in footer
    doneBtnText: 'Done',        // Text on the last button
    closeBtnText: 'Close',      // Text on the close button
    nextBtnText: 'Next',        // Next button text
    prevBtnText: 'Previous',    // Previous button text
  }
}
```

### service

service 调用通过数组的方式声明：[serviceName, ...arguments]
- 数组的第一个元素表示要调用的 service 名称；
- 数组的剩余元素表示 service 调用的参数；
如下表示使用 'home' 参数调用 history.push service：

```json
[
  // step
  { ... },
  // service call
  ['history.push', 'home'],
  // step
  { ... }
]
```

## 流程
开发者可以任意排列组合 step 和 service，用来定义不同的新手引导流程。
下面会解构一个 guide 流程语法，阐释语法含义：

```json
{
    // guide 唯一标识
    "id": "1",
    // 触发 router plugin
    "plugins": [["router", "dashboard"]],
    // 定义 guide 流程
    "steps": [
      /**
      * 在第一个 step 之前出现的所有副作用会被定义为 pretreat
      */
      ["showNewComer"],
      {
        "element": "#menu-job-creator",
        "popover": {
          "title": "作业提交 (1/3)",
          "description": "使用示例文件进行一次作业提交",
          "position": "right",
          "className": "guide-driver-job-creator"
        },
        "stageBackground": "rgba(255,255,255,0.3)"
      },
      /**
      * 在 step 中间出现的副作用会在最近一次 step 的 onNext 中触发
      */
      ["history.push", "/job-creator"],
      {
        "element": "#job_creator .light-tip",
        "popover": {
          "title": "完成新手引导 (3/3)",
          "description": "点击这里可再次查看教学视频",
          "position": "left",
          "doneBtnText": "完成",
          "closeBtnText": "完成",
          "className": "guide-driver-job-creator"
        }
      },
      /**
      * 在最后一个 step 之后出现的所有步骤会被定义为 posttreat
      */
      ["showNewComer"]
    ]
}
```

上述 guide 解构以后的执行流程如下：
- pretreat：call showNewComer service；
- execute driver steps；
- call history.push('home') service；
- execute driver steps；
- posttreat：call showNewComer service；

## 检查点（check point）

guide-sdk 支持在两种场景下设置检查点（check point）：
1. 流程描述中的检查点：流程中的副作用（service）支持异步调用，你可以通过定义一个异步的副作用步骤来暂停、中断和启动流程：
    - 暂停：pending；
    - 中断：rejected；
    - 启动：resolved；
2. 业务逻辑检查点：你可以在业务代码中使用 [guide.intercept](/docs/examples#通过业务代码控制新手引导流程) 拦截新手引导实现相应的暂停、重启和结束逻辑；

## 跨页面引导
通过调用 history service 完成页面跳转

```json
[
// step
{ ... },
// router effect
['history.push', 'home'],
// step
{  ... }
]
```

因为路由跳转以后页面的渲染是异步的，新手引导框架在执行 driver steps 之前会先 retry 保证当前页面存在元素：

```jsx
executeSteps(steps) {
    const driver = this.driver
 
    // check dom loaded
    const maxRetryTimes = this.config.elementCheckMaxTimes
    retry({
      maxRetryTimes,
      interval: 300,
      handler: ({ retryTimes }) =&gt; {
        const elementQuery = steps[0]?.element
        const element = document.querySelector(elementQuery)
 
        if (retryTimes &gt;= maxRetryTimes) {
          console.error(`guideSDK: can't find dom element(${elementQuery})`)
        }
 
        if (element) {
          driver.defineSteps(steps)
          driver.start(0)
        }
 
        // when element is not found, retry
        return !element
      },
    })
}
```
