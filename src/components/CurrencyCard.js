import React, { Component } from "react";

export default class CurrencyCard extends Component {
  render() {
    return (
      <select name="currency" className="currency-card">
        <option value="TRY">TRY</option>
      </select>
    );
  }
}
