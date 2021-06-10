常用的 react-hooks 工具集

[@umijs/hooks](https://hooks.umijs.org/zh-CN) 是 umi-js 提供的 hooks 工具集，大家可以自行引入使用。

### useDidUpdate

**(fn: Function, inputs?: any[]) => void**

使用方式同 useEffect，但是会忽略第一次执行

### useLayoutRect

**() => [ClientRect, React.MutableRefObject&lt;any&gt;, () => void]**

监听指定容器的 resize 变化

```tsx
import { useLayoutRect } from '@ys/utils'

function Component() {
  const [rect, ref, resize] = useLayoutRect()

  // 执行第一次 resize
  useEffect(resize, [])

  return (
    <div ref={ref}>
      <div>width:{rect.width}</div>
      <div>height:{rect.height}</div>
    </div>
  )
}
```

### useTimeout

**(timeout:number) => [number, (timeout:number) => void]**

倒计时 hook

```tsx
import { useTimeout } from '@ys/utils'

function Component() {
  const [time, reset] = useTimeout(60)

  return (
    <div>
      <button onClick={() => reset(60)}>重置计时器</button>
      <div>倒计时：{time}</div>
    </div>
  )
}
```

### usePromise

**&ltT&gt;(fn: () => Promise&lt;T&gt;,deps?: any[]) => [boolean, T, Error, () => void]**

异步函数调用 hook

```tsx
import { usePromise } from '@ys/utils'
import { Button } from '@ys/components'

function Component() {
  const [loading, result, error, refetch] = usePromise(() =>
    window.fetch('https://www.baidu.com')
  )

  return (
    <div style={{ padding: 10 }}>
      <Button type='primary' loading={loading} onClick={refetch}>
        重新请求
      </Button>
      {loading && <div>请求中...</div>}
      {result && <div>请求结果：{JSON.stringify(result)}</div>}
      {error && <div>请求错误：{error.message}</div>}
    </div>
  )
}

render(<Component />)
```

### usePrevious

**&ltT&gt;(value: T) => T**

获取上一个值

```tsx
import { usePrevious } from '@ys/utils'
import { Button } from '@ys/components'

function Component() {
  const [count, setCount] = useState(0)
  // 👇 look here
  const prevCount = usePrevious(count)

  return (
    <div style={{ padding: 10 }}>
      <h1>
        Now: {count}, before: {prevCount}
      </h1>
      <Button type='primary' onClick={() => setCount(count => count + 1)}>
        Add
      </Button>
    </div>
  )
}

render(<Component />)
```

### useForceUpdate

**() => () => void**

获取强制组件渲染的函数

```tsx
import { useForceUpdate } from '@ys/utils'
import { message } from 'antd'
import { Button } from '@ys/components'

function Component() {
  const forceUpdate = useForceUpdate()

  message.info('render')

  return (
    <Button style={{ margin: 10 }} type='primary' onClick={forceUpdate}>
      render
    </Button>
  )
}

render(<Component />)
```

### useFullscreen

**(node: string | Element) => [boolean, () => void]**

接收一个 DOM 节点作为参数，返回一个元组，元组的第一个值表示全屏状态，元组的第二个值用于切换全屏功能。

```tsx
import { useFullscreen } from '@ys/utils'
import { Button } from '@ys/components'

function Component() {
  const [fullscreen, toggle] = useFullscreen()

  return (
    <div>
        <div>全屏状态：{fullscreen?'是':'否'}</div>
            <Button style={{ margin: 10 }} type='primary' onClick={() => toggle()}>切换全屏</Button>
    </div>
  )
}

render(<Component />)
```

### createStore

接收一个返回状态的函数，并生成 Context helper。

#### 定义 store

```tsx
import { createStore } from '@ys/fe-utils/hooks'
import { useLocalStore } from 'mobx-react-lite'
import { Model } from './Model'

type Store = {
  loading: boolean
  queryKey: string
  pageIndex: number
  pageSize: number
}

type Options = {
    defaultLoading: boolean
}

export function useModel(options?: Partial<Options>) {
  const store = useLocalStore(() => ({
    loading: options?.defaultLoading || false,
    queryKey: '',
    pageIndex: 1,
    pageSize: 10,
    update(data: Partial<Store>) {
      Object.assign(store, data)
    },
  }))

  return store
}

const store = createStore(useModel)

export const Provider = store.Provider
export const Context = store.Context
export const useStore = store.useStore
```

#### 使用 store

```tsx
const ListPage = observer(function ListPage() {
  const store = useStore()
  return <div>{store.loading}</div>
})

export default function ListPageWithStore() {
  // 自定义 model
  const model = useModel({
    defaultLoading: false
  })

  return (
    <Context.Provider value={model}>
      <ListPage />
    </Context.Provider>
  )
}
```
