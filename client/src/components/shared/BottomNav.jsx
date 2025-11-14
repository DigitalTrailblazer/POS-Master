import React from 'react'
import { FaHome } from 'react-icons/fa'
import { MdOutlineReorder, MdTableBar } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import { BiSolidDish } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

const BottomNav = () => {

    const navigate = useNavigate()

    return (
        <div className='p-2 bg-[#262626] fixed bottom-0 left-0 right-0 h-15 flex justify-around'>

            <button
                onClick={() => navigate("/")}
                className='flex items-center justify-center w-[200px] text-[#f5f5f5] bg-[#343434] rounded-3xl'
            > 
                <FaHome size={20} className='mr-4 inline' /> 
                <p className='text-sm sm:text-base' >Home</p>
            </button>

            <button
                onClick={() => navigate("/orders")}
                className='flex items-center justify-center w-[200px] text-[#f5f5f5] bg-[#343434] rounded-3xl'
            > 
                <MdOutlineReorder size={20} className='mr-4 inline' /> 
                <p className='text-sm sm:text-base' >Orders</p>
            </button>

            <button
                onClick={() => navigate("/tables")}
                className='flex items-center justify-center w-[200px] text-[#f5f5f5] bg-[#343434] rounded-3xl'
            > 
                <MdTableBar size={20} className='mr-4 inline' /> 
                <p className='text-sm sm:text-base' >Tables</p>
            </button>

            <button
                className='flex items-center justify-center w-[200px] text-[#f5f5f5] bg-[#343434] rounded-3xl'
            > 
                <CiCircleMore size={20} className='mr-4 inline' /> 
                <p className='text-sm sm:text-base' >More</p>
            </button>


            <button
                className='p-3 bg-[#F6B100] text-[#f5f5f5] rounded-full items-center absolute bottom-7'
            >
                <BiSolidDish size={30} />
            </button>

        </div>
    )
}

export default BottomNav
