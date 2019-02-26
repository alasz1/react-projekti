import React, { Component } from 'react';
import {getAllMessages} from './serviceclient'
import {sendMsgFunc} from './serviceclient'

class Home extends Component {

    state = {messageText:"", messages:[]}

    // componentDidMount() {
    //     getAllMessages()
    //     .then(response => {
    //         console.log(response)
    //         this.setState({messages:response})
    //     })
    // }

    handleMessageChange = (e) => {
        const uusiarvo = e.target.value;
        this.setState({messageText: uusiarvo});
    }
    handleCreateClick = (e) => {
        e.preventDefault()
        console.log("message submitted")
        sendMsgFunc()
    }
    render() {
        return (
            <div>
                <h2>Home works!</h2>



         
            </div>
        );
    }
}

export default Home;