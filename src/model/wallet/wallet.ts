import {Instance, SnapshotOut, types} from "mobx-state-tree"
import {TransactionModel} from "../transaction/transaction";

export const WalletModel = types.model("Wallet").props({
    address: types.identifier,
    darkAmount: types.number,
    transactions: types.array(TransactionModel)
})

// eslint-disable-line @typescript-eslint/no-unused-vars
type WalletType = Instance<typeof WalletModel>
export interface Wallet extends WalletType {}
type WalletSnapshotType = SnapshotOut<typeof WalletModel>
export interface WalletSnapshot extends WalletSnapshotType {}
