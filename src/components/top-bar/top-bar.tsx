import React from "react";
import logo from "../../logo.svg"
import profilePhoto from "../../profile.jpg"

export const TopBar: React.FC = () => (
    <div className="flex flex-col">
        <nav className="px-4 flex justify-between bg-white h-16 border-b-2">
            <ul className="flex items-center lg:hidden">
                <li className="h-6 w-6">
                    <img
                        className="h-full w-full mx-auto"
                        src={logo}
                        alt="ark.io"/>
                </li>
            </ul>

            <ul className="flex items-center">
                <li>
                    <h1 className="pl-10 lg:pl-0 text-gray-700">Ark.io Sample</h1>
                </li>
            </ul>

            <ul className="flex items-center">
                <li className="h-8 w-8">
                    <img
                        className="h-full w-full rounded-full mx-auto"
                        src={profilePhoto}
                        alt="Aldrin's most handsome photo"/>
                </li>

            </ul>

        </nav>
    </div>
)

export default TopBar
