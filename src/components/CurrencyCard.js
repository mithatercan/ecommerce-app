import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { changeCurrencyAction } from "../redux/actions/currencyActions";
import CurrencyCardList from "./CurrencyCardList";
class CurrencyCard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      choosen: this.props.product.currencies[0],
    };
  }
  handleClick = (target) => {
    //Redux dispatch action to change currency state.
    changeCurrencyAction(target.value);
    this.setState({
      ...this.state,
      choosen: target.value,
    });
  };

  render() {
    const { product } = this.props;
    const { choosen } = this.state;
    return (
      <div className="currency-card">
        <span>
          {choosen} <MdOutlineKeyboardArrowUp />
        </span>
        <CurrencyCardList
          product={product}
          handleClick={(target) => {
            this.handleClick(target);
          }}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  product: state.product.data,
});
export default connect(mapStateToProps)(CurrencyCard);
