import React from 'react';
import { Link } from 'react-router-dom';
import BackIcon from 'react-icons/lib/md/arrow-back';
import './header.css';

export default (props) => 
  <div className="header" style={{ backgroundImage:`url(${props.bg})` }}>
    <div className="container">
      { props.backTo && 
        <Link to={props.backTo} className="back-link"><BackIcon/></Link>
      }
      { !props.path && 
        <h1 className="logo-text">{ props.title }</h1>
      }
      { props.path && 
        <Link to="/" className="logo-text">{ props.title }</Link>
      }
      <h2 className="subtext">{ props.subtitle }</h2>
    </div>
  </div>
