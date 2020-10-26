import React from "react";
import logo from "../../logo.svg";
import {NavLink} from "react-router-dom";
import {RiWalletFill} from "react-icons/ri";
import {AiOutlineImport} from "react-icons/ai";
import {BsFilePlus} from "react-icons/bs";

interface NavBarIconProps {
    linkTo: string
}

const NavBarIcon: React.FC<NavBarIconProps> = ({ linkTo, children }) => (
    <NavLink
        to={linkTo}
        activeClassName="bg-gray-300 text-orange-600"
        className="h-16 px-6 flex flex justify-center items-center w-fullfocus:text-orange-500">
        {children}
    </NavLink>
)


export const SideBar: React.FC = () => (
    <aside
        className="hidden lg:flex flex-col items-center bg-white text-gray-700 shadow
		h-full">
        <div className="h-16 flex items-center w-full">
            <a className="h-6 w-6 mx-auto" href="http://svelte.dev/">
                <img
                    className="h-full w-full mx-auto"
                    src={logo}
                    alt="ark.io"/>
            </a>
        </div>
        <ul>
            <li className="hover:bg-gray-100">
                <NavBarIcon linkTo="/wallet-list">
                    <RiWalletFill className="text-2xl" />
                </NavBarIcon>
            </li>
            <li className="hover:bg-gray-100">
                <NavBarIcon linkTo="/import-wallet">
                    <AiOutlineImport className="text-2xl" />
                </NavBarIcon>
            </li>

            <li className="hover:bg-gray-100">
                <NavBarIcon linkTo="/create-wallet">
                    <BsFilePlus className="text-2xl" />
                </NavBarIcon>
            </li>

        </ul>
    </aside>
)

export default SideBar
