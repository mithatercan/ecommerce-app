import React, { Component } from "react";

class AttributeBtn extends Component {
  handleClick = () => {
    alert("hey");
  };
  render() {
    const { color, value } = this.props;
    return (
      <button
        onClick={() => {
          this.handleClick();
        }}
        style={{ background: color, border: `1px solid ${color}` }}
        className={`attribute-cta ${color && "color"}`}
      >
        {!color && value}
      </button>
    );
  }
}

export default AttributeBtn;
