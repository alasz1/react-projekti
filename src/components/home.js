import React, { Component } from 'react';
import {getAllMessages} from './serviceclient'

class Home extends Component {

    state = {message:"", messages:[]}

    componentDidMount() {
        getAllMessages()
        .then(response => {
            console.log(response)
            this.setState({messages:response})
        })
    }
    handleMessageChange = (e) => {
        const uusiarvo = e.target.value;
        this.setState({message: uusiarvo});
    }
    handleCreateClick = () => {
        console.log("message submitted")
    }
    render() {
        return (
            <div>
                <h2>Home works!</h2>


                <form>
                        <input type="textarea" placeholder="Type message here" 
                            value={this.state.message} onChange={this.handleMessageChange}/>
                 
                    <button type="submit" onClick={this.handleCreateClick}>Send</button>
                    
                </form>
         
            </div>
        );
    }
}

export default Home;