import React, { Component } from "react";
import { BsCart2 } from "react-icons/bs";
import { connect } from "react-redux";
import getSymbolFromCurrency from "currency-symbol-map";
import { Link } from "react-router-dom";
class productCard extends Component {
  handleClick = (product) => {
    this.props.onProductCard(product);
  };
  render() {
    const { product } = this.props;
    return (
      <Link
        to={`/product/detail/category=${product.category}/id=${product.id}`}
      >
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
              {product.prices.map((price) => {
                if (price.currency === this.props.currency) {
                  return (
                    getSymbolFromCurrency(price.currency) + " " + price.amount
                  );
                }
              })}
            </small>
          </footer>

          <BsCart2 />
        </div>
      </Link>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.currency.data,
});
export default connect(mapStateToProps)(productCard);
