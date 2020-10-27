import {Instance, SnapshotOut, types} from "mobx-state-tree"

export const DelegateModel = types.model("Delegate").props({
    username: types.identifier,
    vote: types.number
})

// eslint-disable-line @typescript-eslint/no-unused-vars
type DelegateType = Instance<typeof DelegateModel>
export interface Delegate extends DelegateType {}
type DelegateSnapshotType = SnapshotOut<typeof DelegateModel>
export interface DelegateSnapshot extends DelegateSnapshotType {}
