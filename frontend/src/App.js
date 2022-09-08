import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import CategoryScreen from "./screens/CategoryScreen";
import { useParams } from "react-router-dom";
import MensScreen from "./screens/MensScreen";
import WomensScreen from "./screens/WomensScreen";
import ChildrensScreen from "./screens/ChildrensScreen";
import ProductListScreen from "./screens/ProductListScreen";

const App = () => {
  // const params = useParams()
  // console.log(params.category)
  return (
    <Router>
      <Header />
      <main className="py-4">
        <Container>
          <h1> Welcome to RAJH Frames</h1>
          {/* <HomeScreen /> */}
          <Route path="/" component={HomeScreen} exact />
          
          <Route path="/category/Mens" component={MensScreen} exact />
          <Route path="/category/Womens" component={WomensScreen} exact />
          <Route path="/category/Childrens" component={ChildrensScreen} exact />
          <Route
            path="/admin/productlist"
            component={ProductListScreen}
            exact
          />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
