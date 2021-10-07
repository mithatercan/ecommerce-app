import React, { Component } from "react";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import getCurrency from "../utils/getCurrency";
import { connect } from "react-redux";
import checkInStock from "../utils/checkInStock";
class productCard extends Component {
  render() {
    const { product, currency } = this.props;
    return (
      <Link
        to={`/product/detail/category=${product.category}/id=${product.id}`}
      >
        <div className={`product-card df fd-c jc-sb ${checkInStock(product)}`}>
          <div className="product-card__top">
            <div className="product-card__top--img">
              <img src={product.gallery[0]} alt="product-card" />
            </div>
          </div>
          <footer className="product-card__footer ">
            <p>{product.name}</p>
            <small>{getCurrency(product, currency)}</small>
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
