import React, { Component } from "react";
import Header from "./Header";
class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <Header />
        <main>{this.props.children}</main>
        <footer>Made with love</footer>
      </div>
    );
  }
}

export default Layout;
