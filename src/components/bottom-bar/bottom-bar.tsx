import React from "react";
import { RiWalletFill } from 'react-icons/ri'
import { AiOutlineImport } from 'react-icons/ai'
import { BsFilePlus } from 'react-icons/bs'
import {NavLink} from "react-router-dom";

interface NavBarIconProps {
    linkTo: string
    tabIndex: number
}

const NavBarIcon: React.FC<NavBarIconProps> = ({ linkTo, tabIndex, children }) => (
    <NavLink
        to={linkTo}
        tabIndex={tabIndex}
        activeClassName="bg-gray-300 text-orange-600"
        className="flex flex-col flex-grow items-center justify-center
			overflow-hidden whitespace-no-wrap text-sm transition-colors
			duration-100 ease-in-out hover:bg-gray-200">
        {children}
    </NavLink>
)


export const BottomBar: React.FC = () => (
    <nav className="fixed bottom-0 w-full border bg-white lg:hidden flex overflow-x-auto">
        <NavBarIcon linkTo="/wallet-list" tabIndex={1}>
            <RiWalletFill className="text-2xl" />
        </NavBarIcon>
        <NavBarIcon linkTo="/import-wallet" tabIndex={2}>
            <AiOutlineImport className="text-2xl" />
        </NavBarIcon>
        <NavBarIcon linkTo="/create-wallet" tabIndex={3}>
            <BsFilePlus className="text-2xl" />
        </NavBarIcon>
    </nav>
)

export default BottomBar
