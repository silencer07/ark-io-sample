import React from "react";
import {shortenId} from "../../utils/utils";
import TransactionDetailsTopNav from "../../components/transaction-details-top-nav/transaction-details-top-nav";

export const TransactionList: React.FC<any> = () => {
    return (
        <div className="overflow-y-auto">
            <div className="flex-1 flex flex-col">
                <TransactionDetailsTopNav walletAddress="DS7xPYidDHNtinPSv5L2kXsvhgS3MYpEsV"  />
                <h1 className="py-1">Delegate Details:</h1>
                <table className="table-auto">
                    <thead>
                    <tr>
                        <th className="border px-4 py-2">ID</th>
                        <th className="border px-4 py-2">Date</th>
                        <th className="border px-4 py-2">Sender</th>
                        <th className="border px-4 py-2">Recepient</th>
                        <th className="border px-4 py-2">Smartbridge</th>
                        <th className="border px-4 py-2">DARK Amount</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="border px-4 py-2 text-center">{shortenId("7694762b16ef0abae3db6baaa96f88cffa86d8e0221c7e1f4fe8bf413dcb0081")}</td>
                        <td className="border px-4 py-2 text-center">{(new Date()).toLocaleString()}</td>
                        <td className="border px-4 py-2 text-center">{shortenId("DS7xPYidDHNtinPSv5L2kXsvhgS3MYpEsV")}</td>
                        <td className="border px-4 py-2 text-center">{shortenId("DEVJSbVzw4W7gztrgiBtn73hTGenhQCb44")}</td>
                        <td className="border px-4 py-2 text-center">{""}</td>
                        <td className="border px-4 py-2 text-right">1.00</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default TransactionList
