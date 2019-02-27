import React, { Component } from 'react';
import {getAllMessages} from './serviceclient'
import {sendMsgFunc} from './serviceclient'
import Sendmessage from './sendmessage';


class Home extends Component {

    state = {messageText:"", messages:[]}

    // componentDidMount() {
    //     getAllMessages()
    //     .then(response => {
    //         console.log(response)
    //         this.setState({messages:response})
    //     })
    // }


    render() {
        return (
            <div>
                <h2>Home works!</h2>

                <Sendmessage/>

    
            </div>
        );
    }
}

export default Home;