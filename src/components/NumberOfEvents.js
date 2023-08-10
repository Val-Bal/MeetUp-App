import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    number: 32,
  };

  // handleNumberChange = (event) => {
  //   let inputValue = event.target.value;
  //   inputValue = Math.max(parseInt(inputValue), 0);
  //   this.setState({ number: inputValue }, () => {
  //     this.props.updateEvents(this.props.currentCity, inputValue);
  //   });
  // };

  // handleNumberChange = (event) => {
  //   let inputValue = event.target.value;
  //   if (inputVparseInt(inputValue) < 0) {
  //     // show error alert
  //   }
  //   inputValue = Math.max(parseInt(inputValue), 0);
  //   this.setState({ number: inputValue }, () => {
  //     this.props.updateEvents(this.props.currentCity, inputValue);
  //   });
  // };

  handleNumberChange = (event) => {
    let inputValue = event.target.value;
    if (parseInt(inputValue) < 0) {
      this.props.setErrorAlert("Error");
    }
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

 