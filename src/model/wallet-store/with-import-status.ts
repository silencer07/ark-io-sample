import {observable, IObservableValue} from "mobx"

export type ImportStatusType = "idle" | "pending" | "done" | "error"

export const withImportStatus = () => {
  const importStatus: IObservableValue<string> = observable.box("idle")

  return {
    views: {
      get importStatus() {
        return importStatus.get() as ImportStatusType
      },
      set importStatus(value: ImportStatusType) {
        importStatus.set(value)
      },
    },
    actions: {
      setImportStatus(value: ImportStatusType) {
        importStatus.set(value)
      },
    },
  }
}
