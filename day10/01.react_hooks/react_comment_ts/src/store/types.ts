import { Dispatch } from "redux";

// 同步action工厂函数的类型
export interface ActionCreator<T> {
  (params: T): Action<T>;
}
// action对象的类型
export interface Action<T> {
  type: string;
  data: T;
}

// 定义Users数组的类型,先定义User对象的类型
export interface User {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
}
// 起别名
export type Users = User[];

// 定义异步操作函数操作的类型
export interface AsyncActionCreator<T> {
  (params: T): (dispatch: Dispatch) => Promise<any>;
}

// 定义store中所有数据的类型
export interface RootState{
  loading:boolean,
  users:Users,
}