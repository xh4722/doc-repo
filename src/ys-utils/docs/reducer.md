类型安全的 reducer 相关函数

### createReducer

**&lt;TPrevState, THandlerMap&gt;(defaultState: TPrevState, handlerMapsCreator: (handle: CreateHandlerMap&lt;TPrevState&gt;) => THandlerMap[]): (state: TPrevState | undefined, action: {type: string;} | InferActionFromHandlerMap&lt;THandlerMap&gt;) => InferNextStateFromHandlerMap&lt;THandlerMap&gt;**

创建类型安全的 reducer

### createAction

**&lt;K extends string&gt;(name: K): &lt;T = void, M = void&gt;() => ((payload: T, meta?: M) => Action&lt;K, T, M&gt;) & {type: K;toString(): K;}**

配合 createReducer 创建类型安全的 action。
createAction 需指定 payload 的类型，否则会因为类型不匹配而报错。

```tsx
import { useReducer } from 'react'
import { createAction, createReducer, Dispatch } from '@ys/utils'

type Item = {
  id: string
  name: string
}

type List = {
  list: Item[]
  pageCtx: {
    total: number
    index: number
    size: number
  }
}

function init(): List {
  return {
    list: [],
    pageCtx: {
      index: 1,
      size: 10,
      total: 0,
    },
  }
}

const reducer = createReducer(init(), handleAction => [
  handleAction(createAction('RESET')<List>(), (_, { payload }) => payload),
  handleAction(createAction('ADD')<Item>(), (state, { payload }) => ({
    ...state,
    payload,
  })),
])

// 导出 Dispatch 类型用于子组件传递 dispatch 作为 props 时的类型声明
export type DispatchType = Dispatch<typeof reducer>

function Component() {
  const [list, dispatch] = useReducer(init(), reducer)

  function addItem() {
    dispatch({
      type: 'ADD',
      payload: {
        id: Date.now(),
        name: 'new Item',
      },
    })
  }

  return (
    <div>
      <button onClick={addItem}>新增 item</button>
      <ul>
        {list.map(item => (
          <li>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}
```

### createStore

创建 store

```tsx
// store.ts
import { useReducer } from 'react'
import { createStore } from '@ys/utils'
import UserModel from './domain/UserModel'

const { Provider, Context, useStore } = createStore(function useStore() {
  const user = useReducer(UserModel.reducer, UserModel.init())

  return {
    user,
  }
})
export const GlobalProvider = Provider
export const GlobalContext = Context
export const useGlobal = useStore
```

使用 store

1. 在父组件上注入 store

```tsx
// index.tsx
import React from 'react'
import ReactDOM from 'react-dom'
import { GlobalProvider } from './store'
import { App } from './App'

ReactDOM.render(
  <GlobalProvider>
    <App />
  </GlobalProvider>,
  document.getElementById('root')
)
```

2. 在子组件上使用 store

```tsx
// App.tsx
import React from 'react'
import ReactDOM from 'react-dom'
import { useGlobal } from './store'

export function App() {
  const {
    user: [user, userDispatch],
  } = useGlobal()

  return <div>{user.name}</div>
}
```
