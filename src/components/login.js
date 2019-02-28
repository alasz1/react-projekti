import React, { Component } from 'react';
import { loginFunc } from "./serviceclient";



class Login extends Component {

    state = { username: '', password: '', error: ''};
    handleUsernameChange = (e) => {
        const uusiarvo = e.target.value;
        this.setState({ username: uusiarvo });
    }
    handlePasswordChange = (e) => {
        const uusiarvo = e.target.value;
        this.setState({ password: uusiarvo });
    }
    handleCreateClick = (e) => {
        e.preventDefault()
        loginFunc(this.state)
            .then(response => {
                if (response.status === 201) {
                    this.props.history.push("/home");
                } else {
                    response.json()
                        .then((json) => {
                            this.setState({ error: json.error });
                        })
                }
            })
    }

    redirect = () => {
        this.props.history.push("/signup");
    }

    render() {
        if (this.state.redirect === true) {
            console.log("toimii")
        }

        return (
            <div>
                <h2>Login</h2>
                <form>
                    <label>Username</label>
                    <input type="text" placeholder="Username"
                        value={this.state.username} onChange={this.handleUsernameChange}
                        required="required" />

                    <label>Password</label>
                    <input type="text" placeholder="Password"
                        value={this.state.password} onChange={this.handlePasswordChange} required="required" />

                    <button type="submit" onClick={this.handleCreateClick}>Login</button>
                </form>
                <br></br>
                <p class="error">{this.state.error}</p>
                No account yet? <span onClick={this.redirect}>Sign up here.</span>
            </div>
        );
    }
}

export default Login;