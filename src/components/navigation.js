import React, { Component } from 'react';
import {getCurrentUser} from './serviceclient';

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

    render() {



        return (
            <div>
            
            <a href="/home">Home </a>
            <a href="/">Logout </a>
            
        </div>
        );
    }
}

export default Navigation;