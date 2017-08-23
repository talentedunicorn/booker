import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export default (props) => 
  <div className="header">
    <div className="container">
      <Link to="/" className="logo-text">{ props.title }</Link>
      <h2 className="subtext">{ props.subtitle }</h2>
    </div>
  </div>
