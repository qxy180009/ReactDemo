import React from 'react'
import ReactDom from 'react-dom'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import { BrowserRouter, 
      Route,
      Redirect,
      Switch } from 'react-router-dom'

import reducers from './reducer'
import Auth from './Auth.js'
import Dashboard from './Dashboard'
import './config'
// thunk 得作用： 改变actionCreator的写的方式

const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():()=>{}
))
console.log(store.getState());

// 登录
//  没有登录信息 同意跳转login
//   页面 导航 显示 注销
//   一营
//   而应
//   骑兵

ReactDom.render(
  <Provider store = {store}>
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Auth}></Route>
        <Route path="/" component={Dashboard}></Route>
        <Redirect to="/dashboard"></Redirect>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)