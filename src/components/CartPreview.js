import React, { Component } from "react";
import CartProductCard from "./CartProductCard";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ViewBagBtn, CheckOutBtn } from "./Buttons/CartPreviewBtns";
class CartPreview extends Component {
  render() {
    const { cart } = this.props;
    return (
      <div className="header__nav--cart--preview">
        {cart.length > 0 &&
          cart.map((product, Idx) => (
            <CartProductCard key={Idx} product={product} />
          ))}
        <div className="header__nav--cart--preview__btns df jc-sb">
          <Link to="/cart">
            <ViewBagBtn />
          </Link>
          <CheckOutBtn />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  cart: state.cart.data,
});
export default connect(mapStateToProps)(CartPreview);
