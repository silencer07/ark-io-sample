import React from "react";

export const TopBar: React.FC = () => (
    <div className="flex flex-col">
        <nav className="px-4 flex justify-between bg-white h-16 border-b-2">
            <ul className="flex items-center lg:hidden">
                <li className="h-6 w-6">
                    <img
                        className="h-full w-full mx-auto"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/512px-Svelte_Logo.svg.png"
                        alt="svelte logo"/>
                </li>
            </ul>

            <ul className="flex items-center">
                <li>
                    <h1 className="pl-10 lg:pl-0 text-gray-700">Svelte</h1>
                </li>
            </ul>

            <ul className="flex items-center">
                <li className="pr-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-bell">
                        <path
                            d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                    </svg>

                </li>

                <li className="h-8 w-8">
                    <img
                        className="h-full w-full rounded-full mx-auto"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                        alt="profile woman"/>
                </li>

            </ul>

        </nav>
    </div>
)

export default TopBar
