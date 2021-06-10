提供统一的 AxiosInstance，并提供一些业务层面的封装机制

### AxiosInstance

axios 原生 instance 的扩展类型，主要扩展了 axios 的 config 属性：

- disableErrorMessage：可以禁止特定请求的默认 error message 提示；
- formatErrorMessage：用于封装特定请求的 error message 信息；

### interceptResponse

业务层面的 response 拦截器，用于配合 @ys/api 的 response 定义。

- 会检查 response.data.success 属性：如果为 false，则认为是失败的请求，提示 response.data.message 信息，并 reject 请求。

### interceptError

通用的 error 拦截器。

- 检查 error.message，如果为 'Network Error'，则认为是网络异常，提示 “网络异常” 信息
- 如果存在 error.response，则提示 error.response.data.message 中的信息

### createHttp

**&lt;T = AxiosInstance&gt;(config?: AxiosRequestConfig) => T**

Http instance 创建函数

- 接收可选的自定义 config 为参数，默认配置为

```javascript
{
  baseURL: '/api/',
  timeout: 60000,
  withCredentials: true,
  paramsSerializer: function(params) {
    return qs.stringify(params)
  },
}
```

- 支持传入范型定义返回的 axios instance

### Http

开箱即用的 Http 实例

- 使用默认配置的 createHttp 创建
- 应用 interceptResponse 拦截器
- 应用 interceptError 拦截器
