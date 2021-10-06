import React, { Component } from "react";
import AttributeBtn from "./Buttons/AttributeBtn";

export class Attributes extends Component {
  render() {
    // This get product prop and map the product attributes.
    const { product } = this.props;
    return product.attributes.map((attribute, idx) => (
      <div>
        <h3 className="product-detail__attributes--name">
          {attribute.name.toUpperCase()} :
        </h3>
        <div key={idx} className="product-detail__attributes--btns">
          {attribute.items.map((item, itemIdx) => (
            <AttributeBtn
              key={itemIdx}
              color={attribute.name === "Color" && item.value}
              value={item.value}
              attribute={{ name: attribute.name, value: item.value }}
            />
          ))}
        </div>
      </div>
    ));
  }
}

export default Attributes;
