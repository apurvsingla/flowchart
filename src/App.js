import React, { Component } from 'react';
import {
  Switch,
  Route,
  // Redirect
} from 'react-router-dom';
import Input from './Pages/InputOutput/Input';

import Ports from './Pages/Ports/Port';
import Header from './Components/Header/Header';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
        <Switch>
          <Route exact path="/" component={Ports} />
          <Route exact path="/input-output" component={Input} />
        </Switch>
      </div>
    );
  }
}

export default App;
