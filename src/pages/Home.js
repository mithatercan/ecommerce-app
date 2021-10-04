import React, { Component } from "react";
import { connect } from "react-redux";
export class Home extends Component {
  render() {
    return <div>home pages</div>;
  }
}

const mapStateToProps = (state) => ({
  product: state.product.data,
});

export default connect(mapStateToProps)(Home);
