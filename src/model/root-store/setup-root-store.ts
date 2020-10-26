import {RootStoreModel, RootStore} from "./root-store"

export async function setupRootStore() {
  let rootStore: RootStore
  let data: any

  try {
    // load data from storage
    // data = (await storage.load(ROOT_STATE_STORAGE_KEY)) || {}
    data = {}
    rootStore = RootStoreModel.create(data)
  } catch (e) {
    // if there's any problems loading, then let's at least fallback to an empty state
    // instead of crashing.
    rootStore = RootStoreModel.create({})

    // but please inform us what happened
    console.error(e.message, null)
  }

  // track changes & save to storage
  // onSnapshot(rootStore, (snapshot) => storage.save(ROOT_STATE_STORAGE_KEY, snapshot))

  return rootStore
}
