/* eslint linebreak-style: 0 */
import React, { useState } from 'react';
import calculate from '../logic/calculate';
import './Calculator.css';

const Calculator = () => {
  const [calculator, setCalculator] = useState({
    total: '0',
    next: null,
    operation: null,
  });

  const onClickHandler = (e) => {
    const values = calculate(calculator, e.target.innerText);
    setCalculator(values);
  };

  const { total, next, operation } = calculator;

  return (
    <div className="app">
      <div className="calc-wrapper">
        <div className="output">
          <div className="input">{` ${total || ''} ${operation || ''} ${next || ''}`}</div>
        </div>
        <div className="row">
          <button
            onClick={onClickHandler}
            type="button"
            className="button-wrapper"
          >
            AC
          </button>
          <button
            onClick={onClickHandler}
            type="button"
            className="button-wrapper"
          >
            +/-
          </button>
          <button
            onClick={onClickHandler}
            type="button"
            className="button-wrapper"
          >
            %
          </button>
          <button
            onClick={onClickHandler}
            type="button"
            className="button-wrapper-orange"
          >
            ÷
          </button>
        </div>
        <div className="row">
          <button
            onClick={onClickHandler}
            type="button"
            className="button-wrapper"
          >
            7
          </button>
          <button
            onClick={onClickHandler}
            type="button"
            className="button-wrapper"
          >
            8
          </button>
          <button
            onClick={onClickHandler}
            type="button"
            className="button-wrapper"
          >
            9
          </button>
          <button
            onClick={onClickHandler}
            type="button"
            className="button-wrapper-orange"
          >
            x
          </button>
        </div>
        <div className="row">
          <button
            onClick={onClickHandler}
            type="button"
            className="button-wrapper"
          >
            4
          </button>
          <button
            onClick={onClickHandler}
            type="button"
            className="button-wrapper"
          >
            5
          </button>
          <button
            onClick={onClickHandler}
            type="button"
            className="button-wrapper"
          >
            6
          </button>
          <button
            onClick={onClickHandler}
            type="button"
            className="button-wrapper-orange"
          >
            -
          </button>
        </div>
        <div className="row">
          <button
            onClick={onClickHandler}
            type="button"
            className="button-wrapper"
          >
            1
          </button>
          <button
            onClick={onClickHandler}
            type="button"
            className="button-wrapper"
          >
            2
          </button>
          <button
            onClick={onClickHandler}
            type="button"
            className="button-wrapper"
          >
            3
          </button>
          <button
            onClick={onClickHandler}
            type="button"
            className="button-wrapper-orange"
          >
            +
          </button>
        </div>
        <div className="row">
          <button
            onClick={onClickHandler}
            type="button"
            className="button-wrapper-0"
          >
            0
          </button>
          <button
            onClick={onClickHandler}
            type="button"
            className="button-wrapper"
          >
            .
          </button>
          <button
            onClick={onClickHandler}
            type="button"
            className="button-wrapper-orange"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
