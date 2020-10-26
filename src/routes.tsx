import * as React from "react";
import {Redirect, Route, Switch} from "react-router";
import WalletList from "./pages/wallet-list/wallet-list";
import ImportWallet from "./pages/import-wallet/import-wallet";
import CreateWallet from "./pages/create-wallet/create-wallet";
import ParaphraseList from "./pages/create-wallet/paraphrase-list";

const Routes = () => (
  <Switch>
      <Route exact={true} path="/" to="/home" render={() => <Redirect to="/wallet-list" push={true} />} />
      <Route exact={true} path="/wallet-list" component={WalletList} />
      <Route exact={true} path="/import-wallet" component={ImportWallet} />
      <Route exact={true} path="/create-wallet" component={CreateWallet} />
      <Route exact={true} path="/paraphrase-list" component={ParaphraseList} />
  </Switch>
);

export default Routes;
