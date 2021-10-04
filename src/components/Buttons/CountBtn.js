import React, { Component } from "react";

class CountBtn extends Component {
  render() {
    return <button>{this.props.type === "decrease" ? "-" : "+"}</button>;
  }
}

export default CountBtn;
