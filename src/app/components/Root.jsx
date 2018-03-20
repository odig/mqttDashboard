import React from 'react'

import { Menu } from './Menu.jsx'
import { Dashboard } from './Dashboard.jsx'
import { MqttMessageList } from './MqttMessageList.jsx'

export class Root extends React.Component {
  constructor(props) {
    super()
    this.state= {
      componentToDisplay: "Dashboard"
    }
    // take care of function context
    this.menuCallback = this.menuCallback.bind(this)
    this.displayComponent = this.displayComponent.bind(this)
  }

  menuCallback(menuClicked){
    this.setState({ componentToDisplay: menuClicked })
  }

  displayComponent() {
    switch (this.state.componentToDisplay) {
      case "Dashboard":
        return < Dashboard mqttMessages = { this.props.mqttMessages } />
        break
      case "MqttMessageList":
        return < MqttMessageList mqttMessages={this.props.mqttMessages} />
        break
      default:      
        return < Dashboard mqttMessages={this.props.mqttMessages} />
        break
    }
  }

  render() {
    //console.log("------", this.state)
    //console.log("++++++", this.props.mqtt)
    return (
      <div className="Root">
        {this.displayComponent()}
      </div>
    )
  }
}

//<Menu callback={this.menuCallback} />
//  <hr />
