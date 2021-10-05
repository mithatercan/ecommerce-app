import React, { Component } from "react";
import { BsCart2 } from "react-icons/bs";
import getSymbolFromCurrency from "currency-symbol-map";
import { Link } from "react-router-dom";
class productCard extends Component {
  handleClick = (product) => {
    this.props.onProductCard(product);
  };
  render() {
    const { product } = this.props;
    return (
      <Link to={`/product/detail/id=${product.id}`}>
        <div
          className={`product-card df fd-c jc-sb ${
            !product.inStock && "out-of-stock"
          }`}
        >
          <div className="product-card__top">
            <div className="product-card__top--img">
              <img src={product.gallery[0]} alt="product-card" />
            </div>
          </div>
          <footer className="product-card__footer ">
            <p>{product.name}</p>
            <small>
              {getSymbolFromCurrency(product.prices[0].currency)}
              {product.prices[0].amount}
            </small>
          </footer>

          <BsCart2 />
        </div>
      </Link>
    );
  }
}

export default productCard;
