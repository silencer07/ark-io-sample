import {observable, IObservableValue} from "mobx"
import {StatusType} from "../extensions/with-status";

export type TransactionFetchType = StatusType

export const withTransactionFetchStatus = () => {
  const transactionFetchStatus: IObservableValue<string> = observable.box("idle")

  return {
    views: {
      // a getter
      get transactionFetchStatus() {
        return transactionFetchStatus.get() as TransactionFetchType
      },
      // as setter
      set transactionFetchStatus(value: TransactionFetchType) {
        transactionFetchStatus.set(value)
      },
    },
    actions: {
      setTransactionFetchStatus(value: TransactionFetchType) {
        transactionFetchStatus.set(value)
      },
    },
  }
}
