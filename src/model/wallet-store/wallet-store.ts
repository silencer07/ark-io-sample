import {applySnapshot, flow, Instance, SnapshotOut, types} from "mobx-state-tree"
import {WalletModel, WalletSnapshot} from "../wallet/wallet";
import {withImportStatus} from "./with-import-status";
import {COMMON_HEADERS, parseAmount, WALLET_ROOT_URL} from "../common";

export const WalletStoreModel = types.model("WalletStore").props({
    wallets: types.array(WalletModel)
})
    .views(self => ({
        findByAddress: function (address: string){
            return self.wallets.find(w => w.address === address)
        }
    }))
    .extend(withImportStatus)
    .actions(self => ({
        import: flow( function * (address: string) {
            try {
                self.importStatus = "pending"
                const response = yield fetch(`${WALLET_ROOT_URL}/${address}`, {
                    headers: new Headers(COMMON_HEADERS)
                })
                if (response.ok) {
                    const json = yield response.json()
                    const snapshot = {
                        address: json.data.address,
                        darkAmount: parseAmount(json.data.balance)
                    } as WalletSnapshot

                    const existing = self.findByAddress(address)
                    if (existing) {
                        applySnapshot(existing, snapshot)
                    } else {
                        self.wallets.push(snapshot)
                    }

                    self.importStatus = "done"
                } else {
                    self.importStatus = "error"
                }
            } catch (e) {
                console.error("Failed to fetch wallet", e)
                self.importStatus = "error"
            }
        })
    }))


// eslint-disable-line @typescript-eslint/no-unused-vars
type WalletStoreType = Instance<typeof WalletStoreModel>
export interface WalletStore extends WalletStoreType {}
type WalletStoreSnapshotType = SnapshotOut<typeof WalletStoreModel>
export interface WalletStoreSnapshot extends WalletStoreSnapshotType {}
