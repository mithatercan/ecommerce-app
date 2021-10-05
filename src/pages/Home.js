import React, { Component } from "react";
import { connect } from "react-redux";
import ProductCard from "../components/ProductCard";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      displayProdct: {},
    };
  }
  render() {
    const { categories } = this.props.product;
    const content = this.props.content;
    return (
      <div className="home">
        <div className="home__inner">
          <h1>{content && content.toUpperCase()}</h1>
          <div className="home__products--container df jc-sb ai-c fw-w">
            {categories.map((category) => {
              if (category.name == this.props.content) {
                return category.products.map((product) => (
                  <ProductCard
                    onProductCard={(product) => {
                      this.setState({
                        display: !this.state.display,
                        displayProdct: product,
                      });
                    }}
                    product={product}
                  />
                ));
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  product: state.product.data,
});

export default connect(mapStateToProps)(Home);
