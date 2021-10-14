import React, { PureComponent } from "react";
import AttributeBtn from "./Buttons/AttributeBtn";
class AttributeItems extends PureComponent {
  handleClick = (attribute) => {
    this.props.handleAttributeEvent(attribute);
  };
  render() {
    const { items, type, name, size, btnsDisabled, choosenAttributes } =
      this.props;
    return (
      <div className="attribute__items df ai-c ">
        {items.map((item, itemIdx) => (
          <AttributeBtn
            handleClick={() =>
              this.handleClick({
                name: name,
                type: type,
                value: item.value,
              })
            }
            key={itemIdx}
            size={size}
            name={name}
            type={item.type || type}
            value={item.value}
            attributes={{ type: item.type || type, value: item.value }}
            disabled={btnsDisabled}
            choosenAttributes={choosenAttributes}
          />
        ))}
      </div>
    );
  }
}

export default AttributeItems;
