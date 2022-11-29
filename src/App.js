import React, { Component } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
    };
  }

  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
          {/* eslint-disable-next-line react/destructuring-assignment */}
          <Input input={this.state.input} />
          <div className="row">
            <Button>AC</Button>
            <Button>+/-</Button>
            <Button>%</Button>
            <Button>÷</Button>
          </div>
          <div className="row">
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button>X</Button>
          </div>
          <div className="row">
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button>-</Button>
          </div>
          <div className="row">
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>+</Button>
          </div>
          <div className="row">
            <div className="zero">
              <Button>0</Button>
            </div>
            <Button>.</Button>
            <Button>=</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

