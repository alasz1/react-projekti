import React, { Component } from 'react';
import './modal.css'; 

class Messagebox extends Component {

    render() {

        return (
            <div className="messagebox">
                <div className="messageitem"><span className="author">{this.props.m.username}</span><span className="date">{this.props.m.time}</span></div>
                <span className="title">&nbsp;@{this.props.m.messageTitle}</span>
                <article className="text">{this.props.m.messageText}</article>

            </div>
        );
    }
}

export default Messagebox;