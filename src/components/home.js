import React, { Component } from 'react';
import { getAllMessages } from './serviceclient'
import Sendmessage from './sendmessage';
import Navigation from './navigation';
import Messagelist from './messagelist';
import './home.css';

class Home extends Component {

    state = { messages: [] }

    componentDidMount() {

        getAllMessages()
            .then(response => {
                console.log("DidMount@home: ", response)
                this.setState({ messages: response })
            })
    }

    refreshList = (messages) => {
        this.setState({messages: messages});
    }


    render() {
        console.log("username toimii @home.js: ", this.props.username)
        return (
            <div>
                <div className="navi">
                    <Navigation />
                </div>
                <div className="wrapper">
                    <div className="messages">
                        <Messagelist messages={this.state.messages} callback={this.refreshList} />
                    </div>
                    <div className="sendmessages">
                        <Sendmessage callback={this.refreshList} />
                    </div>
                </div>
            </div >
        );
    }
}

export default Home;