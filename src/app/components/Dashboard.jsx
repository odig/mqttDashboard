import React from 'react'
import { browserHistory } from 'react-router'
import { Link } from 'react-router'

import { DashboardDetail } from './DashboardDetail.jsx'

export class Dashboard extends React.Component {
  displayMqttMessages() {
    if (this.props.mqttMessages[0]) {
      return (
        <DashboardDetail mqttMessage={this.props.mqttMessages[0]} />
      )
    } 
  }

  render() {
    return (
      <div>
        {this.displayMqttMessages()}
      </div>
    )
  }
}
