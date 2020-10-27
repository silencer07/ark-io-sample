import {Instance, SnapshotOut, types} from "mobx-state-tree"

export const TransactionModel = types.model("Transaction").props({
    id: types.identifier,
    date: types.Date,
    sender: types.string,
    recipient : types.string,
    smartBridge: types.string,
    amount: types.number
})

// eslint-disable-line @typescript-eslint/no-unused-vars
type TransactionType = Instance<typeof TransactionModel>
export interface Transaction extends TransactionType {}
type TransactionSnapshotType = SnapshotOut<typeof TransactionModel>
export interface TransactionSnapshot extends TransactionSnapshotType {}
