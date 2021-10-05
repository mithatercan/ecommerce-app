import React, { Component } from "react";
import Galerry from "../components/Gallery";
import fetchProductById from "../utils/fetchProductById";
import Spinner from "../components/Spinner";
import ProductDetailSide from "../components/ProductDetailSide";
class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
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
    return product.length === 0 ? (
      <Spinner />
    ) : (
      <div className="product-detail df ai-c fw-w">
        <Galerry gallery={product.gallery} />
        <ProductDetailSide product={product} />
      </div>
    );
  }
}
export default ProductDetail;
