import React, { Component } from 'react';
import {loginFunc} from "./serviceclient";
import './login.css';

class Login extends Component {

    state = {username: "", password: '', redirect:false, error:""};
    handleUsernameChange = (e) => {
        const uusiarvo = e.target.value;
        this.setState({username: uusiarvo});
    }
    handlePasswordChange = (e) => {
        const uusiarvo = e.target.value;
        this.setState({password: uusiarvo});
    }
    handleCreateClick = (e) => {
        e.preventDefault()
        console.log("click toimii")
        loginFunc(this.state)
        .then(response => {
            console.log(response.status)
            if (response.status === 201) {
                // this.props.callbackFromParent(this.state.username)
                console.log("this.props:",this.props)
                console.log("ok", response)
                // this.setState({redirect:true})
                this.props.history.push("/home");
            
            } else {
                console.log("error: ", response)
                response.json().then(function(json){
                    this.setState({error:json})
                })
                // this.setState({respMsg:response})
            }
            
        })
    }



        //this.props.callback(this.state);
        //this.setState({content: "", author: ''});

    render() {
        if (this.state.redirect === true) {
            console.log("toimii")
            // this.setState({redirect:false})
            // window.location.href = "./home"
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
                <br></br>
                {this.state.error}
                No account yet? <a href="/signup">Sign up here.</a>
            </div>
        );
    }
}

export default Login;