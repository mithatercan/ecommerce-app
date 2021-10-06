import React, { Component } from "react";
import CartProductCard from "./CartProductCard";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ViewBagBtn, CheckOutBtn } from "./Buttons/CartPreviewBtns";
import EmptyState from "../assets/images/empty-state.svg";
class CartPreview extends Component {
  render() {
    const { cart } = this.props;
    return (
      <div className="header__nav--cart--preview">
        {cart.length > 0 ? (
          cart.map((product, Idx) => (
            <CartProductCard size="sm" key={Idx} product={product} />
          ))
        ) : (
          <img src={EmptyState} alt="" />
        )}
        <div className="header__nav--cart--preview__btns df jc-sb">
          {cart.length >= 1 && (
            <>
              <Link to="/cart">
                <ViewBagBtn />
              </Link>
              <CheckOutBtn />
            </>
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  cart: state.cart.data,
});
export default connect(mapStateToProps)(CartPreview);
