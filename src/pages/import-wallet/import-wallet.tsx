import React from "react";
import {FaInfoCircle} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'

export const ImportWallet: React.FC = () => (
    <div>
        <h1>Import Wallet</h1>
        <div className="bg-white text-gray-600 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
            <div className="-mx-3 md:flex mb-6">
                <div className="md:w-full px-3">
                    <label className="block uppercase tracking-wide text-xs font-bold mb-2"
                           htmlFor="address">
                        Address
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-100 text-gray-600 border border-gray-100 rounded py-3 px-4"
                        id="address" type="text"/>
                </div>
            </div>
            <div className="md:w-full md:flex flex-row items-center" style={{ minHeight: "8.5rem" }}>
                <button
                    type="button"
                    className="border border-green-500 bg-green-500 text-white rounded-md px-12 py-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
                >
                    Add
                </button>
                <div
                    className="flex-1 border-green-500 border-2 bg-gray-100 flex items-center text-sm font-bold px-4 py-3 relative md:mx-6 my-3 md:my-0 max-h-3"
                    role="alert">
                    <FaInfoCircle className="fill-current w-4 h-4 mr-2"/>
                    <p>Wallet successfully imported!</p>
                    <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                        <AiOutlineClose className="fill-current h-6 w-6" role="button"/>
                    </span>
                </div>
            </div>
        </div>
    </div>

)

export default ImportWallet
