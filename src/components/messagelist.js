import React, { Component } from 'react';
import { getAllReplies } from './serviceclient';
import Modal from './modal';
import Messagebox from './messagebox';
import './modal.css'; 
import Replybox from './replybox';


class Messagelist extends Component {
    state= {message:{}, replies:[]};

    toggleModal = (mes) => {
        console.log("togglemodal")
        getAllReplies(mes._id)
        .then(response => {
            this.setState({message:mes, replies:response});
            document.getElementById("modal-overlay").classList.toggle('show');
        })
    }

    toggleReply = (e) => {
        console.log("togglereply")
        this.setState({message:{}, replies:[]});
        document.getElementById("modal-overlay").classList.toggle('show');
    }

    render() {
        //console.log("this.props.messages: ", this.props.messages);
        var messagesReversed = this.props.messages.reverse();
        var allMessages = messagesReversed.map((m) =>
            <div onClick={()=> {this.toggleModal(m)}}>
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
                        <form>

                        </form>
                    </div>
                </div>

            </div>
        );
    }
}

export default Messagelist;
