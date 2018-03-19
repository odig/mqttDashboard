//libs
// const mqqtlib = require('mqtt')
import * as mqtt from 'mqtt'

export class Mqtt {
    constructor(mqttServer, mqttUserName, mqttPassword, subscribeString, callback) {
        // take care of function context
        //this.onIncreaseCounter = this.onIncreaseCounter.bind(this)

        this.callback = callback
        this.subscribeString = subscribeString

        //console.log(mqttServer, mqttUserName, mqttPassword)
        if (mqttUserName) {
            this.mqttConnection = mqtt.connect('mqtt://' + mqttServer, {
                username: mqttUserName,
                password: mqttPassword,
                port: 1884
            })
        } else {
            this.mqttConnection = mqtt.connect('mqtt://' + mqttServer, {
                port: 1884
            })
        }

        // take care of function context
        this.connect = this.connect.bind(this)
        this.message = this.message.bind(this)

        this.mqttConnection.on('connect', this.connect)
        this.mqttConnection.on('message', this.message)
    }

    connect() {
        console.log('MQTT connected')
        this.mqttConnection.subscribe(this.subscribeString, null, function (err,info) {
            //console.log(info[0])
            if (!err) {
                console.log('" subscribe: "' + info[0].topic + '"')
            } else {
                console.log(err, '" subscribe: "' + info[0].topic + '"')
            }
        })
    }

    message(topic, message) {
        //console.log(topic)
        //console.log(message.toString())
        try {
            let parsed = JSON.parse(message)
            //console.log(parsed)
            this.callback(topic, parsed)
        } catch (e) {
            this.callback(topic, message)
        }
    }
}