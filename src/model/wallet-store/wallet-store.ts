import {applySnapshot, flow, Instance, SnapshotOut, types} from "mobx-state-tree"
import {WalletModel, WalletSnapshot} from "../wallet/wallet";
import {withImportStatus} from "./with-import-status";

const ROOT_URL = "/api/wallets"

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
                const response = yield fetch(`${ROOT_URL}/${address}`, {
                    headers: new Headers({'content-type': 'application/json'})
                })
                if (response.ok) {
                    const json = yield response.json()
                    const snapshot = {
                        address: json.data.address,
                        darkAmount: parseInt(json.data.balance, 10) / 1_000_000
                    } as WalletSnapshot

                    const existing = self.findByAddress(address)
                    if (existing) {
                        applySnapshot(existing, snapshot)
                    } else {
                        self.wallets.push(snapshot)
                    }

                    self.importStatus = "done"
                } else {
                    self.setImportStatus("error")
                }
            } catch (e) {
                console.error("Failed to fetch wallet", e)
                self.setImportStatus("error")
            }
        })
    }))


// eslint-disable-line @typescript-eslint/no-unused-vars
type WalletStoreType = Instance<typeof WalletStoreModel>
export interface WalletStore extends WalletStoreType {}
type WalletStoreSnapshotType = SnapshotOut<typeof WalletStoreModel>
export interface WalletStoreSnapshot extends WalletStoreSnapshotType {}
