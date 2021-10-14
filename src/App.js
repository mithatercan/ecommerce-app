import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";
import Layout from "./components/Layout";
import Spinner from "./components/Spinner";
import CategoryPage from "./pages/CategoryPage";
import CartPage from "./pages/CartPage";
import ProductDetailPage from "./pages/ProductDetailPage";
class App extends Component {
  render() {
    const { product } = this.props;
    return product.length === 0 ? (
      <Spinner />
    ) : (
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/cart" component={CartPage} />
          </Switch>
          {product.categories.map((item) => (
            <Route exact path={`/categories/${item.name}`}>
              <CategoryPage content={item.name} />
            </Route>
          ))}
          <Route
            exact
            path="/product/detail/category=:category/id=:id"
            component={ProductDetailPage}
          />
          <Route exact path="/all">
            <CategoryPage content="all" />
          </Route>
          <Route exact path="/" render={(props) => <Redirect to="/all" />} />
        </Layout>
      </Router>
    );
  }
}
const mapStateToProps = (state) => ({
  product: state.product.data,
});
export default connect(mapStateToProps)(App);
