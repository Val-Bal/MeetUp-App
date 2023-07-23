import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    number: 32,
  };

  handleNumberChange = (event) => {
    let inputValue = event.target.value;
    inputValue = Math.max(parseInt(inputValue), 0);
    this.setState({ number: inputValue }, () => {
      this.props.updateEvents(this.props.currentCity, inputValue);
    });
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <input
          id="number-of-events"
          type="number"
          className="number"
          value={this.state.number}
          onChange={this.handleNumberChange}
        />
      </div>
    );
  }
}

export default NumberOfEvents;

 