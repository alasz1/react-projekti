import React, { Component } from 'react';
import Modal from './modal';
import './modal.css'; 

class Replybox extends Component {

    render() {

        return (
            <div className="replybox">
                <div className="replyitem"><span className="author">{this.props.res.username}</span><span className="date">{this.props.res.time}</span></div>
                <article className="text">{this.props.res.replyText}</article>
            </div>
        );
    }
}

export default Replybox;