import {RootStoreModel, RootStore} from "./root-store"
import {onSnapshot} from "mobx-state-tree";

const ROOT_STATE_STORAGE_KEY = "ark-io-data"

export async function setupRootStore() {
  let rootStore: RootStore
  let data: any = localStorage.getItem("ROOT_STATE_STORAGE_KEY") || {}

  try {
    rootStore = RootStoreModel.create(data)
  } catch (e) {
    rootStore = RootStoreModel.create({})
    console.error(e.message, null)
  }

  // track changes & save to storage
  onSnapshot(rootStore, (snapshot) => localStorage.setItem(ROOT_STATE_STORAGE_KEY, JSON.stringify(snapshot)))

  return rootStore
}
