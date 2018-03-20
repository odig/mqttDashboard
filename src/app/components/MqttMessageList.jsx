import React from "react";

export class MqttMessageList extends React.Component {
    renderMessageList() {
        return (
            this.props.mqttMessages.map((message, index) => {
                return (
                    < li key={"MqttMessageList"+index} className="mqttMessageListElement">
                        <div className="mqttDataTopic">{message.topic}</div>
                        <div className="mqttDataName">{message.data.name}</div>
                        <div className="mqttDataUnit">{message.data.unit}</div>
                        <div className="mqttDataType">{message.data.unitString}</div>
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

//<div className="mqttDataUnit">{message.data.unit}</div>
//<div className="mqttDataType">{message.data.unitString}</div>