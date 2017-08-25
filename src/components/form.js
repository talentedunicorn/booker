import React from 'react';
import './form.css';

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      price: 230,
      total: 230,
      totalSeats: 10,
      remaining: 10,
      seats: 0
    }

    this.updateSeats = this.updateSeats.bind(this)
  }

  updateSeats(e) {
    let selected = e.target.value
    let { seats, price, totalSeats } = this.state
    this.setState({seats: selected})
    this.setState({total: price * seats})
    this.setState({remaining: totalSeats - selected })
  }

  render() {
    let { total, totalSeats, remaining, seats } = this.state

    return (
      <form className="form">
        <label>
          Book
          &nbsp;
          <input type="number" min="1" max={ totalSeats } value={ seats } onChange={ this.updateSeats } required/>
          &nbsp;
          seat(s) for RM{ total }
        </label>

        <div className="form-submit">
          <button type="submit">Book now</button>
          <small>{ remaining } seats remaining</small>
        </div>
      </form>
    )
  }
}
