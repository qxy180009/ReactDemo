import React from 'react'
import {Component} from 'react'
import {List, Button} from 'antd-mobile'
import ListItem from 'antd-mobile/lib/list/ListItem';
// import 'antd-mobile/dist/antd-mobile.css'

class App extends Component {
  render() {
    const boss = '李云龙'
    return (
      <div>
        <h2>独立团，团长{boss}</h2>
        <一营 老大="张大彪"></一营>
      </div>
    )
  }
}

class 一营 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      solders: ['柱子','胡子','王根生']
    }
    // this.addSolder = this.addSolder.bind(this)
  }

  addSolder(){
    console.log("add new solder");
    this.setState({
      solders: [...this.state.solders, '新兵蛋子'+Math.random()]
    })
  }

  render() {
    
    return(
      <div>
        <h2>一营营长{this.props.老大}</h2>
        <Button type="primary" onClick={() => this.addSolder()}>新兵入伍</Button>
        <List renderHeader={()=>'士兵列表'}>
          {this.state.solders.map(v=>{
            return (
              <List.Item key={v}>
                {v}
              </List.Item>
            )
          })}
        </List>
      </div>
    )
  }

}

export default App