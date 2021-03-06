import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CurrencyCard from "./CurrencyCard";
import { BsCart2, BsHandbagFill } from "react-icons/bs";
import CartPreview from "./CartPreview";
import { withRouter } from "react-router-dom";

class Header extends PureComponent {
  render() {
    const { product, cart, location } = this.props;
    return (
      <header className="header ">
        <nav className="header__nav df ai-c jc-sb">
          <div className="header__nav--left ">
            <Link
              className={
                location.pathname === `/categories/all` && "header__nav--active"
              }
              to="/categories/all"
            >
              ALL
            </Link>
            {product.categories.map((item) => (
              <Link
                className={
                  location.pathname === `/categories/${item.name}` &&
                  "header__nav--active"
                }
                to={`/categories/${item.name}`}
              >
                {item.name.toUpperCase()}
              </Link>
            ))}
          </div>
          <div className="header__nav--mid txt-ac">
            <Link to="/categories/all">
              <BsHandbagFill className="header__nav--logo" />
            </Link>
          </div>
          <div className="header__nav--right df ai-c jc-fe">
            <CurrencyCard />
            <div className="header__nav--cart">
              <Link to={cart.length === 0 ? "#" : "/cart"}>
                <BsCart2 className="header__nav--cart" />
                <span>{cart.length}</span>
              </Link>
              <CartPreview />
            </div>
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
