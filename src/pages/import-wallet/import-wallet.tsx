import React, {useEffect, useState} from "react";
import {SuccessButton} from "../../components/button/button";
import {InputWithLabel} from "../../components/input-with-label/input-with-label";
import {ErrorAlert} from "../../components/alert/alert";
import {observer} from "mobx-react-lite";
import {useStores} from "../../model/root-store/root-store-context";
import {useHistory} from "react-router";
import _ from "lodash"

export const ImportWallet: React.FC = observer(() => {
    const [showErrorMessage, setShowErrorMessage] = useState(false)
    const [address, setAddress] = useState("")

    const {walletStore} = useStores()
    const {importStatus, setImportStatus} = walletStore

    const history = useHistory()

    useEffect(() => setImportStatus("idle"))

    useEffect(() => {
        if (importStatus === "done") {
            history.push("/transaction-list") // TODO add url param here
        } else if (importStatus === "error"){
            setShowErrorMessage(true)
        }
    }, [importStatus, history])

    const doImport = () => walletStore.import(_.trim(address))

    return (
        <div>
            <h1>Import Wallet</h1>
            <form
                className="bg-white text-gray-600 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2"
                onSubmit={(e) => {
                    e.preventDefault()
                    doImport()
                }}
            >
                <InputWithLabel
                    id="address"
                    title="Address"
                    tabIndex={10}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <div className="md:w-full md:flex flex-row items-center" style={{minHeight: "8.5rem"}}>
                    <SuccessButton
                        title="Add"
                        tabIndex={11}
                        type={"button"}
                        onClick={doImport}
                    />
                    { showErrorMessage &&
                    <ErrorAlert
                        message={"Cannot import wallet. Make sure that the address is correct."}
                        onCloseButtonClick={() => setShowErrorMessage(false)}
                    />
                    }
                </div>
            </form>
        </div>

    )
})

export default ImportWallet
