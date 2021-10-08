import React, { Component } from "react";
import { connect } from "react-redux";
import CartProductCard from "../components/CartProductCard";
import emptyState from "../assets/images/empty-state.svg";
class CartPage extends Component {
  render() {
    const { cart } = this.props;
    return (
      <div className="cart">
        {cart.length > 0 ? (
          cart.map((product, Idx) => (
            <CartProductCard size="lg" key={Idx} product={product} />
          ))
        ) : (
          <div
            className="df ai-c jc-c"
            style={{
              width: "100vw",
              height: "80vh",
            }}
          >
            <img
              style={{
                width: "25em",
              }}
              src={emptyState}
              alt=""
            />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart.data,
});

export default connect(mapStateToProps)(CartPage);
