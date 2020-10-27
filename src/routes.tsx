import * as React from "react";
import {Redirect, Route, Switch} from "react-router";
import WalletList from "./pages/wallet-list/wallet-list";
import ImportWallet from "./pages/import-wallet/import-wallet";
import CreateWallet from "./pages/create-wallet/create-wallet";
import ParaphraseList from "./pages/create-wallet/paraphrase-list";
import DelegateList from "./pages/delegate-list/delegate-list";
import TransactionList from "./pages/transaction-list/transaction-list";

export interface WithWalletAddressRouteParam {
      address: string
}

const Routes = () => (
  <Switch>
      <Route exact path="/" to="/home" render={() => <Redirect to="/wallet-list" push={true} />} />
      <Route exact path="/wallet-list" component={WalletList} />
      <Route exact path="/import-wallet" component={ImportWallet} />
      <Route exact path="/create-wallet" component={CreateWallet} />
      <Route exact path="/paraphrase-list" component={ParaphraseList} />
      <Route strict sensitive path="/transaction-list/:address" component={TransactionList} />
      <Route strict sensitive path="/delegate-list/:address" component={DelegateList} />
  </Switch>
);

export default Routes;
