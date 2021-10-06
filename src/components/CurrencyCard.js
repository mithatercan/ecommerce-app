import React, { Component } from "react";
import { connect } from "react-redux";
import getSymbolFromCurrency from "currency-symbol-map";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { changeCurrencyAction } from "../redux/actions/currencyActions";
class CurrencyCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choosen: this.props.product.currencies[0],
    };
  }
  handleClick = (target) => {
    changeCurrencyAction(target.value);
    this.setState({
      ...this.state,
      choosen: target.value,
    });
  };

  render() {
    return (
      <div className="currency-card">
        <span>
          {this.state.choosen} <MdOutlineKeyboardArrowUp />
        </span>
        <ul className="currency-card__data--list">
          {this.props.product.currencies.map((item, itemIdx) => (
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
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  product: state.product.data,
});
export default connect(mapStateToProps)(CurrencyCard);
