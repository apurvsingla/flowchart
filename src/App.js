import React, { Component } from 'react';
import {
  Switch,
  Route,
  // Redirect
} from 'react-router-dom';

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
        </Switch>
      </div>
    );
  }
}

export default App;
