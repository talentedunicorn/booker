import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/home';
import Events from './pages/events';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header title="Booker" subtitle="Event booking made simple"/>
          <div className="content">
            <Route exact={true} path="/" render={() => (
              <div>
                <Home/>
                <Link to="/events">Events</Link>
              </div>
            )}/>
            <Route path="/events" component={Events}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
