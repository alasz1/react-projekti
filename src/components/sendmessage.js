import React, { Component } from 'react';
import { sendMsgFunc } from './serviceclient';

class Sendmessage extends Component {

    state = {username:"test", messageTitle:"", messageText:""}

    handleMessageTitleChange = (e) => {
        const uusiarvo = e.target.value;
        this.setState({ messageTitle: uusiarvo });
    }
    handleMessageChange = (e) => {
        const uusiarvo = e.target.value;
        this.setState({ messageText: uusiarvo });
    }

    handleCreateClick = (e) => {
        e.preventDefault()
        console.log("message submitted")
        sendMsgFunc(this.state)
        .then(response => {
            this.props.callback(response);
            this.setState({messageTitle:"", messageText:""})
        })
    }

    render() {

        return (
            <div className="sendmessage">
                <form>
                    <input type="text" placeholder="Subject"
                        value={this.state.messageTitle} onChange={this.handleMessageTitleChange} />
                    <br/>
                    <textarea placeholder="Message here" value={this.state.messageText} onChange={this.handleMessageChange} />
                    <br/>
                    <button type="submit" onClick={this.handleCreateClick}>Send</button>
                </form>
            </div>
        );
    }
}

export default Sendmessage;