import React, { Component } from 'react';
import {getAllMessages} from './serviceclient'
import {sendMsgFunc} from './serviceclient'
import Sendmessage from './sendmessage';
import Navigation from './navigation';
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
        console.log("username toimii @home.js: ", this.props.username)
        return (
            <div>
                <Navigation/>

                <Sendmessage/>

    
            <Messagelist messages={this.state.messages}/>

         
            </div>
        );
    }
}

export default Home;