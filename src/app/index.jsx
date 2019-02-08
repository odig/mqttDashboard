//libs
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import { Root } from './components/Root.jsx'
import { Dashboard } from './components/Dashboard.jsx'
import { MqttMessageList } from './components/MqttMessageList.jsx'

//css
import './styles/index.css'

//helper components
import { Mqtt } from './helper/mqtt'

class App extends React.Component {
  constructor(props) {
    // my dad likes to know
    super()

    //my vars
    this.state = {}
    this.state.mqttMessages=[]

    this.counter = 0
    this.config = {}
/*
    let path = process.cwd() + '/config.json'
    console.log('look for config ' + path)
    if (fs.existsSync(path)) {
      this.config = require('config.json')(path)
    } else {
      path = '/etc/mqttDasboard' + '/config.json'
      console.log('look for config ' + path)
      if (fs.existsSync(path)) {
        this.config = require('config.json')(path)
      } else {
        path = __dirname + '/config.json'
        console.log('look for config ' + path)
        if (fs.existsSync(path)) {
          this.config = require('config.json')(path)
        } else {
          console.log('no config.json found --> use defaults')
          this.config = {}
        }
      }
    }
*/
    //defaults
    if (typeof this.config.mqttServer === "undefined") this.config.mqttServer = 'nanopiair.fritz.box'
    if (typeof this.config.mqttUserName === "undefined") this.config.mqttUserName = 'mqtt'
    if (typeof this.config.mqttPassword === "undefined") this.config.mqttPassword = 'mqtt'
    if (typeof this.config.mqttSubscribeString === "undefined") this.config.mqttSubscribeString = 'homee/devices/status/#'

    // take care of function context
    this.mqttCallback = this.mqttCallback.bind(this)
  }

  componentDidMount() {
    //console.log(Mqtt);
    this.mqtt = new Mqtt(this.config.mqttServer, this.config.mqttUserName, this.config.mqttPassword, this.config.mqttSubscribeString, this.mqttCallback)
  }

  mqttCallback(mqttTopic, mqttData) {
    let message = {}
    message = {
      topic: mqttTopic,
      data: mqttData
    }

    let updated = this.state.mqttMessages;
    let newLength = updated.unshift(message);
    if (newLength>20) {
      updated.pop()
    }
    this.setState({ mqttMessages: updated });
  }

  render() {
    return <Root mqttMessages={this.state.mqttMessages} counter={this.counter}/>
  }
}

render(<App />, window.document.getElementById('app'))

// <Router history={browserHistory}>
//   <Route path={'/'} component={Root}>
//     <IndexRoute component={Dashboard} />
//           <Route path={'dashboard'} component={Dashboard} />
//           <Route path={'mqttmessagelist'} component={MqttMessageList} />
//           <Route path={'mqttmessagedetail/:id'} component={MqttMessageDetail} />
//   </Route>
// </Router>
