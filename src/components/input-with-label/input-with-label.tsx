import React from "react";

export interface InputWithLabelProps {
    id: string
    title: string
}

export const InputWithLabel: React.FC<InputWithLabelProps> = ({ id, title }) => (
    <div className="-mx-3 md:flex mb-6">
        <div className="md:w-full px-3">
            <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor={id}>
                {title}
            </label>
            <input
                className="appearance-none block w-full bg-gray-100 text-gray-600 border border-gray-600 rounded py-3 px-4"
                id={id} type="text"/>
        </div>
    </div>
)
