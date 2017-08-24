import React from 'react';
import { Link } from 'react-router-dom';
import BackIcon from 'react-icons/lib/md/arrow-back';
import './header.css';

export default (props) => 
  <div className="header" style={{ backgroundImage:`url(${props.bg})` }}>
    <div className="container">
      { !props.path && 
        <div>
          <Link to="/" className="back-link"><BackIcon/></Link>
          <h1 className="logo-text">{ props.title }</h1>
        </div>
      }
      { props.path && 
        <Link to="/" className="logo-text">{ props.title }</Link>
      }
      <h2 className="subtext">{ props.subtitle }</h2>
    </div>
  </div>
