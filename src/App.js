import React from 'react'
import { connect } from 'react-redux'
import {addGun, removeGun, addGunAsync} from './index.redux'

// const mapStateToProps = (state) => {
//   return {num:state}
// }

// const actionCreators = {addGun, removeGun, addGunAsync}

// App = connect(mapStateToProps, actionCreators)(App)
@connect(
  // 1. 你要什么属性
  state=>({num: state.counter}),
  // 2. 你要什么方法， 自动dispatch
  {addGun, removeGun, addGunAsync}
)
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>现在有机枪{this.props.num}把</h1>
        <button onClick={this.props.addGun}>申请武器</button>
        <button onClick={this.props.removeGun}>减少武器</button>
        <button onClick={this.props.addGunAsync}>拖两天再给</button>
      </div>
    )
  } 
}

export default App