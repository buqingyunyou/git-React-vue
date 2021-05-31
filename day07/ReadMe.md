# redux

- 用于集中管理共享的状态数据的 JS 库 (并不是 react 库)
- `npm i redux`

## 开发 react 项目使用 redux 管理共享数据

1. 需要下载的包

   - npm i redux //redux 核心库
   - npm i react-redux //用于简化 react 进行 redux 开发的库
   - npm i redux-thunk //这是一个用于支持 redux 异步编程的中间件
   - npm i redux-devtools-extension //这是 redux 开发工具库(用于将多个 reducers 整合成一个)

2. redux 的三个模块

    开启`监听store中状态数据state变化`的事件, 用于及时刷新数据到页面,实现页面的更新
    在UI组件中: 
    store.subscribe(()=>{
      this.setState({})
    })

   - store.js

     - (1) 保存共享的状态数据 state
     - (2) 核心 API
       - store.getState() //获取 store 中的 state 数据(状态数据)
       - store.dispatch(action) //分发 `action 配置对象`给 reducers 函数调用
     - 开发:

       1. 引入包
       2. 创建 store 对象 (根据 reducers,middleware)
       3. 暴露 store 对象
          import {createStore,applyMiddleware} from 'redux'
          import reducers from './redux/reducers'
          import thunk from 'redux-thunk'
          import composeWithDevTools from 'redux-devtools-extension'

       let middleware = applyMiddleware(thunk);
       if(process.env.NODE_ENV === 'development'){
       middleware=composeWithDevTools(applyMiddleware(thunk))
       }
       const store = createStore(reducers,middleware)

       export default store

   - reducers.js
      - (1) reducers暴露一个函数
      - (2) reducers接收两个参数
          - 参数一: `prevState` (旧的状态数据)
          - 参数二: `action` (action配置对象)
      - (3) reducers根据action配置对象的type属性,进行不同的业务逻辑处理,并返回新的状态数据`newState`, 保存到store容器中
      - 开发
        export default const reducers = (prevState,action)=>{
          switch(action.type){
            case 'INCREMENT':
              return prevState + action.data
            default:
              return prevState
          }
        }


   - action-creators.js
     - (1) 定义创建 `action 配置`对象的工厂函数
     - 定义的工厂函数的个数,由实际对数据进行多少操作决定
     - 开发
     ```export default const increment = (num)=>{
       return {
         type:'INCREMENT',
         data:num
       }
     }
     ```
     简单写法:
     export default const inscrement = (num)=>({type:"INCREMENT",data:num})
