import React from 'react'
import logo from '../../assets/logo.png';
import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";

const Header = () => {


    return (
        <>
        <header className='py-2 px-8 flex justify-between items-center bg-[#1a1a1a]'>
            
            {/* logo */}
            <div className='flex items-center gap-2'>
                <img 
                    className='w-8 h-8' 
                    src={logo} 
                    alt="restro logo" 
                />
                <h1 className='text-[#f5f5f5] text-lg font-semibold'>Restro</h1>
            </div>

            {/* search bar */}
            <div className="px-5 py-2 flex items-center gap-4 bg-[#1f1f1f] rounded-[15px] w-[500px]">
                <FaSearch className="text-[#b5b5b5] mr-2" size={14} />
                <input
                type="text"
                placeholder="Search"
                className="w-full bg-transparent text-[#f5f5f5] placeholder-[#8a8a8a] outline-none"
                />
            </div>

            {/* displaying logged user details */}
            <div className='flex items-center gap-4'>
                <div className='p-3 bg-[#1f1f1f] cursor-pointer rounded-[15px]'>
                    <FaBell className='text-[#f5f5f5] text-2xl' />
                </div>

                <div className='flex items-center gap-3 cursor-pointer'>
                    <FaUserCircle className='text-[#f5f5f5] text-4xl' />
                    <div className='flex flex-col items-start'>
                        <h1 className='text-[#f5f5f5] text-md font-semibold'>Piyush Shrivastava</h1>
                        <p className='text-[#ababab] text-xs font-medium'>Admin</p>
                    </div>
                </div>
            </div>

        </header>
        </>
    )
}

export default Header
