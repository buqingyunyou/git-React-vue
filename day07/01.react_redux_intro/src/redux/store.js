
import {createStore} from 'redux';
import reducers from './reducers';

// 创建store,需要传入reducers
const store = createStore(reducers);

// 暴露store
export default store;
