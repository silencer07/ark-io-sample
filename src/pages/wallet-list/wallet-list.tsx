import React from "react";
import WalletItem from "../../components/wallet-item/wallet-item";
import {useHistory} from "react-router";
import {useStores} from "../../model/root-store/root-store-context";
import {observer} from "mobx-react-lite";
import {Alert} from "../../components/alert/alert";

export const WalletList: React.FC = observer(() => {
    const {walletStore} = useStores()
    const {wallets} = walletStore

    const history = useHistory()
    return (
        <div>
            <h1>My Wallet</h1>
            { (wallets.length === 0) &&
            <Alert message="Wallet is empty!" showCloseButton={false} className="mt-3" />
            }
            <div className="flex px-5 py-5">
                <div className="w-full max-w-3xl">
                    <div className="-mx-2 md:flex">
                        { wallets.map((w,i) =>
                            <WalletItem
                                tabIndex={i + 10}
                                key={`wallet-item-${w.address}`}
                                walletAddress={w.address}
                                darkBalance={w.darkAmount}
                                onClick={() => history.push(`/transaction-list/${w.address}`)}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
})

export default WalletList
