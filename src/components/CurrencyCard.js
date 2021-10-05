import React, { Component } from "react";
import { connect } from "react-redux";
class CurrencyCard extends Component {
  render() {
    return (
      <select name="currency">
        {this.props.product.currencies.map((item) => (
          <option>{item}</option>
        ))}
      </select>
    );
  }
}
const mapStateToProps = (state) => ({
  product: state.product.data,
});
export default connect(mapStateToProps)(CurrencyCard);
