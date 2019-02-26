import React, { Component } from 'react';
import {loginFunc} from "./serviceclient";

class Login extends Component {

    state = {username: "", password: '', redirect:false};
    handleUsernameChange = (e) => {
        const uusiarvo = e.target.value;
        this.setState({username: uusiarvo});
    }
    handlePasswordChange = (e) => {
        const uusiarvo = e.target.value;
        this.setState({password: uusiarvo});
    }
    handleCreateClick = () => {
        console.log("click toimii")
        loginFunc(this.state)
        .then(response => {
            console.log(response, response.ok)
            if (response.ok == true) {
                console.log("ok", response)
                this.setState({redirect:true})
            } else {
                console.log("ei ok", response)
            }
            
        })
    }

        //this.props.callback(this.state);
        //this.setState({content: "", author: ''});

    render() {
        if (this.state.redirect === true) {
            console.log("toimii")
            this.setState({redirect:false})
            window.location.href = "./home"
        }
        return (
            <div>
                <h2>Login</h2>
                <form>
                <label>Username</label>
                        <input type="text" placeholder="Username" 
                            value={this.state.username} onChange={this.handleUsernameChange}
                            required="required"/>

                <label>Password</label>
                <input type="text" placeholder="Password" 
                            value={this.state.password} onChange={this.handlePasswordChange} required="required" />
                 
                    <button type="submit" onClick={this.handleCreateClick}>Login</button>
                </form>
            </div>
        );
    }
}

export default Login;