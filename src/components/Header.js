import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CurrencyCard from "./CurrencyCard";
import { BsCart2 } from "react-icons/bs";
class Header extends Component {
  render() {
    return (
      <header className="header">
        <nav className="header__nav df-ai-c df-jc-sb">
          <div className="header__nav--left df-ai-c df-jc-sb">
            {this.props.product.categories.map((item) => (
              <Link to={`/categories/${item.name}`}>{item.name}</Link>
            ))}
          </div>
          <div className="header__nav--mid">logo</div>
          <div className="header__nav--right df-ai-c df-jc-sb">
            <CurrencyCard />
            <div className="header__nav--cart">
              <BsCart2 /> <span>{this.props.cart.length}</span>
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
export default connect(mapStateToProps)(Header);
