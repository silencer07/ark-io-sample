import React from "react";
import TransactionDetailsTopNav from "../../components/transaction-details-top-nav/transaction-details-top-nav";

export const DelegateList: React.FC<any> = () => {
    return (
        <div className="overflow-y-auto">
            <div className="flex-1 flex flex-col">
                <TransactionDetailsTopNav walletAddress="DS7xPYidDHNtinPSv5L2kXsvhgS3MYpEsV" />
                <h1 className="py-1">Delegate Details:</h1>
                <table className="table-fixed">
                    <thead>
                    <tr>
                        <th className="border px-4 py-2 w-1/12">Rank</th>
                        <th className="border px-4 py-2 w-10/12">Username</th>
                        <th className="border px-4 py-2 w-1/12">Vote %</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="border px-4 py-2 text-center">1</td>
                        <td className="border px-4 py-2 text-center">alessio</td>
                        <td className="border px-4 py-2 text-right">16.01%</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default DelegateList
