import React, { Component } from "react";
import { connect } from "react-redux";
import ProductCard from "../components/ProductCard";

class CategoryPage extends Component {
  render() {
    const { categories } = this.props.product;
    const { content } = this.props;
    return (
      <div className="home">
        <div className="home__inner">
          <h1>{content && content.toUpperCase()}</h1>
          <div className="home__products--container dg g-col-3 g-gap-md">
            {categories.map((category) => {
              if (category.name === content) {
                return category.products.map((product, idx) => (
                  <ProductCard key={idx} product={product} />
                ));
              } else if (content === "all") {
                return category.products.map((product, idx) => (
                  <ProductCard key={idx} product={product} />
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

export default connect(mapStateToProps)(CategoryPage);
