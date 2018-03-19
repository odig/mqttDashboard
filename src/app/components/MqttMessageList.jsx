import React from "react";

export class MqttMessageList extends React.Component {
    renderMessageList() {
        return (
            this.props.mqttMessages.map((message, index) => {
                return (
                    < li key={message.topic} className="mqttMessageListElement">
                        <div className="mqttDataTopic">{message.topic}</div>
                        <div className="mqttDataName">{message.name}</div>
                        <div className="mqttDataValue">{message.data}</div>
                        <div className="mqttDataUnit">{message.unit}</div>
                        <div className="mqttDatatType">{message.unitString}</div>
                    </li >
                )
            }, this)
        )
    }

    render() {
        return (
            <div>
                <h3>MQTT messages</h3>
                <ul>
                    {this.renderMessageList()}
                </ul>
                <hr />
            </div>
        );
    }
}