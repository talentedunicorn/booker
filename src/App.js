import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/home';
import Events from './pages/events';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Route exact={true} path="/" render={() => (
              <Home/>
            )}/>
            <Route path="/events" component={Events}/>
        </div>
      </Router>
    );
  }
}

export default App;
