import React from "react";
import WalletItem from "../../components/wallet-item/wallet-item";
import {useHistory} from "react-router";

export const WalletList: React.FC = () => {
    const history = useHistory()
    return (
        <div>
            <h1>My Wallet</h1>
            <div className="flex px-5 py-5">
                <div className="w-full max-w-3xl">
                    <div className="-mx-2 md:flex">
                        <WalletItem
                            walletAddress={"DEVJSbVzw4W7gztrgiBtn73hTGenhQCb44"}
                            darkBalance={1.00}
                            onClick={() => history.push("/transaction-list")}
                        />
                        <WalletItem
                            walletAddress={"DS7xPYidDHNtinPSv5L2kXsvhgS3MYpEsV"}
                            darkBalance={998.93721448}
                            onClick={() => history.push("/transaction-list")}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WalletList
