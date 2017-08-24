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
          <div className="footer" style={{ textAlign: 'center' }}>
            <div className="container">
              <p
                style={{ fontSize: '0.90rem' }}
              >{ new Date().getFullYear() } &copy; <a href="http://talentedunicorn.com">TalentedUnicorn</a></p>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
