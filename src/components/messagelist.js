import React, { Component } from 'react';
import { getAllMessages } from './serviceclient';
import Modal from './modal';


class Messagelist extends Component {

    render() {
        console.log("this.props.messages: ", this.props.messages);
        var allMessages = this.props.messages.map((m) =>
        <div className="messagebox">
            <div className="messageitem"><span className="author">{m.username}</span><span className="date">{m.time}</span></div>
            <span className="title">&nbsp;@{m.messageTitle}</span>
            <article className="text">{m.messageText}</article>
        </div>
        )
        return (
            <div>
                {allMessages}
                <Modal/>
            </div>
        );
    }
}

export default Messagelist;
