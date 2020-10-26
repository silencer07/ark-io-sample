import React from "react";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>{
    title: string
}

export const Button:React.FC<ButtonProps> = ({ title, className }) => (
    <button
        type="button"
        className={className}
    >
        {title}
    </button>
)

export const SuccessButton: React.FC<ButtonProps> = (props) => (
    <Button {...props} className={"border-green-500 bg-green-500 hover:bg-green-600"} />
)

export const InfoButton: React.FC<ButtonProps> = (props) => (
    <Button {...props} className={"border-blue-500 bg-blue-500 hover:bg-blue-600"} />
)
