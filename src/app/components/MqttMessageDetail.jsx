import React from 'react'
import { browserHistory } from 'react-router'

export class MqttMessageDetail extends React.Component {
  constructor(props) {
    //
    super()

    //my vars
    this.state = {
      counter: typeof props.initialCounter === "number" ? props.initialCounter : 0
    }

    // take care of function context
    this.onIncreaseCounter = this.onIncreaseCounter.bind(this)
  }

  onIncreaseCounter() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    return (
      <div>
        <h3>MqttMessageDetail</h3>
        <p>User ID: {this.props.params.id}</p>
        <p>counter: {this.state.counter}</p>
        <button onClick={() => this.onIncreaseCounter()}>Increase Counter</button>
      </div>
    )
  }
}
