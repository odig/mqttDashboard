import React from 'react'
import { browserHistory } from 'react-router'
import { Link } from 'react-router'

export class Dashboard extends React.Component {
  displayMqtt() {
    return (
      <div>
        <p>
          topic: {this.props.mqttMessages[0] ? this.props.mqttMessages[0].topic : ""}
          <br />
          name: {this.props.mqttMessages[0] ? this.props.mqttMessages[0].data.name : ""}
        </p>
      </div>
    )
  }

  render() {
    return (
      <div>
        <h3>The Dashboard Page</h3>
        {this.displayMqtt()}
      </div>
    )
  }
}
//  onNavigateMessageDetail(id) {
//    browserHistory.push('mqttmessagedetail/' + id)
//  }
//        <button onClick={this.onNavigateMessageDetail(id)}>Details</button>
