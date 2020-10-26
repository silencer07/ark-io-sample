import {NavLink} from "react-router-dom";
import React from "react";

export interface TransactionDetailsTopNavProps {
    walletAddress: string
}

export const TransactionDetailsTopNav: React.FC<TransactionDetailsTopNavProps> = ({ walletAddress }) => (
    <header className="flex flex-col-reverse md:flex-row bg-gray-100 p-3 md:items-center text-gray-800 font-bold shadow w-full mb-10">
        <div className="container flex flex-wrap">
            <nav className="flex w-full flex-wrap text-base">
                <NavLink to={"transaction-list"} className="mr-5 hover:text-gray-900 cursor-pointer border-b border-transparent hover:border-indigo-600">
                    Transactions
                </NavLink>
                <NavLink to={"delegate-list"} className="mr-5 hover:text-gray-900 cursor-pointer border-b border-transparent hover:border-indigo-600">
                    Delegates
                </NavLink>
            </nav>
        </div>
        <div className="flex">
            <h3>{walletAddress}</h3>
        </div>
    </header>
)

export default TransactionDetailsTopNav
