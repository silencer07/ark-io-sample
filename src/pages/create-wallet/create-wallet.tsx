import React from "react";
import CandidateWallet from "./candidate-wallet";
import {InfoButton} from "../../components/button/button";
import {useHistory} from "react-router";

export const CreateWallet: React.FC = () => {
    const history = useHistory()
    return (
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
            <InfoButton title="Next" onClick={() => history.push("/paraphrase-list")} />
        </div>
    )
}

export default CreateWallet
