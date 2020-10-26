import React from "react";
import {SuccessButton} from "../../components/button/button";
import {InputWithLabel} from "../../components/input-with-label/input-with-label";
import {Alert} from "../../components/alert/alert";

export const ImportWallet: React.FC = () => (
    <div>
        <h1>Import Wallet</h1>
        <div className="bg-white text-gray-600 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
            <InputWithLabel id="address" title="Address" />
            <div className="md:w-full md:flex flex-row items-center" style={{ minHeight: "8.5rem" }}>
                <SuccessButton title="Add" />
                <Alert message={"Wallet successfully imported!"} />
            </div>
        </div>
    </div>

)

export default ImportWallet
