import React from 'react';
import './form.css';

export default () => 
  <form className="form">
    <label>
      Book
      &nbsp;
      <input type="number" min="1" required/>
      &nbsp;
      seat(s) for RM230
    </label>

    <div className="form-submit">
      <button type="submit">Book now</button>
      <small>4 seats remaining</small>
    </div>
  </form>
