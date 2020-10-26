import React from "react";

export interface WalletItemProps {
    walletAddress: string
    darkBalance: number
}

export const WalletItem: React.FC<WalletItemProps> = ({ walletAddress, darkBalance }) => {
    const length = walletAddress.length
    const truncatedAddress = walletAddress.substring(0, 5) +
        "..." +
        walletAddress.substring(length - 4, length)

    return (
        <div className="w-full md:w-1/3 px-2">
            <div className="rounded-lg shadow-sm">
                <div className="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden">
                    <div className="px-3 pt-8 pb-10 text-center relative z-10">
                        <p className="text-xl font-bold text-gray-600 truncate">{truncatedAddress}</p>
                        <p className="text-xl text-gray-700 font-semibold leading-tight my-3">$: {darkBalance}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WalletItem
