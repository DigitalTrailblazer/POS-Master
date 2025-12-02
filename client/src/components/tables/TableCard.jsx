import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateTable } from '../../redux/slices/customerSlice'

import {getAvatarName} from '../../utils/index.js'

const TableCard = ({ id, name, status, initial, seats}) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const handleClick = (name) => {
        if(status === "Booked"){
            return 
        }

        dispatch(updateTable({tableNo: name}))

        navigate("/menu")
    }

    return (
        <>
        <div onClick={() => handleClick(name)} className='bg-[#262626] w-[270px] rounded-lg mb-3 p-4 cursor-pointer hover:bg-[#1f1f1f]'>
            
            <div className='flex items-center justify-between px-1'>

                <h1 className='text-[#f5f5f5] text-base font-semibold'>Table {name}</h1> 
                <p className={`${status === "Booked" ? " text-green-600 bg-[#2b493e]" : "bg-[#987724] text-white"} text-xs py-1 px-3 rounded-lg`}>
                    {status}
                </p>
            </div>

            <div className='flex items-center justify-center my-3'>
                <h1 className='bg-[#025cca] text-white text-xl font-semibold w-16 h-16 flex items-center justify-center rounded-full'>
                    {getAvatarName(initial) || "N/A"}
                </h1>
            </div>

            <p className='text-[#ababab] text-xs'>
                Seats : <span className='text-[#f5f5f5]'>{seats}</span>
            </p>
        </div>
        </>
    )
}

export default TableCard