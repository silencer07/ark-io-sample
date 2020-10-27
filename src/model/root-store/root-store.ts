import {Instance, SnapshotOut, types} from "mobx-state-tree"
import {WalletModel} from "../wallet/wallet";

/**
 * A RootStore model.
 */
export const RootStoreModel = types.model("RootStore").props({
    wallets: types.array(WalletModel)
})

// eslint-disable-line @typescript-eslint/no-unused-vars
type RootStoreType = Instance<typeof RootStoreModel>
export interface RootStore extends RootStoreType {}
type RootStoreSnapshotType = SnapshotOut<typeof RootStoreModel>
export interface RootStoreSnapshot extends RootStoreSnapshotType {}
