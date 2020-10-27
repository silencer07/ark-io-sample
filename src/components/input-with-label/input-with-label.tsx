import React, {DetailedHTMLProps, InputHTMLAttributes} from "react";

export interface InputWithLabelProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    title: string
}

export const InputWithLabel: React.FC<InputWithLabelProps> = ({ id, title, ...props }) => (
    <div className="md:w-full px-3 mb-2">
        <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor={id}>
            {title}
        </label>
        <input
            className="appearance-none block w-full bg-gray-100 text-gray-600 border border-gray-600 rounded py-3 px-4"
            id={id}
            type="text"
            {...props}
        />
    </div>
)
