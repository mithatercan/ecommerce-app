import React, { Component } from "react";
import AddToCartBtn from "./Buttons/AddToCartBtn";
import getCurrency from "../utils/getCurrency";
import { connect } from "react-redux";
import Attributes from "./Attributes";
class ProductDetailSide extends Component {
  render() {
    const { product, currency } = this.props;
    return (
      <aside className="product-detail__inner">
        <h2>{product.brand}</h2>
        <p>{product.name}</p>
        <div className="product-detail__attributes">
          <Attributes product={product} />
        </div>
        <div className="product-detail__inner--price">
          <h3>PRICE : </h3>
          <span>{getCurrency(product, currency)}</span>
        </div>
        <AddToCartBtn product={product} passive={!product.inStock} />
        <dl dangerouslySetInnerHTML={{ __html: product.description }} />
      </aside>
    );
  }
}
const mapStateToProps = (state) => ({
  currency: state.currency.data,
});
export default connect(mapStateToProps)(ProductDetailSide);
