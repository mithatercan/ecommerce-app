import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Layout from "./components/Layout";
import Spinner from "./components/Spinner";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
class App extends Component {
  render() {
    return this.props.product.length === 0 ? (
      <Spinner />
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
          <Route
            exact
            path="/product/detail/id=:id"
            component={ProductDetail}
          />
          <Route exact path="/" component={Home} />
        </Layout>
      </Router>
    );
  }
}
const mapStateToProps = (state) => ({
  product: state.product.data,
});
export default connect(mapStateToProps)(App);
