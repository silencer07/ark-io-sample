import React from "react";
import {FaInfoCircle} from "react-icons/fa";
import {AiOutlineClose} from "react-icons/ai";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    message: string
    onCloseButtonClick?: () => void
}

export const Alert: React.FC<AlertProps> = ({ message, onCloseButtonClick  , className,...props  }) => (
    <div
        className={
            "border-gray-500 bg-gray-100 border-2 flex-1 " +
            " text-gray-800 flex items-center text-sm font-bold " +
            " px-4 py-3 relative md:mx-6 my-3 md:my-0 max-h-3 " +
            className
        }
        role="alert"
        {...props}
    >
        <FaInfoCircle className="fill-current w-4 h-4 mr-2"/>
        <p>{message}</p>
        <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <AiOutlineClose className="fill-current h-6 w-6" role="button" onClick={onCloseButtonClick}/>
        </span>
    </div>
)

export const SuccessAlert: React.FC<AlertProps> = (props) => (
    <Alert {...props} className={`border-green-500 bg-green-100 text-green-800 ${props.className}`} />
)

export const ErrorAlert: React.FC<AlertProps> = (props) => (
    <Alert {...props} className={`border-red-500 bg-red-100 text-red-800 ${props.className}`} />
)
