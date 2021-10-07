import React, { Component } from "react";
import { addCartAction } from "../../redux/actions/cartActions";
class AddToCartBtn extends Component {
  handleClick = () => {
    addCartAction(this.props.product, this.props.attributes);
  };
  render() {
    const { passive } = this.props;
    return (
      <button
        disabled={passive}
        onClick={() => this.handleClick()}
        className={`add-cta ${passive && "add-cta__passive"}`}
      >
        {passive ? "OUT OF STOCK" : "ADD TO CART"}
      </button>
    );
  }
}

export default AddToCartBtn;
