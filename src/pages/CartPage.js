import React, { Component } from "react";
import { connect } from "react-redux";
import CartProductCard from "../components/CartProductCard";
class CartPage extends Component {
  render() {
    const { cart } = this.props;
    return (
      <div className="cart">
        {cart.length > 0 &&
          cart.map((product, Idx) => (
            <CartProductCard size="lg" key={Idx} product={product} />
          ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart.data,
});

export default connect(mapStateToProps)(CartPage);
