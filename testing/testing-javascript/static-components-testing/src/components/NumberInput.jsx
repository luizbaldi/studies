import React, { Component } from 'react'

class NumberInput extends Component {

  static defaultProps = { min: 1, max: 9 }

  state = { number: 0 }

  onInputChange = (e) => {
    this.setState({ number: e.target.value })
  }

  render() {
    const { min, max } = this.props
    const { number } = this.state
    const isValid = (number <= max) && (number >= min)

    return (
      <div>
        <label htmlFor="number">Number</label>
        <input
          type="text"
          id="number"
          value={number}
          onChange={this.onInputChange}
        />
        {!isValid && (
          <span>Number is invalid</span>
        )}
      </div>
    )
  }
}

export default NumberInput