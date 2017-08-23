import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Booker - A booking management tool</h2>
        </div>
        <div className="App-intro">
          <p>With <strong>Booker</strong> you can:</p>
          <ul>
            <li>Post events</li>
            <li>Share on social media</li>
            <li>Get email notifications for bookings</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
