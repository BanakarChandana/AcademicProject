import React, { useState } from 'react'
import { IoSearchCircle } from "react-icons/io5";
import { FiSearch, FiHeart, FiUser, FiShoppingBag, FiLogOut } from 'react-icons/fi';
import { BsBoxArrowRight } from 'react-icons/bs';
import { FaWhatsapp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
function HomePage() {
    const navigate = useNavigate();
    const [showImg,setImg]=useState(0);


    return (
        <div>
            <div className='flex '>
                <div className='text-2xl ml-2'><p><b>TrendyThreads</b></p></div>
                <div className="relative w-64 ml-200 justify-around">
                    <FiSearch className="absolute mt-3  top-2.5 left-3 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full pl-10 pr-4 py-2 mt-2  border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    />
                </div>
                <div className="flex gap-5 text-xl items-center">
                    <FiHeart className="cursor-pointer ml-6  transform transition duration-300 hover:scale-125" />
                    <FiUser className="cursor-pointer  transform transition duration-300 hover:scale-125" />


                    <div className="relative cursor-pointer">
                        <FiShoppingBag />
                        <span className=" absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center cursor-pointer transform transition duration-300 hover:scale-125">0</span>
                    </div>

                    <FaWhatsapp className="cursor-pointer transform transition duration-300 hover:scale-125" />
                    <RxHamburgerMenu className='cursor-pointer transform transition duration-300 hover:scale-125' />
                </div>
            </div>
            <div>
                <img src={ images[setImg]}/>


            </div>
           









        </div>
    )
}

export default HomePage
