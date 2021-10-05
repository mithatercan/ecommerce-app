import React, { Component } from "react";
import { connect } from "react-redux";
class Cart extends Component {
  render() {
    return (
      <div>
        {this.props.cart.map((product) => (
          <p>{product.name}</p>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart.data,
});

export default connect(mapStateToProps)(Cart);
