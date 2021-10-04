import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
class App extends Component {
  render() {
    return this.props.product.length === 0 ? (
      "LOADING..."
    ) : (
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/cart" component={Cart} />
          </Switch>
          {this.props.product.categories.map((item) => (
            <Route exact path={`/categories/${item.name}`}>
              <Home content={item.name} />
            </Route>
          ))}
        </Layout>
      </Router>
    );
  }
}
const mapStateToProps = (state) => ({
  product: state.product.data,
});
export default connect(mapStateToProps)(App);
