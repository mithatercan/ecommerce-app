import React, { Component } from "react";

class AttributeBtn extends Component {
  handleClick = () => {
    this.props.handleClick();
  };
  render() {
    const { color, value, disabled, size } = this.props;
    return (
      <button
        onClick={() => {
          this.handleClick();
        }}
        disabled={disabled}
        style={{ background: color, border: `1px solid ${color}` }}
        className={`attribute-cta__${color && "color"} attribute-cta__${size}`}
      >
        {!color && value}
      </button>
    );
  }
}

export default AttributeBtn;
