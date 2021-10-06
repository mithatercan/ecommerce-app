import React, { Component } from "react";
import getSymbolFromCurrency from "currency-symbol-map";
class CurrencyCardList extends Component {
  handleClick = (target) => {
    this.props.handleClick(target);
  };
  render() {
    const { product } = this.props;
    return (
      <ul className="currency-card__data--list">
        {product.currencies.map((item, itemIdx) => (
          <li>
            <data
              onClick={(e) => this.handleClick(e.target)}
              className="currency-card__data"
              key={itemIdx}
              value={item}
            >
              {getSymbolFromCurrency(item) + " " + item}
            </data>
          </li>
        ))}
      </ul>
    );
  }
}

export default CurrencyCardList;
