
// 支持异步编程,引入应用中间件
import {createStore,applyMiddleware} from 'redux';
import reducers from './reducers';

// 让redux支持异步编程,引入thunk中间件
import thunk from 'redux-thunk';

// 创建store,需要传入reducers,并且传入
const store = createStore(reducers,applyMiddleware(thunk));

// 暴露store
export default store;
