import React from "react";

export interface CandidateWalletProps {
    walletAddress: string
}

export const CandidateWallet: React.FC<CandidateWalletProps> = ({ walletAddress }) => {
    return (
        <div className="w-full md:w-1/3 px-2 py-2 md:py-0">
            <div className="rounded-lg shadow-sm">
                <div className="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden">
                    <div className="px-3 pt-8 pb-10 text-center relative z-10">
                        <p className="text-xl font-bold text-gray-600 break-words">{walletAddress}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CandidateWallet
