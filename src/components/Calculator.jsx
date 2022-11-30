/* eslint linebreak-style: 0 */
import React, { Component } from 'react';
import calculate from '../logic/calculate';
import './Calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toatl: '0',
      next: null,
      operation: null,
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler = (e) => {
    const values = calculate(this.state, e.target.innerText);
    this.setState(values);
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="app">
        <div className="calc-wrapper">
          <div className="output">
            <div className="input">{` ${total || ''} ${operation || ''} ${next || ''}`}</div>
          </div>
          <div className="row">
            <button
              onClick={this.onClickHandler}
              type="button"
              className="button-wrapper"
            >
              AC
            </button>
            <button
              onClick={this.onClickHandler}
              type="button"
              className="button-wrapper"
            >
              +/-
            </button>
            <button
              onClick={this.onClickHandler}
              type="button"
              className="button-wrapper"
            >
              %
            </button>
            <button
              onClick={this.onClickHandler}
              type="button"
              className="button-wrapper-orange"
            >
              ÷
            </button>
          </div>
          <div className="row">
            <button
              onClick={this.onClickHandler}
              type="button"
              className="button-wrapper"
            >
              7
            </button>
            <button
              onClick={this.onClickHandler}
              type="button"
              className="button-wrapper"
            >
              8
            </button>
            <button
              onClick={this.onClickHandler}
              type="button"
              className="button-wrapper"
            >
              9
            </button>
            <button
              onClick={this.onClickHandler}
              type="button"
              className="button-wrapper-orange"
            >
              x
            </button>
          </div>
          <div className="row">
            <button
              onClick={this.onClickHandler}
              type="button"
              className="button-wrapper"
            >
              4
            </button>
            <button
              onClick={this.onClickHandler}
              type="button"
              className="button-wrapper"
            >
              5
            </button>
            <button
              onClick={this.onClickHandler}
              type="button"
              className="button-wrapper"
            >
              6
            </button>
            <button
              onClick={this.onClickHandler}
              type="button"
              className="button-wrapper-orange"
            >
              -
            </button>
          </div>
          <div className="row">
            <button
              onClick={this.onClickHandler}
              type="button"
              className="button-wrapper"
            >
              1
            </button>
            <button
              onClick={this.onClickHandler}
              type="button"
              className="button-wrapper"
            >
              2
            </button>
            <button
              onClick={this.onClickHandler}
              type="button"
              className="button-wrapper"
            >
              3
            </button>
            <button
              onClick={this.onClickHandler}
              type="button"
              className="button-wrapper-orange"
            >
              +
            </button>
          </div>
          <div className="row">
            <button
              onClick={this.onClickHandler}
              type="button"
              className="button-wrapper-0"
            >
              0
            </button>
            <button
              onClick={this.onClickHandler}
              type="button"
              className="button-wrapper"
            >
              .
            </button>
            <button
              onClick={this.onClickHandler}
              type="button"
              className="button-wrapper-orange"
            >
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
