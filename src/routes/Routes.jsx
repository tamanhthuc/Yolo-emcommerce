import React from "react";

import { Route, Switch } from "react-router-dom";
import Cart from "../pages/Cart";
import Catalog from "../pages/Catalog";
import Female from "../pages/Female";
import FemaleProduct from "../pages/FemaleProduct";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Children from "../pages/Children";
import ChildrenProduct from "../pages/ChildrenProduct";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/nam/:slug" component={Product} />
      <Route path="/nam" component={Catalog} />
      <Route path="/cart" component={Cart} />
      <Route path="/nu/:slug" component={FemaleProduct} />
      <Route path="/nu" component={Female} />
      <Route path="/tre-em" component={Children} />
      <Route path="/tre-em:slug" component={ChildrenProduct} />
    </Switch>
  );
};

export default Routes;
