import {applySnapshot, flow, Instance, SnapshotOut, types} from "mobx-state-tree"
import {TransactionModel, TransactionSnapshot} from "../transaction/transaction";
import {DelegateModel} from "../delegates/delegate";
import {withTransactionFetchStatus} from "./with-transaction-fetch-status";
import {COMMON_HEADERS, parseAmount, TRANSACTION_URL} from "../common";

export const WalletModel = types.model("Wallet").props({
    address: types.identifier,
    darkAmount: types.number,
    transactions: types.array(TransactionModel),
    delegates: types.array(DelegateModel)
})
    .views(self => ({
        findTransactionById: function (id: string) {
            return self.transactions.find(t => t.id === id)
        }
    }))
    .extend(withTransactionFetchStatus)
    .actions(self => ({
        fetchTransactions: flow(function * (): Generator<Promise<any>, any, any>{
            try {
                self.transactionFetchStatus = "pending"
                const url = TRANSACTION_URL.replace("{0}", self.address)
                const response = yield fetch(url, {
                    headers: new Headers(COMMON_HEADERS)
                })
                if (response.ok) {
                    const transactionsJson = yield response.json()
                    console.log("transactionJson", transactionsJson)
                    transactionsJson.data.forEach((t: any) => {
                        const snapshot = {
                            id: t.id,
                            amount: parseAmount(t.amount) * (t.recipient === self.address ? 1 : -1),
                            date: parseInt(t.timestamp.unix) * 1000,
                            recipient: t.recipient,
                            sender: t.sender,
                            smartBridge: t.signature
                        } as TransactionSnapshot

                        const existing = self.findTransactionById(snapshot.id)
                        if (existing) {
                            applySnapshot(existing, snapshot)
                        } else {
                            self.transactions.push(snapshot)
                        }
                    })
                    self.transactionFetchStatus = "done"
                } else {
                    self.transactionFetchStatus = "error"
                }
            } catch (e) {
                console.error("Failed to fetch wallet", e)
                self.transactionFetchStatus = "error"
            }
        })
    }))

// eslint-disable-line @typescript-eslint/no-unused-vars
type WalletType = Instance<typeof WalletModel>
export interface Wallet extends WalletType {}
type WalletSnapshotType = SnapshotOut<typeof WalletModel>
export interface WalletSnapshot extends WalletSnapshotType {}
