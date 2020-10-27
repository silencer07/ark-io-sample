import React, {DetailedHTMLProps, HTMLAttributes} from "react";
import {shortenId} from "../../utils/utils";

export interface WalletItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    walletAddress: string
    darkBalance: number
}

export const WalletItem: React.FC<WalletItemProps> = ({walletAddress, darkBalance, ...props}) => (
    <div className={`w-full md:w-1/3 px-2 py-2 md:py-0 ${props.className}`} {...props}>
        <div className="rounded-lg shadow-sm">
            <div className="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden">
                <div className="px-3 pt-8 pb-10 text-center relative z-10">
                    <p className="text-xl font-bold text-gray-600 truncate">{shortenId(walletAddress)}</p>
                    <p className="text-xl text-gray-700 font-semibold leading-tight my-3">$: {darkBalance}</p>
                </div>
            </div>
        </div>
    </div>
)

export default WalletItem
