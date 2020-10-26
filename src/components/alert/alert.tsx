import React from "react";
import {FaInfoCircle} from "react-icons/fa";
import {AiOutlineClose} from "react-icons/ai";

export interface AlertProps {
    message: string
}

export const Alert: React.FC<AlertProps> = ({ message }) => (
    <div className="flex-1 border-green-500 border-2 bg-gray-100 flex items-center text-sm font-bold px-4 py-3 relative md:mx-6 my-3 md:my-0 max-h-3"
        role="alert">
        <FaInfoCircle className="fill-current w-4 h-4 mr-2"/>
        <p>{message}</p>
        <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <AiOutlineClose className="fill-current h-6 w-6" role="button"/>
        </span>
    </div>
)
