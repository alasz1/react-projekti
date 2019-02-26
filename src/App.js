import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Navigation from './components/navigation';
import Signup from './components/signup';


class App extends Component {
  render() {
    return (
      <div>
      <Navigation/>
      <Router>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/home" component={Home}/>
          <Route path="/signup" component={Signup}/>
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
