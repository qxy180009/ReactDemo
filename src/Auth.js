import React from 'react'
import { connect } from 'react-redux'
import { login, getUserData } from './Auth.redux'
import { Redirect } from 'react-router-dom'
// import axios from 'axios'

// 两个reducers 都有state
// 合并reducer
@connect(
  state=>state.auth,
  {login, getUserData}
)

class Auth extends React.Component {

  // 没有redux情况下的操作
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     data : {}
  //   }
  // }

  componentDidMount() {
    this.props.getUserData()
  }

  render() {
    return (
      <div>
        <h2>我的名字是{this.props.user} 年龄{this.props.age}</h2>
        { this.props.isAuth ? <Redirect to="/dashboard" /> : null}
        <h2>你没有权限, 需要登陆才能进入</h2>
        <button onClick={this.props.login}>login</button>
      </div>
    )
  }
}

export default Auth