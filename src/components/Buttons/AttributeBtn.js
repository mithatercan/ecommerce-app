import React, { PureComponent } from "react";
import chooseAttribute from "../../utils/chooseAttribute";
class AttributeBtn extends PureComponent {
  handleClick = () => {
    this.props.handleClick();
  };
  render() {
    const { name, type, value, disabled, size, choosenAttributes } = this.props;
    const obj = { name: name, value: value };
    const choosen = chooseAttribute(obj, choosenAttributes);
    return (
      <button
        className={`attribute-cta__${type} attribute-cta__${type}--${size} ${
          choosen && `attribute-cta__${type}--choosen`
        }`}
        style={{
          background: type === "swatch" && value,
        }}
        disabled={disabled}
        onClick={() => {
          this.handleClick();
        }}
      >
        {type !== "swatch" && value}{" "}
      </button>
    );
  }
}

export default AttributeBtn;
