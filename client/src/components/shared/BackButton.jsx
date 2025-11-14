import React from 'react'
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';


const BackButton = () => {

    const navigate = useNavigate()

    return (
        <button
            onClick={() => navigate(-1)}
            className='bg-[#025cca] text-white p-2.5 text-xl font-bold rounded-full'
        >
            <IoMdArrowBack />
        </button>
    )
}

export default BackButton
