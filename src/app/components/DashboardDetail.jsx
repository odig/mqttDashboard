import React from 'react'
import { browserHistory } from 'react-router'

export class DashboardDetail extends React.Component {
  constructor(props) {
    //
    super()

    // take care of function context
    this.displayMqtt = this.displayMqtt.bind(this)
  }

  displayMqtt() {
    console.log(this.props)
    if (this.props.mqttMessage) {
      return (
        <div className={`device cubeType${this.props.mqttMessage.data.cubeType}`}>
          <div className="nodeHeader">
            <div className="nodeIcon">
              <svg width="30" height="30" viewBox="0 0 3 2">
                <rect width="1" height="2" x="0" fill="#008d46" />
                <rect width="1" height="2" x="1" fill="#ffffff" />
                <rect width="1" height="2" x="2" fill="#d2232c" />
              </svg>
            </div>
            <h1 className="nodeName title">{this.props.mqttMessage.data.name}</h1>
            <h2 className="nodeNote subtitle">{this.props.mqttMessage.data.note}</h2>
          </div>
          <div className="nodeDetails">
            <div className="dataField">{this.props.mqttMessage.data.data}</div>
            <div className="unitField">{this.props.mqttMessage.data.note !== "n/a" ? this.props.mqttMessage.data.unit : ""}</div>
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.displayMqtt()}
      </div>
    )
  }
}
