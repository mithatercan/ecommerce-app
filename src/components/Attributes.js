import React, { Component } from "react";
import AttributeItems from "./AttributeItems";
class Attributes extends Component {
  //This event is from AttributeItems componenet comes from AttributeBtn.
  handleClick = (attribute) => {
    this.props.handleAttributeEvent(attribute);
  };
  render() {
    // This get product prop and map the product attributes.
    const { attributes, choosenAttributes } = this.props;
    return attributes.map((attribute, idx) => (
      <div key={idx}>
        <h3 className="product-detail__attributes--name">
          {attribute.name.toUpperCase()} :
        </h3>
        <div key={idx} className="product-detail__attributes--btns">
          <div className="df ai-c ">
            <AttributeItems
              handleAttributeEvent={(attribute) => {
                this.handleClick(attribute);
              }}
              choosenAttributes={choosenAttributes}
              items={attribute.items}
              name={attribute.name}
              type={attribute.type}
              size="lg"
            />
          </div>
        </div>
      </div>
    ));
  }
}

export default Attributes;
