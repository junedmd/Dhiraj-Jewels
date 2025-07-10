import React from 'react';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import logo from "./logo.png";

const Navbar = () => {
    return (
        <>

            <div className="bg-[#861010] text-white text-center py-2 text-sm">
                We have delightful offers on rings, pendants
            </div>

            <div className="bg-white shadow-md">


                <div className="max-w-screen-xl mx-auto w-full px-4 py-3 flex items-center justify-between">


                    <div className="flex-shrink-0">
                        <img src={logo} alt="Logo" className="w-20 h-auto" />
                    </div>


                    <nav className="hidden md:flex gap-8 text-base font-medium text-black">
                        <a href="/" className="hover:text-[#861010] transition">Home</a>
                        <a href="/gold" className="hover:text-[#861010] transition">Gold</a>
                        <a href="/diamond" className="hover:text-[#861010] transition">Diamond</a>
                        <a href="/help" className="hover:text-[#861010] transition">Help</a>
                    </nav>


                    <div className="flex gap-9 text-xl">
                        <FaSearch className="cursor-pointer hover:text-[#861010]" />
                        <FaShoppingCart className="cursor-pointer hover:text-[#861010]" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
