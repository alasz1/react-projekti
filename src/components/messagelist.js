import React, { Component } from 'react';
import { getAllReplies, sendReplyFunc } from './serviceclient';
import Modal from './modal';
import Messagebox from './messagebox';
import './modal.css';
import Replybox from './replybox';


class Messagelist extends Component {
    state = { messages: this.props.messages, message: {}, replies: [], replyText:"" };

    toggleModal = (mes) => {
        console.log("togglemodal")
        getAllReplies(mes._id)
            .then(response => {
                this.setState({ message: mes, replies: response });
                document.getElementById("modal-overlay").classList.toggle('show');
            })
    }

    toggleReply = (e) => {
        console.log("togglereply")
        this.setState({ message: {}, replies: [] });
        document.getElementById("modal-overlay").classList.toggle('show');
    }

    handleReplyTextChange = (e) => {
        const uusiarvo = e.target.value;
        this.setState({ replyText: uusiarvo });
    }

    handleCreateClick = (e) => {
        e.preventDefault()
        console.log("reply submitted")
        sendReplyFunc({messageId: this.state.message._id, replyText: this.state.replyText})
        .then(response => {
            this.setState({replies: response, replyText:""})
        })
    }

    render() {
        //console.log("this.props.messages: ", this.props.messages);
        var messagesReversed = this.props.messages.reverse();
        var allMessages = messagesReversed.map((m) =>
            <div onClick={() => { this.toggleModal(m) }}>
                <Messagebox m={m} key={m.id} />
            </div>

        )
        var allReplies = this.state.replies.map((r) =>
            <Replybox res={r} key={r.id} />
        )

        return (
            <div>
                {allMessages}

                <div className="modal-overlay" id="modal-overlay">
                    <div className="modal">
                        <span className="close" onClick={this.toggleReply}>&#10005;</span>
                        {this.state.message.messageTitle}
                        {this.state.message.messageText}

                        {allReplies}
                            <textarea placeholder="Type reply here" value={this.state.replyText} onChange={this.handleReplyTextChange} />
                            <br />
                            <button type="submit" onClick={this.handleCreateClick}>Send</button>
                    </div>
                </div>

            </div>
        );
    }
}

export default Messagelist;
