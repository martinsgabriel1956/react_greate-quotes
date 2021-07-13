import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { ProductDetails } from "./pages/ProductDetails";
import { Products } from "./pages/Products";
import { Register } from "./pages/Register";
import "./styles/global.js";

export function Routes() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home"  component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/products" component={Products} />
          <Route path="/product-detail/:id " component={ProductDetails} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
