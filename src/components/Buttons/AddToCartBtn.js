import React, { Component } from "react";
import store from "../../redux/store";
import { addToCart } from "../../redux/slicers/cartSlice";
class AddToCartBtn extends Component {
  handleClick = () => {
    store.dispatch(addToCart(this.props.product));
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
