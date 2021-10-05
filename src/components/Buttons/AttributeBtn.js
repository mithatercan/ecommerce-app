import React, { Component } from "react";

class AttributeBtn extends Component {
  render() {
    const { color } = this.props;
    return (
      <button
        style={{ background: color, border: `1px solid ${color}` }}
        className={`attribute-cta ${color && "color"}`}
      >
        {!color && this.props.attribute}
      </button>
    );
  }
}

export default AttributeBtn;
