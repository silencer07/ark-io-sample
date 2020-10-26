import * as React from "react";
import {Redirect, Route, Switch} from "react-router";
import Home from "./pages/home/home";

const Routes = () => (
  <Switch>
      <Route exact={true} path="/" to="/home" render={() => <Redirect to="/home" push={true} />} />
      <Route exact={true} path="/home" component={Home} />
  </Switch>
);

export default Routes;
