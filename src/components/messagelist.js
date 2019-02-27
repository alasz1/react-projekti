import React, { Component } from 'react';
import { getAllMessages } from './serviceclient';

class Messagelist extends Component {

    // componentDidMount() {
    //     getAllMessages()
    //     .then(response =>
    //         this.setState({ messages: response }))
    // }

    render() {
        console.log("this.props.messages: ", this.props.messages);
        var allMessages = this.props.messages.map((m) =>
            <tr key={m.id}><td>{m.username}</td><td>{m.time}</td><td>{m.messageTitle}</td><td>{m.messageText}</td></tr>)
        return (
            <div>
                <p>All Messages from the Database</p>
                <table>
                    <tbody>
                        {allMessages}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Messagelist;