import React, { Component } from "react";
import Header from "./Header";
class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <Header />
        <main className="layout__main df">{this.props.children}</main>
      </div>
    );
  }
}

export default Layout;
