import React, { Component } from 'react';
import {getAllMessages} from './serviceclient'
import {sendMsgFunc} from './serviceclient'
import Sendmessage from './sendmessage';

import Messagelist from './messagelist';

class Home extends Component {

    state = {messages:[]}

    componentDidMount() {
        getAllMessages()
        .then(response => {
            console.log("DidMount@home: ", response)
            this.setState({messages:response})
        })
    }


    render() {
        return (
            <div>
                <h2>Home works!</h2>

                <Sendmessage/>

    
            <Messagelist messages={this.state.messages}/>

         
            </div>
        );
    }
}

export default Home;