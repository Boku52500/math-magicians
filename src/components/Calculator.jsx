/* eslint linebreak-style: 0 */
import React, { Component } from "react";
import "./Calculator.css";
import { Button } from "./Button";
import { Input } from "./Input";
import { ClearButton } from "./ClearButton";
import * as math from 'mathjs'

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
    };
  }

  addToInput = val => {
    this.setState({input: this.state.input + val})
  }

  handleEqual = () => {
    this.setState({input: math.evaluate(this.state.input)})
  }

  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
          {/* eslint-disable-next-line react/destructuring-assignment */}
          <Input input={this.state.input} />
          <div className="row">
            <ClearButton handleClear={() => this.setState({ input: "" })}>
              AC
            </ClearButton>
            <Button handleClick={this.addToInput}>+/-</Button>
            <Button handleClick={this.addToInput}>%</Button>
            <Button handleClick={this.addToInput}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.addToInput}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>-</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>+</Button>
          </div>
          <div className="row">
            <div className="zero">
              <Button handleClick={this.addToInput}>0</Button>
            </div>
            <Button handleClick={this.addToInput}>.</Button>
            <Button handleClick={() => this.handleEqual()}>=</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
