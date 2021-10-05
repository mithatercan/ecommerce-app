import React, { Component } from "react";
import SizeBtn from "./Buttons/SizeBtn";
import AddToCartBtn from "./Buttons/AddToCartBtn";
class ProductDetailSide extends Component {
  render() {
    const { product } = this.props;
    return (
      <aside className="product-detail__inner">
        <h2>{product.brand}</h2>
        <h1>{product.name}</h1>
        <div className="product-details__inner-sizes">
          <SizeBtn />
        </div>
        <AddToCartBtn product={product} passive={product.inStock} />
        <p dangerouslySetInnerHTML={{ __html: product.description }} />
      </aside>
    );
  }
}

export default ProductDetailSide;
