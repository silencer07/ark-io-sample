import {observable, IObservableValue} from "mobx"
import {StatusType} from "../extensions/with-status";

export type ImportStatusType = StatusType

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
