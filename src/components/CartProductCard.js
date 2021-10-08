import React, { Component } from "react";
import { connect } from "react-redux";
import CountBtn from "./Buttons/CountBtn";
import getCurrency from "../utils/getCurrency";
import AttributeItems from "./AttributeItems";
class CartProductCard extends Component {
  render() {
    const { product, currency, size } = this.props;
    return (
      <div
        className={`cart-product-card cart-product-card--${size} df ai-c jc-sb`}
      >
        <div className="cart-product-card__left df jc-sb  fd-c">
          <p>{product.brand}</p>
          <p>{product.name}</p>
          <p>{getCurrency(product, currency)}</p>

          <AttributeItems
            btnsDisabled={true}
            size="md"
            items={product.choosenAttribute}
          />
        </div>
        <div className="cart_product-card__right df jc-sb">
          <div className="cart-product-card__right--btns df fd-c jc-sa ai-c ">
            <CountBtn size={size} product={product} type="increase" />
            {product.quantity}
            <CountBtn size={size} product={product} type="decrease" />
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
