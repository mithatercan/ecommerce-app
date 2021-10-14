import React, { PureComponent } from "react";

class ErrorAlert extends PureComponent {
  render() {
    const { error } = this.props;
    return (
      <div className={error ? "error error__active" : "error"}>{error}</div>
    );
  }
}

export default ErrorAlert;
