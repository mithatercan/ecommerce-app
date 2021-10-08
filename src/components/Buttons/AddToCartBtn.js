import React, { Component } from "react";
import { addCartAction } from "../../redux/actions/cartActions";
import Spinner from "../Spinner";
class AddToCartBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }
  handleClick = () => {
    this.props.handleAddCartEvent();
    this.setState({
      loading: true,
    });
    addCartAction(this.props.product, this.props.attributes);
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 500);
  };
  render() {
    const { passive } = this.props;
    return (
      <button
        disabled={passive}
        onClick={() => this.handleClick()}
        className={`add-cta ${passive && "add-cta__passive"}`}
      >
        {this.state.loading
          ? "Loading..."
          : passive
          ? "OUT OF STOCK"
          : "ADD TO CART"}
      </button>
    );
  }
}

export default AddToCartBtn;
