import React, { Component } from 'react';
import { getCurrentUser } from './serviceclient';

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

    render() {

        return (
            <div>
                <p>
                    <span className="home"><a href="/home">Home </a></span>
                    <span className="logout"><a href="/">Logout </a></span>
                </p>
                <p className="user">
                    You are signed in as <b>{this.state.username}</b>
                </p>
                <hr />
            </div>
                );
            }
        }
        
export default Navigation;