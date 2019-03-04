import React, { Component } from 'react';
import { getCurrentUser } from './serviceclient';
import { logoutFunc } from './serviceclient';
import './navigation.css';


class Navigation extends Component {

    state = { username: "" }

    componentDidMount() {
        getCurrentUser()
            .then(response => {
                // console.log("DidMount@navigation: ", response)
                // console.log(response.user)
                this.setState({ username: response.user })
            })
    }

    logout() {
        logoutFunc()
            .then(response => {
                if (response) {
                    console.log("logout response:", response)
                    // this.props.history.push("/");
                    window.location.href = "/";
                }
            })
    }

    home() {
        window.location.href = "/home";
    }

    render() {

        return (
            <div className="bigcontainer">
                <div className="container">
                    <button type="button" className="home" onClick={this.home}>Home</button>
                    <div className="white-text">You are signed in as <b>{this.state.username}</b></div>
                    <button type="button" className="logout" onClick={this.logout}>Logout</button>
                    
                </div>
                {/* <div className="userNavi">
                    <span className="user">
                        You are signed in as <b>{this.state.username}</b>
                    </span>
                </div> */}
            </div>
        )
    }
}

export default Navigation;