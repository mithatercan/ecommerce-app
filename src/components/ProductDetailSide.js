import React, { Component } from "react";
import AddToCartBtn from "./Buttons/AddToCartBtn";
import AttributeBtn from "./Buttons/AttributeBtn";
import getCurrency from "../utils/getCurrency";
import { connect } from "react-redux";
class ProductDetailSide extends Component {
  render() {
    const { product, currency } = this.props;
    return (
      <aside className="product-detail__inner">
        <h2>{product.brand}</h2>
        <p>{product.name}</p>
        <div className="product-detail__attributes">
          {product.attributes.map((attribute, idx) => (
            <div>
              <h3 className="product-detail__attributes--name">
                {attribute.name.toUpperCase()} :
              </h3>
              <div key={idx} className="product-detail__attributes--btns">
                {attribute.items.map((item, itemIdx) => (
                  <AttributeBtn
                    color={attribute.name === "Color" && item.value}
                    key={itemIdx}
                    attribute={item.value}
                  />
                ))}
              </div>
            </div>
          ))}
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
