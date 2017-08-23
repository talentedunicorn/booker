import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header title="Booker" subtitle="Event booking made simple"/>
          <div className="content">
            <div className="App-intro">
              <p>With <strong>Booker</strong> you can</p>
              <ul>
                <li>Post events</li>
                <li>Share on social media</li>
                <li>Get email notifications for bookings</li>
              </ul>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
