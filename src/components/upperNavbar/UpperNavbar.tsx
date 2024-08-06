import React, { useState } from 'react'
import ArrowLogo from "../../assets/icons/lucide_arrow-right.png";
import WhishlistIcon from "../../assets/icons/wishlist_icon.png";
import CartIcon from "../../assets/icons/cart_icon.png";
import Logo from "../../assets/logo/AmbeyTraders 2.png";
import SearchIcon from "../../assets/icons/serach_icon.png";
import Avatar from "../../assets/icons/avatar_image.png";
import { FaChevronDown } from "react-icons/fa";


import "./upperNavbar.css";
import { upperNavbarDropdownContent } from '../../constants';
import { PersonDetails } from '../../types';

const UpperNavbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
    const [personDetails, setPersonDetails] = useState<PersonDetails>({
        name: "John Doe",
        phone_no: 9787654329
    })

    const handleToggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }
    return (
        <div className='upper-navbar-container'>
            <div className='logo flex justify-start items-center'>
                <span>
                    <img src={ArrowLogo} width={24} height={24} alt="arrow-icon" />
                </span>
                <span>
                    <img src={Logo} width={178} height={49} alt="main-logo" />
                </span>
            </div>
            <div className='search-bar'>
                <span>
                    <img src={SearchIcon} width={40} height={40} alt="serach-logo" />
                </span>
                <span><input type="text" placeholder="Search..." /></span>
            </div>
            <div className='select-language'>
                <span>Select Language</span>
                <span className='font-white'><FaChevronDown /></span>
            </div>
            <div className='flex justify-center items-center flex-row'>
                <div className='whishlist-container flex justify-between items-center mr-5'>
                    <span className='mr-2'>
                        <img src={WhishlistIcon} width={24} height={24} alt="icon" />
                    </span>
                    <span>Whishlist</span>
                </div>
                <div className='cart-container flex justify-between items-center'>
                    <span className='mr-2'>
                        <img src={CartIcon} width={24} height={24} alt="icon" />
                    </span>
                    <span>Cart</span>
                </div>
            </div>
            <div className='avatar-container flex justify-between items-center cursor-pointer' onClick={handleToggleSidebar}>
                <span >
                    <img src={Avatar} width={42} height={41} alt="avatar-image" />
                </span>
                <span>Abcd</span>
            </div>
            {isSidebarOpen && (
                <div className="absolute right-0 top-0 mt-30 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                    <div className='avatar flex justify-start items-center m-5' onClick={handleToggleSidebar}>
                        <div className='mr-5'>
                            <img src={Avatar} width={42} height={41} alt="avatar-image" />
                        </div>
                        <div className='flex flex-col justify-start items-start'>
                            <div>{personDetails.name}</div>
                            <div>{personDetails.phone_no}</div>
                        </div>
                    </div>
                    <ul>
                        {upperNavbarDropdownContent.map((item) => (
                            <li key={item.id} className="flex items-center py-2 px-4 hover:bg-gray-100 cursor-pointer">
                                <span className='mr-4'>
                                    <img src={item.icon} width={24} height={24} alt="icon" />
                                </span>
                                <span>{item.label}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default UpperNavbar