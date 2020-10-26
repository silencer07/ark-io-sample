import * as React from "react";
import {Redirect, Route, Switch} from "react-router";
import CreateWallet from "./pages/create-wallet/create-wallet";
import ImportWallet from "./pages/wallet-list/import-wallet";
import WalletList from "./pages/wallet-list/import-wallet";

const Routes = () => (
  <Switch>
      <Route exact={true} path="/" to="/home" render={() => <Redirect to="/home" push={true} />} />
      <Route exact={true} path="/home" component={WalletList} />
      <Route exact={true} path="/import-wallet" component={CreateWallet} />
      <Route exact={true} path="/create-wallet" component={ImportWallet} />
  </Switch>
);

export default Routes;
