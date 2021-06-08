import React from "react";
import Products from "./Products";
import Home from "./Home";
import AddProduct from './AddProduct'
import {Route, Switch } from "react-router-dom";

const Pages = () => {
  return (
      <main>
        <Switch>

          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/products" exact>
            <Products />
          </Route>

          <Route path="/add-product" exact>
            <AddProduct />
          </Route>
        </Switch>
      </main>
  );
};

export default Pages;
