import React, { Component } from 'react';
import {signinFunc} from "./serviceclient";
import './login.css';

class Signup extends Component {

    state = {username: '', password: '', confirmPassword: '', redirect:false};
    handleUsernameChange = (e) => {
        const uusiarvo = e.target.value;
        this.setState({username: uusiarvo});
    }
    handlePasswordChange = (e) => {
        const uusiarvo = e.target.value;
        this.setState({password: uusiarvo});
        // if (this.confirmPassword === this.password) {
        //     document.getElementById("pwd2").style = "backgound-color:green;"; 
        // } else {
        //     document.getElementById("pwd2").style = "background-color:red;"; 
        // }
    }
    handleconfirmPasswordChange = (e) => {
        const uusiarvo = e.target.value;
        if (uusiarvo === this.state.password) {
            document.getElementById("pwd2").style = "background-color:lightgreen;"; 
        } else {
            document.getElementById("pwd2").style = "background-color:red;"; 
        }
        this.setState({confirmPassword: uusiarvo});
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
                <br />
                <label>Password</label>
                <input type="password" placeholder="Password" 
                            value={this.state.password} onChange={this.handlePasswordChange} required="required" id="pwd1"/>
                 
                 <label>Confirm Password</label>
                 <input placeholder="Password" type="password"
                            value={this.state.confirmPassword} onChange={this.handleconfirmPasswordChange} required="required" id="pwd2"/>
                 
                    <button type="submit" className="signup" onClick={this.handleCreateClick}>Login</button>
                </form>
                <br></br>
                Have an account already? <a href="/">Login here.</a>
            </div>
        );
    }
}

export default Signup;