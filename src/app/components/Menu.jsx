import React from 'react'
import { Link } from 'react-router'

export class Menu extends React.Component {
  constructor(props) {
    super()
    // take care of function context
    this.onMqttMessageListClick = this.onMqttMessageListClick.bind(this)
    this.onDashboardClick = this.onDashboardClick.bind(this)
  }

  onMqttMessageListClick() {
    if(this.props.callback) {
      this.props.callback("MqttMessageList")
    }
  }

  onDashboardClick() {
    if (this.props.callback) {
      this.props.callback("Dashboard")
    }
  }

  render() {
    return (
      <nav className="menu">
        <li onClick={this.onMqttMessageListClick}>MqttMessageList</li>
        <li onClick={this.onDashboardClick}>Dashboard</li>
      </nav>
    )
  }
}
