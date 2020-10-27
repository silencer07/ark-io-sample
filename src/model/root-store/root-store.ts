import {Instance, SnapshotOut, types} from "mobx-state-tree"
import {WalletStoreModel} from "../wallet-store/wallet-store";

export const RootStoreModel = types.model("RootStore").props({
    walletStore: types.optional(WalletStoreModel, {})
})

// eslint-disable-line @typescript-eslint/no-unused-vars
type RootStoreType = Instance<typeof RootStoreModel>
export interface RootStore extends RootStoreType {}
type RootStoreSnapshotType = SnapshotOut<typeof RootStoreModel>
export interface RootStoreSnapshot extends RootStoreSnapshotType {}
