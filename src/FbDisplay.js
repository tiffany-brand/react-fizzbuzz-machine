import React, { Component, createContext } from "react";

class FbDisplay extends Component {
  // takes two numbers as props to be the fizz and buzz triggers
  static defaultProps = {
    fizz: 3,
    buzz: 5,
  };

  constructor(props) {
    super(props);
    this.state = { num: 1, result: 1 };
    this.fizzBuzz = this.fizzBuzz.bind(this);
    this.subtractOne = this.subtractOne.bind(this);
    this.addOne = this.addOne.bind(this);
  }

  //   Determine if number, fizz, buzz, or fizzbuzz
  fizzBuzz(newNum) {
    let newResult =
      (newNum % this.props.fizz ? "" : "fizz") +
        (newNum % this.props.buzz ? "" : "buzz") || newNum;
    this.setState({ num: newNum, result: newResult });
  }

  // decrement number click handler
  subtractOne() {
    if (this.state.num > 1) {
      this.fizzBuzz(this.state.num - 1);
    }
  }

  // increment number click handler
  addOne() {
    if (this.state.num < 100) {
      this.fizzBuzz(this.state.num + 1);
    }
  }

  render() {
    return (
      <div>
        <h2>
          Fizz is: {this.props.fizz} and Buzz is: {this.props.buzz}
        </h2>
        <h1>{this.state.result}</h1>
        <button onClick={this.subtractOne}>-</button>
        <button onClick={this.addOne}>+</button>
      </div>
    );
  }
}

export default FbDisplay;
