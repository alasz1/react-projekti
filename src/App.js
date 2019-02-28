import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';

import Signup from './components/signup';


class App extends Component {

  //   state = {dataFromChild:"abc"}

  //   myCallback = (dataFromChild) => {
  //     console.log("datafromchild  @app.js: ", this.state.dataFromChild)
  //     this.setState({ dataFromChild: dataFromChild });

  // }

  render() {

    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
