import React, { Component } from "react";

export default class CountBtn extends Component {
  render() {
    return <div>{this.props.count === "decrease" ? "-" : "+"}</div>;
  }
}
