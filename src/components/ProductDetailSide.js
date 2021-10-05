import React, { Component } from "react";
import AddToCartBtn from "./Buttons/AddToCartBtn";
import AttributeBtn from "./Buttons/AttributeBtn";
import { connect } from "react-redux";
import getSymbolFromCurrency from "currency-symbol-map";
class ProductDetailSide extends Component {
  render() {
    const { product } = this.props;
    const { currency } = this.props;
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
          <span>
            {product.prices.map((price) => {
              if (price.currency === this.props.currency) {
                return (
                  getSymbolFromCurrency(price.currency) + " " + price.amount
                );
              }
            })}
          </span>
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
