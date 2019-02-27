import React, { Component } from 'react';
import {signinFunc} from "./serviceclient";
import {Redirect} from 'react-router-dom';
import {browserHistory} from 'react-router';

class Signup extends Component {

    state = {username: "", password: '', confirmPassword:"", redirect:false};
    handleUsernameChange = (e) => {
        const uusiarvo = e.target.value;
        this.setState({username: uusiarvo});
    }
    handlePasswordChange = (e) => {
        const uusiarvo = e.target.value;
        this.setState({password: uusiarvo});
        if (this.confirmPassword === this.password) {
            document.getElementById("pwd2").style = "border-color:green;"; 
        } else {
            document.getElementById("pwd2").style = "border-color:red;"; 
        }
    }
    handleconfirmPasswordChange = (e) => {
        const uusiarvo = e.target.value;
        this.setState({confirmPassword: uusiarvo});
        if (this.confirmPassword === this.password) {
            document.getElementById("pwd2").style = "border-color:green;"; 
        } else {
            document.getElementById("pwd2").style = "border-color:red;"; 
        }
    }
    handleCreateClick = (e) => {
        e.preventDefault()
        signinFunc(this.state)
        .then(response => {
            console.log(response.ok)
            if (response.ok) {
                console.log("ok", response)
                // this.setState({redirect:true})
                this.props.history.push("/home");
            } else {
                console.log("ei ok", response)
            }
            
        })
    }

    render() {
        console.log("this.state.redirect: ",this.state.redirect)
        if (this.state.redirect === true) {
            console.log("toimii")
            // window.location.href = "./home"
        }
        return (
                <div>
                    <h2>Create new user account</h2>
                <form>
                <label>Username</label>
                        <input type="text" placeholder="Username" 
                            value={this.state.username} onChange={this.handleUsernameChange}
                            required="required"/>

                <label>Password</label>
                <input type="text" placeholder="Password" 
                            value={this.state.password} onChange={this.handlePasswordChange} required="required" id="pwd1"/>
                 
                 <input type="text" placeholder="Password" 
                            value={this.state.confirmPassword} onChange={this.handleconfirmPasswordChange} required="required" id="pwd2"/>
                 
                    <button type="submit" onClick={this.handleCreateClick}>Login</button>
                </form>
                <br></br>
                <a href="/">Have an account already? Login here</a>
            </div>
        );
    }
}

export default Signup;