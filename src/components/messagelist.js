import React, { Component } from 'react';
import { getAllReplies, sendReplyFunc, getCurrentUser, deleteMessage } from './serviceclient';
import Messagebox from './messagebox';
import './modal.css';
import Replybox from './replybox';


class Messagelist extends Component {
    state = { messages: this.props.messages, message: {}, replies: [], replyText: "", currentUser: '' };

    toggleModal = (mes) => {
        console.log("togglemodal")
        getAllReplies(mes._id)
            .then(response => {
                this.setState({ message: mes, replies: response });
                document.getElementById("modal-overlay").classList.toggle('show');
            })
        getCurrentUser()
            .then(response => {
                this.setState({ currentUser: response.user });
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
        sendReplyFunc({ messageId: this.state.message._id, replyText: this.state.replyText })
            .then(response => {
                this.setState({ replies: response, replyText: "" })
            })
    }

    handleDelete = (e) => {
        console.log("handleDelete, _id. ", this.state.message._id);
        this.toggleReply();
        deleteMessage(this.state.message._id)
            .then(response => {
                console.log("handleDelete response: ", response);
                this.props.callback(response);
            });
    }


    render() {
        //console.log("this.props.messages: ", this.props.messages);
        var messagesSorted = this.props.messages.sort(function (a, b) {
            a = new Date(a.time);
            b = new Date(b.time);
            return a > b ? -1 : a < b ? 1 : 0;
        })
        var allMessages = messagesSorted.map((m) =>
            <div onClick={() => { this.toggleModal(m) }}>
                <Messagebox m={m} key={m.id} />
            </div>

        )
        var allReplies = this.state.replies.map((r) =>
            <Replybox res={r} key={r.id} />
        )

        var button;

        if (this.state.currentUser === this.state.message.username && this.state.message.username !== "Anonyymi") {
            button = <button onClick={this.handleDelete}>Delete message</button>
        }

        return (
            <div>
                {allMessages}

                <div className="modal-overlay" id="modal-overlay">
                    <div className="modal">
                        <span className="close" onClick={this.toggleReply}>&#10062;</span>
                        <div className="replyto">
                            <b>{this.state.message.username}</b>&nbsp;@
                            {this.state.message.messageTitle}&nbsp;<i>{this.state.message.time}</i><br />
                            {this.state.message.messageText}
                        </div>
                        <div className="replies">
                        {allReplies}
                        </div>
                        <hr />
                        <textarea placeholder="Type reply here" value={this.state.replyText} onChange={this.handleReplyTextChange} />
                        <br />
                        <button type="submit" onClick={this.handleCreateClick}>Send</button>
                        {button}
                    </div>
                </div>

            </div>
        );
    }
}

export default Messagelist;
