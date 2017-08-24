import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import homeBg from '../images/home-bg.jpg';
import './Home.css';

export default () => 
  <div className="home">
    <Header path="/" title="Booker" subtitle="Event booking made simple" bg={homeBg}/>
    <div className="floatWrapper content">
      <div className="half">
        <h2 className="title">For event managers</h2>
        <p>With <strong>Booker</strong> you can</p>
        <ul>
          <li>Post events</li>
          <li>Share on social media</li>
          <li>Get email notifications for bookings</li>
        </ul>
      </div>
      <div className="half">
        <h2 className="title">For event booking</h2>
      </div>
      <div className="half">
        <Link to="/events">Events</Link>
      </div>
    </div>
  </div>
