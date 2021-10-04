import React, { Component } from "react";

class productCard extends Component {
  render() {
    return (
      <div className="product-card">
        <div className="product-card__top">
          <img className="product-card__img" src="xx" alt="product-card" />
          <i>cart icon</i>
        </div>
        <footer className="product-cart__footer">
          <p>Lorem ipsum dolor sit amet.</p>
          <span>$50.00</span>
        </footer>
      </div>
    );
  }
}

export default productCard;
