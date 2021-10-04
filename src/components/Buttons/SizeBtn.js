import React, { Component } from "react";

class SizeBtn extends Component {
  render() {
    return <button className="size-cta">{this.props.size}</button>;
  }
}

export default SizeBtn;
