import React from "react";
import Products from "./Products";
import Home from "./Home";
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
        </Switch>
      </main>
  );
};

export default Pages;
