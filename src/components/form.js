import React from 'react';
import './form.css';

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      price: 230,
      seats: 1,
      total: 0,
      totalSeats: 10,
      remaining: 0
    }

    this.updateSeats = this.updateSeats.bind(this)
  }

  componentWillMount() {
    console.log('Loaded form')
    this.setState({total: this.state.price * this.state.seats})
    this.setState({remaining: this.state.totalSeats - this.state.seats})
  }

  updateSeats(e) {
    let selected = e.target.value
    let { price, totalSeats } = this.state
    if (totalSeats >= selected) {
      this.setState({seats: selected})
      this.setState({total: price * selected})
      this.setState({remaining: totalSeats - selected })
    }
  }

  render() {
    let { total, totalSeats, remaining, seats } = this.state

    return (
      <div>
        { totalSeats > 0 ? (
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
        ):(
          <div>
            <h3 className="form-soldout">Sorry, this event is sold out</h3>
          </div>
        )}
      </div>
    )
  }
}
