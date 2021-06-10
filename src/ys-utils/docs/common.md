提供通用的工具函数

### getUrlParams

**() => Object**

将 window.loacation.search 解析为对象

### getBytes

**(str:string) => number**

按照 utf-8 解析指定字符串的字节数（中文字符占 3 个字节）

```tsx repl=true
getBytes('你好')
```

### copyToClipboard

**(str:string) => void**

拷贝指定字符到剪切板

### nextTick

**&lt;T&gt;(cb: () => T): Promise&lt;T&gt;**

将回调函数放置到下一次 microtask 中

### single

**&lt;T&gt;(id: string, resolver: () => Promise&lt;T&gt;): Promise&lt;T&gt;**

使用 id 维护单例模式，可以用于保证同一 id 的多次调用只触发一次

#### 使用场景：保证多个网络异常请求只提示一次 error

```tsx
instance.interceptors.response.use(
    response => response,
    error => {
      if (error.message === 'Network Error') {
        single('network-error-message', () => message.error('网络异常').promise)
      }
      ...
    }
)
```
