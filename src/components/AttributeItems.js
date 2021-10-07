import React, { Component } from "react";
import AttributeBtn from "./Buttons/AttributeBtn";
class AttributeItems extends Component {
  handleClick = (attribute) => {
    this.props.handleAttributeEvent(attribute);
  };
  render() {
    const { attributeItems, attributeName } = this.props;
    return (
      <div className="df ai-c ">
        {attributeItems.map((item, itemIdx) => (
          <AttributeBtn
            handleClick={() =>
              this.handleClick({
                name: attributeName,
                value: item.value,
              })
            }
            key={itemIdx}
            color={(item.name || attributeName) === "Color" ? item.value : null}
            value={item.value}
            attributes={{ name: attributeName, value: item.value }}
          />
        ))}
      </div>
    );
  }
}

export default AttributeItems;
