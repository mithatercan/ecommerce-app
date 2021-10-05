import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CurrencyCard from "./CurrencyCard";
import { BsCart2, BsHandbagFill } from "react-icons/bs";
import CartPreview from "./CartPreview";
import { withRouter } from "react-router-dom";

class Header extends Component {
  componentWillUnmount() {
    console.log(this.props.match.params);
  }
  render() {
    const { product, cart } = this.props;
    const { pathname } = this.props.location;
    return (
      <header className="header ">
        <nav className="header__nav df ai-c jc-sb">
          <div className="header__nav--left ">
            {product.categories.map((item) => (
              <Link
                className={
                  pathname === `/categories/${item.name}` &&
                  "header__nav--active"
                }
                to={`/categories/${item.name}`}
              >
                {item.name.toUpperCase()}
              </Link>
            ))}
          </div>
          <div className="header__nav--mid txt-ac">
            <BsHandbagFill className="header__nav--logo" />
          </div>
          <div className="header__nav--right df ai-c jc-fe">
            <CurrencyCard />
            <Link to="/cart" className="header__nav--cart">
              <BsCart2 className="header__nav--cart" />
              <span>{cart.length}</span>
              <CartPreview />
            </Link>
          </div>
        </nav>
      </header>
    );
  }
}
const mapStateToProps = (state) => ({
  product: state.product.data,
  cart: state.cart.data,
});
export default withRouter(connect(mapStateToProps)(Header));
