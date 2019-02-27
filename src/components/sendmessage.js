import React, { Component } from 'react';

class Sendmessage extends Component {
    render() {

        handleMessageChange = (e) => {
            const uusiarvo = e.target.value;
            this.setState({ messageText: uusiarvo });
        }
        handleCreateClick = (e) => {
            e.preventDefault()
            console.log("message submitted")
            sendMsgFunc()
        }

        return (
            <div>
                <form>
                    <input type="textarea" placeholder="Type message here"
                        value={this.state.message} onChange={this.handleMessageChange} />
                    <button type="submit" onClick={this.handleCreateClick}>Send</button>
                </form>
            </div>
        );
    }
}

export default Sendmessage;