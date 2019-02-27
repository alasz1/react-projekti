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

    render() {

        return (
            <div>
                <form>
                    <input type="text" placeholder="Subject"
                        value={this.state.messageTitle} onChange={this.handleMessageTitleChange} />
                    <br/>
                    <input type="text" placeholder="Type message here"
                        value={this.state.messageText} onChange={this.handleMessageChange} />
                    <br/>
                    <button type="submit" onClick={this.handleCreateClick}>Send</button>
                </form>
            </div>
        );
    }
}

export default Sendmessage;