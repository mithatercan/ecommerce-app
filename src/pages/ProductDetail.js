import React, { Component } from "react";
import Galerry from "../components/Gallery";
import fetchProductById from "../utils/fetchProductById";
import Spinner from "../components/Spinner";
import ProductDetailSide from "../components/ProductDetailSide";
export default class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
    };
  }
  componentDidMount() {
    fetchProductById(this.props.match.params.id).then((result) =>
      this.setState({
        product: result,
      })
    );
  }

  render() {
    const { product } = this.state;
    return product === "undefined" ? (
      <Spinner />
    ) : (
      <div className="product-detail df ai-c jc-sb">
        <Galerry gallery={product.gallery} />
        <ProductDetailSide product={product} />
      </div>
    );
  }
}
