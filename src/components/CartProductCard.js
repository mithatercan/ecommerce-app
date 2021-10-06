import React, { Component } from "react";
import { connect } from "react-redux";
import getSymbolFromCurrency from "currency-symbol-map";
import CountBtn from "./Buttons/CountBtn";

class CartProductCard extends Component {
  render() {
    const { product, currency } = this.props;
    return (
      <div className="cart-product-card df ai-c jc-sb">
        <div className="cart-product-card__left">
          <h3>{product.brand}</h3>
          <p>{product.name}</p>
          <small>
            {product.prices.map((price) => {
              if (price.currency === currency) {
                return (
                  getSymbolFromCurrency(price.currency) +
                  " " +
                  Math.floor(price.amount * product.quantity)
                );
              }
            })}
          </small>
        </div>
        <div className="cart_product-card__right df">
          <div className="cart-product-card__right--btns df fd-c jc-se ai-c ">
            <CountBtn product={product} type="increase" />
            {product.quantity}
            <CountBtn product={product} type="decrease" />
          </div>
          <img src={product.gallery[0]} alt="product" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.currency.data,
});
export default connect(mapStateToProps)(CartProductCard);
