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

    render() {

        return (
            <div className="container">
                <span className="home"><a href="/home">Home </a></span>
                <span className="logout"><a type="button" onClick={this.logout}>Logout </a></span>
                <br />
                <span className="user">
                    You are signed in as <b>{this.state.username}</b>
                </span>
            </div>
        );
    }
}

export default Navigation;