import React, { Component } from "react";
import { changeQuantityAction } from "../../redux/actions/cartActions";
class CountBtn extends Component {
  handleClick = (type) => {
    changeQuantityAction({ product: this.props.product, type: type });
  };
  render() {
    const { type } = this.props;
    return (
      <button onClick={() => this.handleClick(type)} className="count-cta">
        {type === "decrease" ? "-" : "+"}
      </button>
    );
  }
}

export default CountBtn;
