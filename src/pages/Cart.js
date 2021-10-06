import React, { Component } from "react";
import { connect } from "react-redux";
import CartProductCard from "../components/CartProductCard";
class Cart extends Component {
  render() {
    const { cart } = this.props;
    return (
      <div className="cart">
        {cart.length > 0 &&
          cart.map((product, Idx) => (
            <CartProductCard key={Idx} product={product} />
          ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart.data,
});

export default connect(mapStateToProps)(Cart);
