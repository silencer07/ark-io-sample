import React, {useEffect, useState} from "react";
import {shortenId} from "../../utils/utils";
import TransactionDetailsTopNav from "../../components/transaction-details-top-nav/transaction-details-top-nav";
import {useHistory, useParams} from "react-router";
import {useStores} from "../../model/root-store/root-store-context";
import {observer} from "mobx-react-lite";
import {Alert, ErrorAlert} from "../../components/alert/alert";
import {WithWalletAddressRouteParam} from "../../routes";

export const TransactionList: React.FC<any> = observer(() => {
    const {address} = useParams<WithWalletAddressRouteParam>()
    const {walletStore} = useStores()
    const history = useHistory()
    const wallet = walletStore.findByAddress(address)

    if (!wallet) {
        history.replace("/wallet-list")
        return null
    }

    useEffect(() => {
        wallet != null && wallet.fetchTransactions()
    }, [wallet])

    const [fetchMessageClass, setFetchMessageClass] = useState<string | undefined>(undefined)
    useEffect(() => {
        switch (wallet.transactionFetchStatus) {
            case "pending":
                setFetchMessageClass("")
                break
            case "done":
                setFetchMessageClass("transition-all duration-500 ease-out opacity-0")
                setTimeout(() => setFetchMessageClass(undefined), 600)
                break
            case "error":
                setFetchMessageClass(undefined)
                break
        }
    }, [wallet.transactionFetchStatus])

    const transactions = wallet.transactions
    return (
        <div className="flex-1 flex flex-col overflow-y-auto">
            <TransactionDetailsTopNav address={wallet.address}  />
            <h1 className="py-1 my-3">Transaction Details:</h1>
            { (wallet.transactionFetchStatus === "done" && transactions.length === 0) &&
                <Alert message="No Transactions Available" showCloseButton={false} />
            }
            { fetchMessageClass != undefined &&
            <Alert
                message="Refreshing transaction list..."
                showCloseButton={false}
                className={fetchMessageClass}
            />
            }
            { (wallet.transactionFetchStatus === "error") &&
            <ErrorAlert message="Refreshing transaction list failed!" />
            }
            { transactions.length > 0 &&
            <table className="table-auto my-3">
                <thead>
                <tr>
                    <th className="border px-4 py-2">ID</th>
                    <th className="border px-4 py-2">Date</th>
                    <th className="border px-4 py-2">Sender</th>
                    <th className="border px-4 py-2">Recipient</th>
                    <th className="border px-4 py-2">Smartbridge</th>
                    <th className="border px-4 py-2">DARK Amount</th>
                </tr>
                </thead>
                <tbody>
                { transactions.map((t, i) =>
                    <tr key={`transaction-${i}`}>
                        <td className="border px-4 py-2 text-center">{shortenId(t.id)}</td>
                        <td className="border px-4 py-2 text-center">{t.date.toLocaleDateString()}</td>
                        <td className="border px-4 py-2 text-center">{shortenId(t.sender)}</td>
                        <td className="border px-4 py-2 text-center">{shortenId(t.recipient)}</td>
                        <td className="border px-4 py-2 text-center">{shortenId(t.smartBridge)}</td>
                        <td className="border px-4 py-2 text-right">{t.amount}</td>
                    </tr>
                )}
                </tbody>
            </table>
            }
        </div>
    )
})

export default TransactionList
