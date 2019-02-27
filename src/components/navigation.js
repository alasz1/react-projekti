import React, { Component } from 'react';
import {getCurrentUser} from './serviceclient';
import {logoutFunc} from './serviceclient';


class Navigation extends Component {

    state = {username:""}

    componentDidMount() {
        getCurrentUser()
        .then(response => {
            console.log("DidMount@navigation: ", response)
            console.log(response.user)
            this.setState({username:response.user})
        })
    }

    logout() {
        logoutFunc()
        .then(response => {
            if (response) {
                console.log("logout response:",response)
                // this.props.history.push("/");
                window.location.href = "/";
            }
        })
    }

    render() {



        return (
            <div>
            
            <a href="/home">Home </a>
            <a type="button" onClick={this.logout}>Logout </a>
            
        </div>
        );
    }
}

export default Navigation;