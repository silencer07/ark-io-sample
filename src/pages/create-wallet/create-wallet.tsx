import React from "react";
import WalletItem from "../../components/wallet-item/wallet-item";
import CandidateWallet from "./candidate-wallet";
import {InfoButton} from "../../components/button/button";

export const CreateWallet: React.FC = () => (
    <div>
        <h1>Choose Wallet to create:</h1>
        <div className="flex px-5 py-5">
            <div className="w-full max-w-3xl">
                <div className="-mx-2 md:flex">
                    <CandidateWallet walletAddress={"AAAASbVzw4W7gztrgiBtn73hTGenhQCb44"} />
                    <CandidateWallet walletAddress={"BBBBPYidDHNtinPSv5L2kXsvhgS3MYpEsV"} />
                </div>
            </div>
        </div>
        <InfoButton title="Prev" />
        <InfoButton title="Next" />
    </div>
)

export default CreateWallet
